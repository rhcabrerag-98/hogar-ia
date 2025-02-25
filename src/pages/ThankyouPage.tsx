import { Link, useNavigate, useParams } from "react-router-dom";
import { useCustomer, useOrder, useUser } from "../hooks";
import { Loader } from "../components/shared/Loader";
import { CiCircleCheck } from "react-icons/ci";
import { formatPrice } from "../helpers";
import { useEffect } from "react";
import { supabase } from "../supabase/client";

interface OrderDetails {
  email: string;
  orderDetails: {
    orderItems: {
      productName: string;
      color_name: string;
      storage: string;
      price: string;
    }[];
    totalAmount: string;
    address: {
      addressLine1: string;
      city: string;
    };
  };
}

interface SendEmailResponse {
  message: string;
}

const sendEmail = async (orderDetails: OrderDetails): Promise<void> => {
  try {
    const response = await fetch(
      `https://hogar-ia-backend-git-main-ronald-cabreras-projects.vercel.app/api/send-email`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderDetails }),
      }
    );

    if (!response.ok) {
      throw new Error("Error al enviar el correo");
    }

    const data: SendEmailResponse = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error("Error al enviar el correo:", error);
  }
};

export const ThankyouPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useOrder(Number(id));
  const { session, isLoading: isLoadingSession } = useUser();
  const userId = session?.user?.id ?? "";
  const { data: customer } = useCustomer(userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (customer?.email && data) {
      //console.log(customer.email);
      console.log(data);
      const orderDetails: OrderDetails = {
        email: customer.email,
        orderDetails: {
          orderItems: data.orderItems.map((item) => ({
            productName: item.productName,
            color_name: item.color_name,
            storage: item.storage,
            price: item.price.toString(),
          })),
          totalAmount: data.totalAmount.toString(),
          address: {
            addressLine1: data.address.addressLine1,
            city: data.address.city,
          },
        },
      };
      sendEmail(orderDetails);
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_OUT" || !session) {
          navigate("/login");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [customer?.email, data, navigate]);

  if (isError) return <div>Error al cargar la orden</div>;
  if (isLoading || isLoadingSession || !data) return <Loader />;

  return (
    <div className="flex flex-col h-screen">
      <header className="flex flex-col items-center justify-center px-10 py-12 text-black">
        <Link
          to="/"
          className="self-center text-4xl font-bold tracking-tighter transition-all md:text-5xl"
        >
          <p>
            Hogar<span className="text-cyan-600">.IA</span>
          </p>
        </Link>
      </header>

      <main className="container flex flex-col items-center flex-1 gap-10">
        <div className="flex items-center gap-3">
          <CiCircleCheck size={40} />
          <p className="text-4xl">¡Gracias, {data.customer.full_name}!</p>
        </div>

        <div className="border border-slate-200 w-full md:w-[600px] p-5 rounded-md space-y-3">
          <h3 className="font-medium">Tu pedido está confirmado</h3>
          <p className="text-sm">
            Gracias por realizar tu compra en Hogar.IA. Para completar la
            transferencia, te compartimos los siguientes datos para productos
            derivados para el hogar.
          </p>
          <div className="space-y-0.5 text-sm">
            <p>BANCO BCP</p>
            <p>Razón Social: Hogar.IA</p>
            <p>RUC: 123456789000</p>
            <p>Tipo de cuenta: Corriente</p>
            <p>Número de cuenta: 1234567890</p>
          </div>
          <p className="text-sm">
            Una vez realizada la transferencia, comparte tu comprobante a
            rhcabrerag@outlook.com para procesarla y hacerte la entrega de tu
            dispositivo a domicilio.
          </p>
        </div>

        <div className="border border-slate-200 w-full p-5 rounded-md space-y-3 md:w-[600px]">
          <h3 className="font-medium">Detalles del pedido</h3>
          <ul className="space-y-3">
            {data.orderItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between gap-3"
              >
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="object-contain w-16 h-16"
                />
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between">
                    <p className="font-semibold">{item.productName}</p>
                    <p className="mt-1 text-sm font-medium text-gray-600">
                      {formatPrice(item.price)}
                    </p>
                  </div>
                  <p className="text-[13px] text-gray-600">
                    {item.storage} / {item.color_name}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">
              {formatPrice(data.totalAmount)}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Información de contacto:</p>
              <p>{data.customer.email}</p>
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Métodos de pago:</p>
              <p>Depósito bancario - {formatPrice(data.totalAmount)}</p>
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Dirección de envío</p>
              <p>{data.address.addressLine1}</p>
              {data.address.addressLine2 && <p>{data.address.addressLine2}</p>}
              <p>
                {data.address.city}, {data.address.state}{" "}
                {data.address.postalCode}
              </p>
              <p>{data.address.country}</p>
            </div>
            <div className="flex flex-col text-sm">
              <p className="font-semibold">Método de envío</p>
              <p>Standard</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

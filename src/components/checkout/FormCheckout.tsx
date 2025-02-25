import { useForm } from "react-hook-form";
import { InputAddress } from "./InputAddress";
import { AddressFormValues, addressSchema } from "../../lib/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { ItemsCheckout } from "./ItemsCheckout";
import { useCreateOrder } from "../../hooks";
import { useCartStore } from "../../store/cart.store";
import { ImSpinner2 } from "react-icons/im";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

export const FormCheckout = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),
  });

  const stripe = useStripe();
  const elements = useElements();
  const { mutate: createOrder, isPending } = useCreateOrder();
  const cleanCart = useCartStore((state) => state.cleanCart);
  const cartItems = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);
  //const API_URL = import.meta.env.VITE_API_URL;

  const onSubmit = handleSubmit(async (data) => {
    if (!stripe || !elements) {
      console.error("Stripe o Elements no están listos");
      return;
    }

    // 1️⃣ 👉 Obtener `clientSecret` del backend
    const response = await fetch(
      `https://hogar-ia-backend.vercel.app/api/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount * 100, currency: "usd" }),
      }
    );

    // ✅ Usar un nombre diferente para la variable
    const responseData = await response.json();
    console.log("Respuesta completa del backend:", responseData);

    // ✅ Extraer `clientSecret` correctamente
    const clientSecret =
      responseData.clientSecret || responseData.client_secret;
    console.log("clientSecret recibido:", clientSecret);

    if (!clientSecret) {
      console.error("No se recibió clientSecret del backend");
      return;
    }

    // 2️⃣ 👉 Obtener el CardElement
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) {
      console.error("No se encontró CardElement");
      return;
    }

    // 3️⃣ 👉 Confirmar el pago con Stripe
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: data.addressLine1, // O el nombre del usuario
        },
      },
    });

    if (result.error) {
      console.error("Error en el pago:", result.error.message);
      return;
    }

    if (!result.paymentIntent || result.paymentIntent.status !== "succeeded") {
      console.error("El pago no fue exitoso:", result.paymentIntent);
      return;
    }
    console.log("Pago exitoso:", result.paymentIntent);

    // 4️⃣ 👉 Si el pago fue exitoso, registrar la orden en la base de datos
    const orderInput = {
      address: data,
      cartItems: cartItems.map((item) => ({
        variantId: item.variantId,
        quantity: item.quantity,
        price: item.price,
      })),

      totalAmount,
      paymentIntentId: result.paymentIntent.id, // Agregar el ID del pago exitoso
    };

    createOrder(orderInput, {
      onSuccess: () => {
        cleanCart();
      },
    });
  });

  if (isPending) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-3">
        <ImSpinner2 className="w-10 h-10 animate-spin" />
        <p className="text-sm font-medium">Estamos procesando tu pedido</p>
      </div>
    );
  }

  return (
    <div>
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold tracking-normal">Entrega</h3>

          <InputAddress
            register={register}
            errors={errors}
            name="addressLine1"
            placeholder="Dirección principal"
          />
          <InputAddress
            register={register}
            errors={errors}
            name="addressLine2"
            placeholder="Dirección adicional (Opcional)"
          />
          <InputAddress
            register={register}
            errors={errors}
            name="state"
            placeholder="Estado / Provincia"
          />
          <InputAddress
            register={register}
            errors={errors}
            name="city"
            placeholder="Ciudad"
          />
          <InputAddress
            register={register}
            errors={errors}
            name="postalCode"
            placeholder="Código Postal (Opcional)"
          />

          <select
            className="p-3 border rounded-md border-slate-200"
            {...register("country")}
          >
            <option value="Cajamarca">Cajamarca</option>
          </select>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium">Método de pago</p>
          <div className="p-4 border rounded-md border-slate-600 bg-stone-100">
            <CardElement className="p-3 border border-gray-300 rounded-md" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-3xl font-semibold">Resumen del pedido</h3>
          <ItemsCheckout />
        </div>

        <button
          type="submit"
          className="bg-black text-white py-3.5 font-bold tracking-wide rounded-md mt-2"
        >
          Finalizar Pedido
        </button>
      </form>
    </div>
  );
};

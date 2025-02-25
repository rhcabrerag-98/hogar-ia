import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/links";
import {
  HiOutlineSearch,
  HiOutlineShoppingBag,
  HiOutlineUser,
} from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";
import { Logo } from "./Logo";
import { useGlobalStore } from "../../store/global.store";
import { useCartStore } from "../../store/cart.store";
import { useCustomer, useUser, useRoleUser } from "../../hooks";
import { LuLoader } from "react-icons/lu";
import Avvvatars from "avvvatars-react";
import { Loader } from "../shared/Loader";
import { signOut } from "../../actions";
import { useState, useEffect } from "react";

export const Navbar = () => {
  //const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
  const API_URL = import.meta.env.REACT_APP_API_URL || "http://localhost:5000";

  const openSheet = useGlobalStore((state) => state.openSheet);
  const totalItemsInCart = useCartStore((state) => state.totalItemsInCart);
  const setActiveNavMobile = useGlobalStore(
    (state) => state.setActiveNavMobile
  );

  const { session, isLoading: isLoadingSession } = useUser();
  const userId = session?.user?.id ?? "";
  const { data: customer } = useCustomer(userId);
  const { data: role, isLoading: isLoadingRole } = useRoleUser(userId);

  const [userImage, setUserImage] = useState(null);

  const fetchUserProfileImage = async () => {
    if (!customer?.id) return;

    try {
      const response = await fetch(
        `https://hogar-ia-backend.vercel.app/api/profile/latest-image/${customer.id}`
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.imageUrl);
        setUserImage(data.imageUrl);
      } else {
        setUserImage(null);
      }
    } catch (error) {
      console.error("Error al obtener la imagen del perfil", error);
      setUserImage(null);
    }
  };

  useEffect(() => {
    if (session && customer?.id) {
      fetchUserProfileImage();
    }
  }, [session, customer?.id]);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (!files) return;
    const file = files[0];
    if (!file || !customer?.id) return;

    const fileExtension = file.name.split(".").pop();
    const fileName = `${customer.id}.${fileExtension}`;

    const formData = new FormData();
    formData.append("file", file, fileName);
    formData.append("userId", customer.id);

    try {
      const response = await fetch(
        "https://hogar-ia-backend.vercel.app/api/profile/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Error al subir la imagen");
      }

      const data = await response.json();
      setUserImage(data.url);

      // **Recargar la página**
      window.location.reload();

      console.log("Imagen subida correctamente");
    } catch (error) {
      console.error("Error al subir la imagen:", (error as Error).message);
    }
  };

  if (isLoadingSession || isLoadingRole) return <Loader />;

  return (
    <header className="flex items-center justify-between px-5 py-4 text-black bg-white border-b border-slate-200 lg:px-12">
      <Logo />

      <nav className="hidden space-x-5 md:flex">
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `${
                isActive ? "text-cyan-600 underline" : ""
              } transition-all duration-300 font-medium hover:text-cyan-600 hover:underline`
            }
          >
            {link.title}
          </NavLink>
        ))}
        {session && (
          <NavLink
            to="/account/pedidos"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "text-blue-800 font-medium"
            }
          >
            Pedidos
          </NavLink>
        )}
        {session && role === "admin" && (
          <NavLink
            to="/dashboard/productos"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 underline"
                : "text-green-800 font-medium"
            }
          >
            Dashboard
          </NavLink>
        )}
      </nav>

      <div className="flex items-center gap-5">
        {session && customer?.full_name && (
          <span className="text-sm font-medium text-gray-700">
            Bienvenido, {customer.full_name}
          </span>
        )}

        <button onClick={() => openSheet("search")}>
          <HiOutlineSearch size={25} />
        </button>

        {isLoadingSession ? (
          <LuLoader className="animate-spin" size={60} />
        ) : session ? (
          <div className="relative z-20 group">
            <div className="cursor-pointer">
              {userImage ? (
                <img
                  src={userImage}
                  alt="Perfil"
                  className="object-cover w-10 h-10 rounded-full"
                />
              ) : (
                <Avvvatars value={customer?.full_name || "Usuario"} />
              )}
            </div>

            <div className="absolute right-0 z-30 w-48 mt-2 transition-opacity bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100">
              <ul className="py-2">
                <li>
                  <label className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100">
                    Actualizar Foto
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </label>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                  >
                    Cerrar Sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <HiOutlineUser size={25} />
          </Link>
        )}

        <button className="relative" onClick={() => openSheet("cart")}>
          <span className="absolute grid w-5 h-5 text-xs text-white bg-black rounded-full -bottom-2 -right-2 place-items-center">
            {totalItemsInCart}
          </span>
          <HiOutlineShoppingBag size={25} />
        </button>
      </div>

      <button className="md:hidden" onClick={() => setActiveNavMobile(true)}>
        <FaBarsStaggered size={25} />
      </button>
    </header>
  );
};

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

export const Navbar = () => {
  const openSheet = useGlobalStore((state) => state.openSheet);
  const totalItemsInCart = useCartStore((state) => state.totalItemsInCart);
  const setActiveNavMobile = useGlobalStore(
    (state) => state.setActiveNavMobile
  );

  const { session, isLoading: isLoadingSession } = useUser();
  const userId = session?.user?.id;
  const { data: customer } = useCustomer(userId!);
  const { data: role, isLoading: isLoadingRole } = useRoleUser(
    userId as string
  );

  if (isLoadingSession || isLoadingRole) return <Loader />;
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <header className="flex items-center justify-between px-5 py-4 text-black bg-white border-b border-slate-200 lg:px-12">
      <Logo />

      <nav className="hidden space-x-5 md:flex">
        {navbarLinks.map((link, index) => (
          <>
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
            {index === 0 &&
              session && ( // Agregar "Pedidos" después de "Inicio"
                <NavLink
                  to="/account/pedidos"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600 underline"
                      : "text-blue-800 font-medium"
                  }
                >
                  Pedidos
                </NavLink>
              )}
          </>
        ))}
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
        {session && ( // Botón de "Cerrar Sesión"
          <button
            onClick={handleLogout}
            className="font-medium text-purple-800 underline transition-all duration-300 hover:text-purple-600"
          >
            Cerrar Sesión
          </button>
        )}
      </nav>

      <div className="flex items-center gap-5">
        <button onClick={() => openSheet("search")}>
          <HiOutlineSearch size={25} />
        </button>

        {isLoadingSession ? (
          <LuLoader className="animate-spin" size={60} />
        ) : session ? (
          <div className="relative">
            <Link to="/account">
              <Avvvatars value={customer?.full_name || "Usuario"} />
            </Link>
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

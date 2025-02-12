import { handleGoogleSignIn, signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <form className="flex-1 flex flex-col min-w-64">
      <h1 className="text-2xl font-medium">Acceder</h1>
      <p className="text-sm text-foreground">
        ¿No tienes una cuenta?{" "}
        <Link className="text-foreground font-medium underline" href="/sign-up">
          Registrarse
        </Link>
      </p>
      <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
        <Label htmlFor="email">Email</Label>
        <Input name="email" placeholder="ronald@hogaria.com" required />
        <div className="flex justify-between items-center">
          <Label htmlFor="password">Contraseña</Label>
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Olvidaste tu Contraseña?
          </Link>
        </div>
        <Input
          type="password"
          name="password"
          placeholder="Tu contraseña"
          required
        />
        <SubmitButton
          className="px-4 py-2 flex items-center justify-center gap-2"
          pendingText="Iniciando Sesión..."
          formAction={signInAction}
        >
          <IoMailOutline className="text-xl" />
          Acceder
        </SubmitButton>
        <FormMessage message={searchParams} />

        {/* Separador */}
        <div className="flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">o</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Botón para iniciar sesión con Google */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center gap-2"
        >
          <FaGoogle className="text-xl" />
          Iniciar Sesión con Google
        </button>
      </div>
    </form>
  );
}

import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";
import { InputText, InputPass } from "../components/common/Input";
import { SocialButton } from "../components/common/SocialButton";

import uzerIcon from "../assets/uzer.svg";

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="w-8/12 h-screen flex items-center justify-center flex-col text-center">
        <img
          src={uzerIcon}
          alt="Uzer"
          title="Uzer"
          width={64}
          height={64}
          className="absolute top-5 left-5"
        />

        <h1 className="text-teal-500 text-6xl font-bold leading-tight mb-8">
          Bem-vindo ao <span className="text-zinc-400">Uzer</span>
        </h1>

        <ul className="flex gap-3 mb-10">
          <li>
            <SocialButton variant="facebook" />
          </li>
          <li>
            <SocialButton variant="google" />
          </li>
          <li>
            <SocialButton variant="linkedin" />
          </li>
        </ul>

        <p className="text-zinc-400 font-light text-base mb-4">
          ou use a conta de e-mail:
        </p>

        <form className="w-full flex flex-col items-center">
          <InputText icon="mail" placeholder="E-mail" />
          <InputPass icon="lockPassword" placeholder="Senha" />

          <a
            href="/"
            className="text-zinc-800 font-normal underline underline-offset-8 decoration-zinc-200 text-lg mt-4 mb-10"
          >
            Esqueceu sua senha?
          </a>

          <Button label="Entrar" onClick={() => navigate("/users")} />
        </form>
      </div>

      <div className="w-4/12 h-screen bg-teal-500 flex items-center justify-center flex-col gap-10 px-32 text-center">
        <h1 className="text-white text-5xl font-bold">Novo por aqui?</h1>
        <p className="text-white font-light text-2xl">
          Realize seu cadastro e obtenha acesso completo ao portal!
        </p>
        <Button
          label="Inscrever-se"
          variant="outline"
          onClick={() => navigate("/registration")}
        />
      </div>
    </div>
  );
}

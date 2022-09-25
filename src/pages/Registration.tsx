import { useNavigate } from "react-router-dom";
import { Button } from "../components/common/Button";
import { InputText, InputPass } from "../components/common/Input";
import { SocialButton } from "../components/common/SocialButton";

import uzerMonoIcon from "../assets/uzer-mono.svg";

export function Registration() {
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="w-4/12 h-screen bg-teal-500 flex items-center justify-center flex-col gap-10 px-32 text-center">
        <img
          src={uzerMonoIcon}
          alt="Uzer"
          title="Uzer"
          width={64}
          height={64}
          className="absolute top-5 left-5"
        />
        <h1 className="text-white text-5xl font-bold">
          Que bom ver você denovo!
        </h1>
        <p className="text-white font-light text-2xl">
          Se você já possui um cadastro, informe suas credenciais na página de
          login para acessar o conteúdo.
        </p>
        <Button
          label="Entrar"
          variant="outline"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="w-8/12 h-screen flex items-center justify-center flex-col text-center">
        <h1 className="text-teal-500 text-6xl font-bold mb-10">Criar Conta</h1>

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
          <InputText icon="user" placeholder="Nome" />
          <InputText icon="mail" placeholder="E-mail" />
          <InputPass icon="lockPassword" placeholder="Senha" />
          <Button type="submit" label="Inscrever-se" className="mt-5" />
        </form>
      </div>
    </div>
  );
}

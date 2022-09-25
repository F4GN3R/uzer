import UserLineIcon from "remixicon-react/UserLineIcon";
import MailLineIcon from "remixicon-react/MailLineIcon";
import LockPasswordLineIcon from "remixicon-react/LockPasswordLineIcon";
import EyeLineIcon from "remixicon-react/EyeLineIcon";
import EyeOffLineIcon from "remixicon-react/EyeOffLineIcon";
import { useState } from "react";

interface InputTextProps {
  icon?: "mail" | "user" | "lockPassword";
  type?: "text" | "email";
  placeholder?: string;
}

const ICON = {
  user: <UserLineIcon className="text-zinc-400" />,
  mail: <MailLineIcon className="text-zinc-400" />,
  lockPassword: <LockPasswordLineIcon className="text-zinc-400" />,
};

export function InputText({
  icon,
  type = "text",
  placeholder,
}: InputTextProps) {
  return (
    <div className="w-5/12 flex bg-zinc-100 rounded-md mb-4 gro">
      {icon && <div className="p-4">{ICON[icon]}</div>}
      <input
        type={type}
        placeholder={placeholder}
        className="bg-zinc-100 rounded-md flex-1 outline-none text-lg"
      />
    </div>
  );
}

export function InputPass({ icon, placeholder }: InputTextProps) {
  const [type, setType] = useState<string>("password");

  return (
    <div className="w-5/12 flex bg-zinc-100 rounded-md mb-4">
      {icon && <div className="p-4">{ICON[icon]}</div>}
      <input
        type={type}
        placeholder={placeholder}
        className="bg-zinc-100 rounded-md flex-1 outline-none text-lg"
      />
      <div
        className="p-4 cursor-pointer"
        onClick={() => setType(type === "password" ? "text" : "password")}
      >
        {type === "password" ? (
          <EyeLineIcon className="text-zinc-400" />
        ) : (
          <EyeOffLineIcon className="text-zinc-400" />
        )}
      </div>
    </div>
  );
}

import FacebookFillIcon from "remixicon-react/FacebookFillIcon";
import GoogleFillIcon from "remixicon-react/GoogleFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";

interface SocialButtonProps {
  variant: "facebook" | "google" | "linkedin";
  onClick?: () => void;
}

const SOCIAL_ICONS = {
  facebook: <FacebookFillIcon size={20} />,
  google: <GoogleFillIcon size={20} />,
  linkedin: <LinkedinFillIcon size={20} />,
};

export function SocialButton({ variant, onClick }: SocialButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-12 h-12 shadow-md rounded-full border-2 border-zinc-200 text-gray-800 flex items-center justify-center"
    >
      {SOCIAL_ICONS[variant]}
    </button>
  );
}

import Link from "next/link";

interface Props {
  id?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = ({
  id,
  className,
  onClick,
  type,
  disabled,
  children,
}: Props) => {
  return (
    <button
      className={`${className} ${
        !disabled ? "opacity-100" : "opacity-40"
      } text-white text-sm font-bold transition-all duration-200 rounded-full outline-none bg-blue`}
      id={id || ""}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

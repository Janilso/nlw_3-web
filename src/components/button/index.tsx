import React, { ButtonHTMLAttributes, FormEvent } from "react";
// import { IconType } from "react-icons";
import "./styles.scss";

type typesButton = "primary" | "primary-dark" | "secondary" | "green";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  typeButton?: typesButton;
  title?: string;
  disabled?: boolean;
  icon?: any;
  altIcon?: string;
  onClick?(e: FormEvent): void;
}

const Button: React.FC<ButtonProps> = ({
  typeButton = "primary-dark",
  title = "",
  disabled = false,
  icon,
  onClick,
  altIcon,
  ...res
}) => {
  return (
    <button
      className={`button button-${typeButton}`}
      onClick={onClick}
      {...res}
    >
      {title && <span>{title}</span>}
      {icon}
    </button>
  );
};

export default Button;

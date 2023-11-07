import React, { ReactNode, FC } from "react";

interface buttonProps {
  variant?: "primary" | "secondary";
  size?: "small" | "large";
  backgroundColor?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  paddingHorizontal?: string;
  paddingVertical?: string;
  border?:string;
  borderColor?:string;
}
const Button: FC<buttonProps> = ({
  variant = "primary",
  size = "large",
  backgroundColor,
  className,
  children,
  onClick,
  paddingVertical,
  paddingHorizontal,
  border,
  borderColor,
}) => {
  if (variant === "primary") {
    return <button className="button">{children}</button>;
  } else if (variant === "secondary") {
    return <button className="btn-secondary">{children}</button>
  }
  return (
    <div>
      <button
        className={`
        ${variant} 
        ${size} 
        ${backgroundColor} 
        ${className} 
        ${onClick} 
        ${paddingHorizontal} 
        ${paddingVertical} 
        ${border}
        ${borderColor}
        `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;

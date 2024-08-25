import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={twMerge("bg-slate-800 text-white px-3 py-2 rounded", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;

import Link from "next/link";
import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
}

function Button({ href, children, className, ...props }: IButtonProps) {
  const defaultStyle = "bg-slate-800 text-white px-3 py-2 rounded";
  return href ? (
    <Link className={twMerge(defaultStyle, "block")} href={href}>
      {children}
    </Link>
  ) : (
    <button className={twMerge(defaultStyle, className)} {...props}>
      {children}
    </button>
  );
}

export default Button;

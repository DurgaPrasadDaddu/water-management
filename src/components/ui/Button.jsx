import React from "react";
import Link from "next/link";

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
}) => {

  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#00A3E0] text-white hover:bg-[#008ac0] ",
    secondary:
      "bg-white text-[#00A3E0]  hover:bg-green-500 hover:text-white",
    outline:
      "border border-gray-300 text-gray-700 hover:border-[#00A3E0] hover:text-[#00A3E0]",
  };

  if (href) {
    return (
      <Link
        href={href}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
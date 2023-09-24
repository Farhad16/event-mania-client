import React, { ReactNode } from "react";

type buttonProps = {
  className?: string;
  children?: ReactNode;
  onClick?: () => {};
  disabled?: boolean;
  type?: "button" | "submit";
  disableHover?: boolean;
};

function CustomButton({
  className,
  children,
  onClick,
  disabled,
  type,
  disableHover,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={` text-black outline-none focus:outline-none pt-2 pb-3 px-6 !text-md bg-gradient-to-r from-[#50f492] to-[#0aefff] rounded-full font-semibold transition duration-200 ${className} ${
        !disableHover && "hover:scale-[1.05]"
      }`}
    >
      {children}
    </button>
  );
}

export default CustomButton;

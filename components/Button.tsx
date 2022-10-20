import React, { forwardRef, ReactNode } from "react";
import { Absurd } from "../helpers/absurd";

export type ButtonRef = HTMLButtonElement;

export type ButtonHierarchy =
  | "primary"
  | "secondary"
  | "secondary-gray"
  | "tertiary"
  | "tertiary-gray";

export type ButtonSize = "sm" | "md" | "lg" | "xl" | "2xl";

export type ButtonIconPosition = "leading" | "trailing";

export type ButtonType = "submit" | "button" | "reset";

export interface ButtonProps {
  hierarchy?: ButtonHierarchy;
  size?: ButtonSize;
  label: string;
  path?: string;
  iconPosition?: ButtonIconPosition;
  children?: ReactNode;
  onClick?: () => void;
  type?: ButtonType;
}

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const {
    label,
    onClick,
    size = "md",
    hierarchy = "primary",
    iconPosition = "leading",
    type = "button",
    children,
  } = props;
  return (
    <button
      className={`${handleButtonSize(size)} ${handleButtonHierarchy(
        hierarchy
      )} ${
        iconPosition === "trailing" && "flex-row-reverse"
      } inline-flex flex-grow-0 items-center justify-center gap-2 font-sans text-sm font-medium transition-colors duration-300 disabled:cursor-not-allowed`}
      ref={ref}
      type={type}
      onClick={onClick}
    >
      {children} {label}
    </button>
  );
});

export const handleButtonSize = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return "px-3.5 py-2";
    case "md":
      return "px-4 py-2.5";
    case "lg":
      return "px-4.5 py-2.5";
    case "xl":
      return "px-5 py-3";
    case "2xl":
      return "px-7 py-4";
    default:
      Absurd;
  }
};

export const handleButtonHierarchy = (hierarchy: ButtonHierarchy) => {
  switch (hierarchy) {
    case "primary":
      return "bg-primary-600 hover:bg-primary-700 text-white focus:ring-4 border border-primary-600 focus:ring-primary-100 disabled:bg-primary-200 shadow-xs rounded-lg";
    case "secondary":
      return "bg-primary-50 border-primary-50 hover:bg-primary-100 text-primary-700 focus:ring-4 focus:ring-primary-100 disabled:bg-primary-25 disabled:text-primary-300 shadow-xs rounded-lg";
    case "secondary-gray":
      return "bg-white border border-gray-300 text-gray-700 focus:ring-4 focus:ring-gray-100 hover:bg-gray-50 hover:text-gray-800 disabled:hover:bg-white disabled:text-gray-300 disabled:ring-gray-200 shadow-xs rounded-lg";
    case "tertiary":
      return "bg-white text-primary-700 border border-white hover:bg-primary-50 disabled:text-gray-300 disabled:hover:bg-white rounded-lg shadow-xs";
    case "tertiary-gray":
      return "bg-white text-gray-500 border border-white hover:bg-gray-50 hover:text-gray-600 disabled:text-gray-300 disabled:hover:bg-white rounded-lg";
    default:
      Absurd;
  }
};

Button.displayName = "Button";

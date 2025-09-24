import React from "react";

export const Button = ({
  children,
  variant = "default",
  className = "",
  ...props
}) => {
  let baseStyles =
    "px-4 py-2 rounded-lg font-medium focus:outline-none transition-all duration-200";

  let variantStyles = "";

  switch (variant) {
    case "primary":
      variantStyles =
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300";
      break;
    case "secondary":
      variantStyles =
      
        "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300";
      break;
    case "danger":
      variantStyles =
        "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300";
      break;
    case "outline":
      variantStyles =
        "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300";
      break;
    default:
      variantStyles =
        "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300";
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

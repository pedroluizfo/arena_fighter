import React from "react";

const sizeClasses = {
  txtPressStart2PRegular30: "font-normal font-pressstartp",
  txtPressStart2PRegular20: "font-normal font-pressstartp",
  txtPressStart2PRegular40: "font-normal font-pressstartp",
  txtPressStart2PRegular12WhiteA70001: "font-normal font-pressstartp",
  txtPressStart2PRegular12: "font-normal font-pressstartp",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

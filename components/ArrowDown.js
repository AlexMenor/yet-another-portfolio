import React from "react";

function Icon({ size, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      className={`inline ${className}`}
    >
      <path d="M0 7.33L2.829 4.5l9.175 9.339L21.171 4.5 24 7.33 12.004 19.5z"></path>
    </svg>
  );
}

export default Icon;

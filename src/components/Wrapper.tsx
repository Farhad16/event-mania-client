import React from "react";

function Wrapper({ children, className }: any) {
  return <div className={`px-12 ${className}`}>{children}</div>;
}

export default Wrapper;

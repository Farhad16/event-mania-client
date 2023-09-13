import React from "react";

function Wrapper({ children, className, id }: any) {
  return (
    <div className={`px-12 ${className}`} id={id}>
      {children}
    </div>
  );
}

export default Wrapper;

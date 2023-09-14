import React from "react";

function Wrapper({ children, className, id }: any) {
  return (
    <div className={`sm:px-12 px-6 overflow-x-hidden ${className}`} id={id}>
      {children}
    </div>
  );
}

export default Wrapper;

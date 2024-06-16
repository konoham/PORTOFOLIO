import React from "react";

const Stack = ({ img, width }) => {
  return (
    <div className="flex justify-start items-center gap-2 mb-10">
      <hr className={width} id="hr" />
      <img src={img} alt={img} className="w-[40px] h-[40px]" srcset="" />
    </div>
  );
};

export default Stack;

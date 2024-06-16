import React from "react";
import Stack from "./stack";

const TackStack = () => {
  return (
    <div className="mt-[180px]" id="tackstack">
      <Stack img={"./tackstack/html.png"} width={"w-[2rem]"} />
      <Stack img={"./tackstack/css.svg"} width={"w-[4rem]"} />
      <Stack img={"./tackstack/js.png"} width={"w-[6rem]"} />
      <Stack img={"./tackstack/raect.png"} width={"w-[8rem]"} />
      <Stack img={"./tackstack/next.png"} width={"w-[10rem]"} />
      <Stack img={"./tackstack/tailwind.png"} width={"w-[12rem]"} />
    </div>
  );
};

export default TackStack;

import React, { useState, useEffect, useRef } from "react";
import { DotsThreeVertical } from "@phosphor-icons/react";

const Detail = ({ item }) => {
  const [isClose, setIsClose] = useState(false);
  const detailsRef = useRef(null);

  const handleScrollOrTouch = () => {
    setIsClose(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScrollOrTouch);

    return () => {
      document.removeEventListener("scroll", handleScrollOrTouch);
    };
  }, [isClose]);

  return (
    <>
      <details
        ref={detailsRef}
        className="text-sm"
        onClick={() => setIsClose(false)}
      >
        <summary className="list-none cursor-pointer">
          <DotsThreeVertical size={20} />
        </summary>
        <ul
          className={`absolute top-[95%] left-[95%] z-[60] border-primary border-2 py-2 px-8 box-border w-fit shadow-sm bg-transparent backdrop-blur-sm rounded-md ${
            isClose ? "hidden" : ""
          }`}
        >
          {item?.map((items, i) => (
            <li key={i}>{items}</li>
          ))}
        </ul>
      </details>
    </>
  );
};

export default Detail;

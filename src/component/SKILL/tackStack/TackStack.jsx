import { motion } from "framer-motion";
import { Fragment } from "react";

const TackStack = () => {
  const variant = {
    hidden: {
      x: -300,
      scaleX: 0.2,
      opacity: 0,
    },
    visible: (i) => ({
      x: 0,
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.2 * i },
    }),
  };

  const stack = [
    {
      img: "./tackstack/html.png",
      width: "w-[2rem]",
    },
    {
      img: "./tackstack/css.svg",
      width: "w-[4rem]",
    },
    {
      img: "./tackstack/js.png",
      width: "w-[6rem]",
    },
    {
      img: "./tackstack/raect.png",
      width: "w-[8rem]",
    },
    {
      img: "./tackstack/next.png",
      width: "w-[10rem]",
    },
    {
      img: "./tackstack/tailwind.png",
      width: "w-[12rem]",
    },
  ];

  return (
    <div className="mt-[140px]" id="tackstack">
      {stack.map((items, i) => (
        <div key={i} className="flex justify-start items-center gap-2 mb-10">
          <motion.hr
            key={i}
            variants={variant}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            custom={i}
            className={items.width}
            id="hr"
          />
          <motion.img
            key={i}
            variants={variant}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            custom={i}
            src={items.img}
            alt={"img"}
            className="w-[40px] h-[40px]"
            srcset=""
          />
        </div>
      ))}
    </div>
  );
};

export default TackStack;

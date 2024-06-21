import { motion } from "framer-motion";

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
      width: "md:w-[2rem]",
    },
    {
      img: "./tackstack/css.svg",
      width: "md:w-[4rem]",
    },
    {
      img: "./tackstack/js.png",
      width: "md:w-[6rem]",
    },
    {
      img: "./tackstack/raect.png",
      width: "md:w-[8rem]",
    },
    {
      img: "./tackstack/next.png",
      width: "md:w-[10rem]",
    },
    {
      img: "./tackstack/tailwind.png",
      width: "md:w-[12rem]",
    },
  ];

  return (
    <div
      className="md:mt-[140px] grid grid-cols-2 justify-self-center w-full px-4"
      id="tackstack"
    >
      {stack.map((items, i) => (
        <div
          key={i}
          className="flex justify-start items-center md:gap-2 md:mb-10"
          id="stack"
        >
          <motion.hr
            key={i}
            variants={variant}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            custom={i}
            className={`${items.width}`}
            id="hr"
            style={{ "--i": i }}
          />
          <motion.img
            variants={variant}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            custom={i}
            src={items.img}
            alt={"img"}
            className="w-[80px] h-[80px] md:w-[40px] md:h-[40px]"
            id="stack-img"
          />
        </div>
      ))}
    </div>
  );
};

export default TackStack;

import { motion } from "framer-motion";
import Data from "../../data/library";
import { X } from "@phosphor-icons/react";

const Library = () => {
  const data = Data;
  const variant = {
    hidden: { y: 300, x: -100, scale: 0.2, opacity: 0 },
    visible: (i) => ({
      y: 0,
      scale: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5 * i },
    }),
  };

  return (
    <div id="library" className="mt-[130px]">
      <div className="container mx-auto flex justify-center items-center gap-4">
        {data.map((item, i) => (
          <motion.div
            key={i}
            variants={variant}
            initial="hidden"
            transition="transition"
            whileInView="visible"
            viewport={{ once: true, margin: "130px 0px" }}
            custom={i}
            className="w-[300px] h-fit min-h-[400px] box-border bg-card border-2 shadow-sm rounded-lg"
          >
            <img
              src={item.img}
              className="rounded-t-md block mx-auto w-full h-[150px]"
            />
            <h1 className="h-fit w-full pt-4 text-treed text-xl font-semibold uppercase">
              {item.title}
            </h1>
            <div className="p-8 w-full">
              <ul className="text-start">
                {item.library.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Library;

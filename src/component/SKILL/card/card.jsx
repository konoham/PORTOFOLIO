import { motion } from "framer-motion";
import DataPortofolio from "../../../data/portofolio";
import Detail from "./detail";
import Url from "./url";

const Card = () => {
  const variant = {
    hidden: { opacity: 0, scaleX: 0, x: -200 },
    visible: (i) => ({
      opacity: 1,
      scaleX: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5 * i, staggerChildren: 0.5 * i },
    }),
  };

  return (
    <div className="w-full mt-[100px]">
      <div className="container mx-auto flex justify-center items-center gap-4 ">
        {DataPortofolio.map((item, i) => (
          <motion.div
            key={i}
            variants={variant}
            initial="hidden"
            transition="transition"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="w-[300px] h-fit  box-border border shadow-sm rounded-lg bg-card text-treed relative"
          >
            <div className="relative shadow-sm">
              <motion.img
                variants={variant}
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                src={item.img}
                className="h-[150px] w-full object-cover"
              />
              <motion.p
                variants={variant}
                viewport={{ once: true }}
                transition="transition"
                whileInView="visible"
                className="bg-primary p-2 rounded-e-lg absolute left-0 bottom-0"
              >
                #{i + 1}
              </motion.p>
            </div>
            <div className="px-4 py-2">
              <motion.h1
                variants={variant}
                viewport={{ once: true }}
                transition="transition"
                whileInView="visible"
                className="text-treed font-bold"
              >
                {item.title}
              </motion.h1>
              <motion.p
                variants={variant}
                viewport={{ once: true }}
                transition="transition"
                whileInView="visible"
                className="text-sm"
              >
                {item.deskripsi}
              </motion.p>
              <motion.div
                variants={variant}
                viewport={{ once: true }}
                transition="transition"
                whileInView="visible"
                className="flex justify-between items-center mt-2"
              >
                <Url item={item.url} />
                <Detail item={item.library} />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;

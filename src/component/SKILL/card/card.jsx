import { ArrowRight, DotsThreeVertical } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import DataPortofolio from "../../../data/portofolio";

const Card = () => {
  const variant = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: { duration: 0.8, delay: 0.5 * i },
    }),
  };

  return (
    <div className="w-full mt-[100px]">
      <div className="container mx-auto flex justify-center items-center gap-4">
        {DataPortofolio.map((item, i) => (
          <motion.div
            key={i}
            variants={variant}
            initial="hidden"
            transition="transition"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="w-[300px] h-fit overflow-x-hidden box-border border shadow-sm rounded-lg bg-card text-treed relative"
          >
            <div className="relative shadow-sm">
              <motion.img
                variants={variant}
                viewport={{ once: true }}
                initial={{ scaleX: 0, x: -200 }}
                whileInView={{ scaleX: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 * i }}
                src={item.img}
                className="h-[150px] w-full object-cover"
              />
              <motion.p
                variants={variant}
                viewport={{ once: true }}
                initial={{ scaleX: 0, x: -200 }}
                whileInView={{ scaleX: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  staggerChildren: 0.5 * i,
                  delay: 0.7 * i,
                }}
                className="bg-primary p-2 rounded-e-lg absolute left-0 bottom-0"
              >
                #{i + 1}
              </motion.p>
            </div>
            <div className="px-4 py-2">
              <motion.h1
                variants={variant}
                viewport={{ once: true }}
                initial={{ scaleX: 0, x: -200 }}
                whileInView={{ scaleX: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.55 * i }}
                className="text-treed font-bold"
              >
                {item.title}
              </motion.h1>
              <motion.p
                variants={variant}
                viewport={{ once: true }}
                initial={{ scaleX: 0, x: -200 }}
                whileInView={{ scaleX: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 * i }}
                className="text-sm"
              >
                {item.deskripsi}
              </motion.p>
              <motion.div
                variants={variant}
                viewport={{ once: true }}
                initial={{ scaleX: 0, x: -200 }}
                whileInView={{ scaleX: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 * i }}
                className="flex justify-between items-center mt-2"
              >
                <a
                  href={item.url}
                  className="flex justify-center items-center gap-1 border-b border-treed"
                >
                  visit{" "}
                  <span>
                    <ArrowRight size={16} />
                  </span>
                </a>
                <details className="relative text-sm">
                  <summary className="list-none cursor-pointer">
                    <DotsThreeVertical size={20} />
                  </summary>
                  <ul className="absolute top-[95%] left-[95%] border-primary border-2 py-2 px-8 box-border w-fit shadow-sm bg-transparent backdrop-blur-sm rounded-md">
                    {item.library.map((items, i) => (
                      <li key={i}>{items}</li>
                    ))}
                  </ul>
                </details>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Card;

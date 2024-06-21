import { RocketLaunch } from "@phosphor-icons/react";
import { motion } from "framer-motion";
const Title = ({ title, id }) => {
  return (
    <div
      id={id}
      className="text-xl md:text-3xl text-treed font-bold text-center uppercase flex justify-center items-center gap-2"
    >
      <motion.h1
        initial={{ y: 300, opacity: 0, scaleY: 0 }}
        whileInView={{ y: 0, opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h1>
      <motion.span
        initial={{ y: 300, opacity: 0, scaleY: 0 }}
        whileInView={{ y: 0, opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <RocketLaunch size={32} />
      </motion.span>
    </div>
  );
};

export default Title;

import { motion } from "framer-motion";
const Form = () => {
  const variant = {
    hidden: {
      opacity: 0,
      scaleX: 0,
      x: -400,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      x: 0,
    },
  };
  return (
    <>
      <form className="w-[60%] mx-auto text-sm text-black" action="">
        <div
          className="flex justify-center items-center gap-4 text-xl"
          id="name-email"
        >
          <div className="w-1/2">
            <motion.label
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
            >
              name
            </motion.label>
            <motion.input
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              type="text"
              name="text"
              id=""
            />
          </div>
          <div className="w-1/2">
            <motion.label
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              email
            </motion.label>
            <motion.input
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              type="email"
              name="email"
              id=""
            />
          </div>
        </div>

        <div id="pesan" className="w-full ">
          <motion.label
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            massage
          </motion.label>
          <motion.textarea
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
            type="text"
            name="text"
            className="w-full"
            id=""
          />
        </div>
      </form>
      <motion.button
        variants={variant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        className="rounded-lg bg-second text-treed px-4 py-2 text-sm mt-2"
      >
        Download CV
      </motion.button>
    </>
  );
};

export default Form;

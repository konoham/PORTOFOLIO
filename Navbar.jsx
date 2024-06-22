import { delay, motion } from "framer-motion";
const nav = ["home", "skill", "portofolio", "contact"];

const Navbar = () => {
  const variant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    transition: (i) => ({ duration: 1 }),
  };

  return (
    <div className="bg-second font-medium" id="navbar">
      <div className="container m-auto h-full">
        <motion.ul
          variants={variant}
          initial="hidden"
          animate="visible"
          transition="transition"
          className="flex justify-evenly items-center flex-col h-full"
        >
          {nav.map((item, i) => (
            <motion.li
              key={i}
              variants={variant}
              transition={{ delay: 0.2 * i }}
              custom={{ i }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;

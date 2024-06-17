import { motion } from "framer-motion";
const nav = ["home", "skill", "portofolio", "contact"];

const Navbar = () => {
  const variant = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    transition: { duration: 1, staggerChildren: 0.2 },
  };

  return (
    <div className="bg-second font-medium" id="navbar">
      <div className="container m-auto h-full">
        <ul className="flex justify-evenly items-center flex-col h-full">
          {nav.map((item, i) => (
            <motion.li
              key={i}
              variants={variant}
              initial="hidden"
              animate="visible"
              transition="transition"
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

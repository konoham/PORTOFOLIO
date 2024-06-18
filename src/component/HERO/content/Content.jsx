import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

const Hero = () => {
  const dynamicText = useRef(null);
  const dynamicName = useRef(null);

  useEffect(() => {
    const typed = new Typed(dynamicText.current, {
      strings: ["Frond end dev.", "web desainer.", "web developer"],

      typeSpeed: 200,
      backDelay: 1000,
      backSpeed: 500,
      loop: true,
    });
  }, []);

  useEffect(() => {
    const typed = new Typed(dynamicName.current, {
      strings: ["Muhamad Rafli Rabani"],
      typeSpeed: 100,
      backDelay: 2000,
      backSpeed: 100,
      loop: true,
    });
  }, []);

  const variant = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <section className="h-svh text-start w-full" id="content">
      <div className="flex justify-between items-center w-full container mx-auto h-svh ">
        <div className="content w-1/2 font-medium text-2xl ps-20">
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-treed mb-1"
            id="sapaan"
          >
            Hi there✋,
          </motion.h1>
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-1 w-full"
            id="name"
          >
            My Name is{" "}
            <span className="text-second italic" ref={dynamicName}></span>
          </motion.h1>
          <motion.h1
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7 }}
            className="mb-2 text-3xl font-semibold"
          >
            I`m A <span ref={dynamicText}></span>
          </motion.h1>
          <motion.p
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
            className="text-treed text-xl leading-relaxed w-[85%]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis dolor saepe illum fuga excepturi asperiores? Aperiam
            doloremque voluptates vero, dolore vitae repudiandae saepe atque
            dignissimos.
          </motion.p>
          <motion.button
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="rounded-lg bg-second text-treed px-4 py-2 text-sm mt-2"
          >
            Download CV
          </motion.button>
        </div>
        <motion.div
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          className="img w-1/2"
          id="img"
        >
          <img
            src="./profil.png"
            className="rounded-full block mx-auto border-black  border-[5px]"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

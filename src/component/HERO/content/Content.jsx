import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const dynamicText = useRef(null);
  const dynamicName = useRef(null);

  useEffect(() => {
    const typed = new Typed(dynamicText.current, {
      strings: ["Frond end dev.", "web desainer.", "web developer"],

      typeSpeed: 700,
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

  return (
    <section className="h-svh text-start w-full" id="content">
      <div className="flex justify-between items-center w-full container mx-auto h-svh ">
        <div className="content w-1/2 text-primary font-medium text-2xl ps-20">
          <h1 className="text-5xl font-bold text-treed mb-1" id="sapaan">
            Hi there✋,
          </h1>
          <h1 className="text-3xl font-bold mb-1" id="name">
            My Name is{" "}
            <span className="text-second italic" ref={dynamicName}></span>
          </h1>
          <h1 className="mb-2 text-3xl">
            I`m A <span ref={dynamicText}></span>
          </h1>
          <p className="text-treed text-xl leading-relaxed w-[85%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis dolor saepe illum fuga excepturi asperiores? Aperiam
            doloremque voluptates vero, dolore vitae repudiandae saepe atque
            dignissimos.
          </p>
          <button className="rounded-lg bg-second text-treed px-4 py-2 text-sm mt-2">
            Download CV
          </button>
        </div>
        <div className="img w-1/2" id="img">
          <img
            src="./profil.png"
            className="rounded-full block mx-auto border-black  border-[5px]"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

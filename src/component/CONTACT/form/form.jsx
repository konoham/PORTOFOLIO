import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required().max(25).min(4),
    email: yup.string().email().required(),
    message: yup.string().required().max(500),
  })
  .required();

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm("service_kj2o1hf", "template_idtsf97", form.current, {
        publicKey: "-QKPLhdZfJHcyu4KX",
      })
      .then(
        () => {
          Swal.fire({
            title: "Thank You",
            text: "Message Send",
            icon: "success",
          });
        },
        () => {
          Swal.fire({
            title: "upps",
            text: "something error",
            icon: "error",
          });
        }
      );
  };

  return (
    <>
      <form
        className="w-[60%] mx-auto text-sm text-black"
        ref={form}
        onSubmit={handleSubmit(sendEmail)}
        action=""
      >
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
              name="name"
              id=""
              required
              {...register("name", { required: true })}
            />
            {errors?.name && <p>{errors.name?.message}</p>}
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
              required
              {...register("email", { required: true })}
            />
            {errors?.email && <p>{errors.email?.message}</p>}
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
            name="message"
            className="w-full"
            id=""
            required
            {...register("message", { required: true })}
          />
          {errors?.message && <p>{errors.message?.message}</p>}
        </div>
        <motion.button
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          className="rounded-lg bg-second text-treed px-4 py-2 text-sm mt-2"
          value="Send"
          type="submit"
        >
          Download CV
        </motion.button>
      </form>
    </>
  );
};

export default Form;

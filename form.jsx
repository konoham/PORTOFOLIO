import { motion } from "framer-motion";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SendEmail } from "../../../libs/email";

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
      y: 100,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      y: 0,
    },
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const form = useRef(null);

  return (
    <>
      <form
        className="w-full md:w-[60%] mx-auto text-sm text-black overflow-x-hidden"
        ref={form}
        onSubmit={(e) => handleSubmit(SendEmail(form, e))}
        action=""
      >
        <div
          className="flex justify-center items-center gap-4 text-xl"
          id="name-email"
        >
          <div className="w-full md:w-1/2">
            <motion.label
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
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
              viewport={{ once: true }}
              required
              {...register("name", { required: true })}
            />
            {errors?.name && (
              <p className="text-red-500 text-sm text-start">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="w-full md:w-1/2">
            <motion.label
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              email
            </motion.label>
            <motion.input
              variants={variant}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              type="email"
              name="email"
              required
              {...register("email", { required: true })}
            />
            {errors?.email && (
              <p className="text-red-500 text-sm text-start">
                {errors.email?.message}
              </p>
            )}
          </div>
        </div>

        <div id="pesan" className="w-full ">
          <motion.label
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            massage
          </motion.label>
          <motion.textarea
            variants={variant}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            type="text"
            name="message"
            className="w-full"
            required
            {...register("message", { required: true })}
          />
          {errors?.message && (
            <p className="text-red-500 text-sm text-start">
              {errors.message?.message}
            </p>
          )}
        </div>
        <motion.button
          variants={variant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-[30%] md:w-full rounded-lg bg-second text-treed px-4 py-2 md:text-sm md:mt-2 text-xs ms-auto md:ms-0"
          value="Send"
          type="submit"
          id="submitbtn"
        >
          UPLOAD
        </motion.button>
      </form>
    </>
  );
};

export default Form;

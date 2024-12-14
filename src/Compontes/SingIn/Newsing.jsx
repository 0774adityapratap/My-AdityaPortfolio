import React from "react";
import { useForm } from "react-hook-form";

function Newsing() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-9 dark:text-white">
          <div>
            <input
              className="py-[.5vw] px-[3vw] rounded-sm bg-transparent border border-b-black outline-none "
              type="text"
              {...register("Full Name")}
              placeholder="name"
            />
          </div>
          <div>
            <input
              className="py-[.5vw] px-[3vw] rounded-sm bg-transparent border border-b-black outline-none "
              type="textarea"
              {...register("Message")}
              placeholder="Message"
            />
          </div>
          <div>
            <input
              className="py-[.5vw] px-[3vw] rounded-sm bg-transparent border border-b-black outline-none "
              type="text"
              {...register("email", { required: true })}
              placeholder="email"
            />
            {errors.email && (
              <div className="text-[#d0382c] text-center">
                this fild is required{" "}
              </div>
            )}
          </div>
          <motion.button
            whileTap={{ scale: 1.05 }}
            whileHover={{ scale: 1, rotate: "3deg" }}
            transition={{ duration: 0.125, ease: "easeInOut" }}
            className="py-[.5vw] px-[3vw] bg-[#B336FF] text-white rounded-md"
            type="submit"
          >
            submit
          </motion.button>
        </div>
      </form>
    </div>
  );
}

export default Newsing;

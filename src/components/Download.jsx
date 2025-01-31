import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Download = () => {
  return (
    <div className="bg-[#FDC73E]">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="max-w-full px-6 md:px-20 lg:px-32 pt-12"
      >
        <div className="flex flex-col gap-5 justify-center items-center">
          <h1 className="text-4xl text-center font-bold">
            Download Momofy Now
          </h1>
          <p className="text-lg font-medium md:mx-0 max-w-[350px] sm:max-w-[400px] md:max-w-[650px] text-center text-[#555146]">
            Track all your transactions records with one simple to use app.
            Never run at a loss and be on top of your business.
          </p>
          <button className="w-fit mx-auto md:mx-0 bg-black pl-2 py-3 pr-6 rounded">
            <a href="">
              <img src={assets.Play2} alt="" className="w-[120px]" />
            </a>
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center w-full mt-10">
          <img
            src={assets.phone_2}
            alt=""
            className="w-[600px] sm:max-w-[200px]:"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Download;

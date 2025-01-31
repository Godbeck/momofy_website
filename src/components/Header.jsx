import { assets } from "../assets/assets";
import { motion } from "motion/react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FDC73E] " id="Header">
        <div className="max-w-full px-6 md:px-20 lg:px-32 pt-20 ">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="flex flex-col-reverse md:flex-row items-center justify-between lg:gap-2 sm:gap-10"
          >
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <img
                src={assets.Phone_1}
                alt=""
                className="w-[600px] sm:max-w-[200px]: "
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -100 }} // Start off to the left, hidden
              animate={{ opacity: 1, x: 0 }} // Move into the view position
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left"
            >
              <p className="text-lg font-medium text-[#555146]">
                Welcome to Momofy
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.2] mx-auto md:mx-0 max-w-[320px] sm:max-w-[400px] md:max-w-[550px]">
                MoMo Business is now made simple.
              </h1>
              <p className="text-lg font-medium  md:mx-0 max-w-[350px] sm:max-w-[400px] md:max-w-[550px] text-[#555146]">
                Track all your transactions records with one simple to use app.
                Never run at a loss and be on top of your business.
              </p>
              <button className="w-fit mx-auto md:mx-0 bg-black pl-2 py-3 pr-6 rounded">
                <a href="">
                  <img src={assets.Play2} alt="" className="w-[120px]" />
                </a>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Header;

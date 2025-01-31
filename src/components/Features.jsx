import { assets, featuresData } from "../assets/assets";
import { motion } from "motion/react";

const Features = () => {
  const features = featuresData.map((feature, index) => (
    <div key={index} className="col-span-1">
      <div className="max-w-md">
        <h1 className="text-2xl font-semibold mb-4 max-w-sm">
          {feature.title}
        </h1>
        <p className="text-[#555146] max-w-sm">{feature.description}</p>
      </div>
    </div>
  ));

  return (
    <div className="max-w-full px-6 md:px-20 lg:px-32 pt-20 " id="Features">
      <h1 className="text-4xl font-bold mb-8 text-center">Features</h1>;
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-center justify-between lg:gap-2 sm:gap-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{features}</div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={assets.Phone_1}
            alt=""
            className="w-[600px] sm:max-w-[200px]: "
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Features;

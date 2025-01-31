import { FAQ } from "../assets/assets";
import { motion } from "motion/react";

const Faqs = () => {
  const faqs = FAQ.map((faq, index) => (
    <div key={index} className="col-span-1">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, delay: index * 0.5 }}
        className=""
      >
        <h1 className="text-2xl font-semibold mb-4 ">{faq.title}</h1>
        <p className="text-[#555146] ">{faq.description}</p>
      </motion.div>
    </div>
  ));
  return (
    <div className="max-w-full px-6 md:px-20 lg:px-32 pt-20 mb-32" id="FAQ">
      <h1 className="text-4xl font-bold mb-8 text-center">FAQs</h1>;
      <div className="flex flex-col md:flex-row items-center justify-between lg:gap-2 sm:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{faqs}</div>
      </div>
    </div>
  );
};

export default Faqs;

import React from "react";
import { assets } from "../assets/assets";
import { toast } from "react-toastify";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);

    // Use Vite's import.meta.env instead of process.env
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    const response = await fetch(import.meta.env.VITE_WEB3FORMS_URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="max-w-full px-6 md:px-20 lg:px-32 pt-12" id="Contact">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="mx-auto flex flex-col-reverse md:flex-row items-center justify-between lg:gap-8 sm:gap-10">
        {/* Contact Details */}
        <div className="md:text-left mt-10">
          <h1 className="text-2xl font-bold mb-4">
            We&apos;d love to hear from you
          </h1>
          <p className="text-lg max-w-[550px] text-[#555146] mb-8 mx-auto md:mx-0">
            Fill up the form and our team will get back to you within 24 hours.
          </p>
          <div>
            <div className="flex flex-row gap-4 items-center mb-4">
              <img src={assets.Location} alt="Location Icon" className="w-6" />
              <p>385 Noah Place Suite 878</p>
            </div>

            <div className="flex flex-row gap-4 items-center mb-4">
              <img src={assets.Phone} alt="Phone Icon" className="w-6" />
              <p>877-255-7945</p>
            </div>

            <div className="flex flex-row gap-4 items-center mb-4">
              <img src={assets.Mail_inverse} alt="Email Icon" className="w-6" />
              <p>info@form.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={onSubmit} className="w-full md:w-1/2 text-gray-600">
          <div className="flex flex-col gap-6 items-center">
            <div className="w-full max-w-[400px] text-left">
              <label htmlFor="name" className="block mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded py-3 px-4"
              />
            </div>
            <div className="w-full max-w-[400px] text-left">
              <label htmlFor="email" className="block mb-2 font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                required
                className="w-full border border-gray-300 rounded py-3 px-4 bg-none"
              />
            </div>
          </div>
          <div className="my-6 text-left w-full max-w-[400px] mx-auto">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="w-full border border-gray-300 rounded py-3 px-4 h-32 resize-none"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="w-full max-w-[400px] mx-auto text-right">
            <button className="bg-[#0A0700] text-white py-2 px-12 rounded  transition w-full">
              {result ? result : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

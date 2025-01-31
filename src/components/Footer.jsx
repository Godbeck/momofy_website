import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="max-w-full px-6 md:px-20 lg:px-32 pt-20">
        <div className="flex flex-col md:flex-col items-center justify-between lg:gap-5 sm:gap-10">
          <img src={assets.logo} alt="" className="w-16" />
          <ul className="flex justify-center items-center gap-6">
            <li>
              <a href="">
                <img src={assets.Instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={assets.Twitter} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={assets.Facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={assets.LinkedIn} alt="" />
              </a>
            </li>
          </ul>
          <p className="text-[#555146] text-sm mb-5">
            © {new Date().getFullYear()} Momofy (Developed by
            <a
              className="text-gray-950"
              href="https://github.com/Godbeck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span> Godbeck Odame</span>
            </a>
            )
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

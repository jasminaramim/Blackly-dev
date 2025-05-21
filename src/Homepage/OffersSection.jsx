import { Helmet } from "react-helmet-async";
import { BiSolidPhoneCall } from "react-icons/bi";
import development from "../assets/1.png";
import marketing from "../assets/2 (2).png";
import consulting from "../assets/4 (2).png";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import Container from "@/Shared/Container";

const OffersSection = () => {
  return (
    <div id="offers" className="bg-[#111722] py-8">
      {/* Helmet SEO */}
      <Helmet>
        {/* <title>Exclusive Offers - App Development, Marketing & Consulting</title> */}
        <meta
          name="description"
          content="Explore our exclusive deals on professional app development, marketing campaigns, and strategic business consulting. Grow your business with expert-driven solutions."
        />
        <meta
          name="keywords"
          content="Blackly, blackly, app development, website development, app publishing, digital marketing, lead generation, business strategy, market research, app promotion, online consulting, tech services, exclusive deals, IT solutions"
        />
        <meta name="author" content="Blackly" />
      </Helmet>

      <Container>
        <div className="text-center mb-12 w-[95%] lg:w-[60%] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 mb-5 w-[95%] drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            Unlock Exclusive Deals & Special Offers
          </h2>
          <p className="text-gray-300 ">
            Unlock expert-driven services tailored for your success—whether it's
            building powerful apps, crafting dynamic websites, or executing
            strategic marketing campaigns, we deliver excellence in every
            aspect.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Development & Publishing Card */}
          <div className="bg-[#090F1B] rounded-lg p-6 border-[1px] border-[#202b41] hover:shadow-lg transition-all duration-500 transform hover:scale-102 flex flex-col justify-between">
            <div className="w-full mb-6 ">
              <img
                className="w-full object-cover rounded-md"
                src={development}
                alt="App Development and Publishing"
              />
            </div>
            <div className="flex flex-col">
              <div className="bg-[#121926] rounded-full flex justify-center items-center mb-4 p-2">
                <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-lg sm:text-base">
                  Development & Publishing
                </h3>
              </div>
              <ul className="space-y-2 mb-2 sm:text-sm">
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  App Development
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  Website Development
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  App Publishing
                </li>
              </ul>
              <div className="flex items-center justify-center">
                <button
                  className="bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 border-[0.5px] border-white hover:border-[#202b41] font-semibold py-2 px-6 md:px-8 rounded-full mt-6 mx-auto flex items-center cursor-pointer"
                  onClick={() =>
                    window.open("https://wa.me/8801622559988", "_blank")
                  }
                >
                  <FaPhoneAlt className="mr-2" />
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* Marketing & Promotion Card */}
          <div className="bg-[#090F1B] rounded-lg p-6 border-[1px] border-[#202b41] hover:shadow-lg transition-all duration-500 transform hover:scale-102 flex flex-col justify-between">
            <div className="w-full mb-6">
              <img
                className="w-full object-cover rounded-md"
                src={marketing}
                alt="Marketing and Promotion"
              />
            </div>
            <div className="flex flex-col">
              <div className="bg-[#121926] rounded-full flex justify-center items-center mb-4 p-2">
                <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-lg sm:text-base">
                  Marketing & Promotion
                </h3>
              </div>
              <ul className="space-y-2 mb-2 sm:text-sm">
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  App Promotion
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  Ads Promotion
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  Leads Selling
                </li>
              </ul>
              <button
                className="bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 border-[0.5px] border-white hover:border-[#202b41] font-semibold py-2 px-6 md:px-8 rounded-full mt-6 mx-auto flex items-center cursor-pointer"
                onClick={() =>
                  window.open("https://wa.me/8801622559988", "_blank")
                }
              >
                <FaPhoneAlt className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
          {/* Consulting & Strategy Card */}
          <div className="bg-[#090F1B] rounded-lg p-6 border-[1px] border-[#202b41] hover:shadow-lg transition-all duration-500 transform hover:scale-102 flex flex-col justify-between">
            <div className="w-full mb-6">
              <img
                className="w-full object-cover rounded-md"
                src={consulting}
                alt="Consulting and Strategy"
              />
            </div>
            <div className="flex flex-col">
              <div className="bg-[#121926] rounded-full flex justify-center items-center mb-4 p-2">
                <h3 className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-lg sm:text-base">
                  Consulting & Strategy
                </h3>
              </div>
              <ul className="space-y-2 mb-2 sm:text-sm">
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  Business Analysis
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  Market Research
                </li>
                <li className="flex items-center text-gray-300">
                  <FaCheckCircle className="text-green-400 mr-2" />
                  Digital Strategy
                </li>
              </ul>
              <button
                className="bg-white text-black hover:bg-transparent hover:text-white transition-all duration-300 border-[0.5px] border-white hover:border-[#202b41] font-semibold py-2 px-6 md:px-8 rounded-full mt-6 mx-auto flex items-center cursor-pointer"
                onClick={() =>
                  window.open("https://wa.me/8801622559988", "_blank")
                }
              >
                <FaPhoneAlt className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OffersSection;

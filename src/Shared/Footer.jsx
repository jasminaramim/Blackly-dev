import { useState } from "react";
import logoText from "../assets/blackly.png";
import webDevelopment from "../assets/web.png";
import appDevelopment from "../assets/app-development.png";
import appPublishing from "../assets/publishing.png";
import appPromotion from "../assets/promotion.png";
import lead from "../assets/lead.png";
import Container from "./Container";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-scroll";
import { IoIosCloseCircle, IoIosTime, IoMdPricetags } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { MdFeaturedPlayList } from "react-icons/md";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (offer) => {
    setModalContent(offer);
  };

  const closeModal = () => {
    setModalContent(null);
  };
  const offers = [
    {
      title: "Web Development",
      description: "Create modern and responsive websites for your business.",
      icon: webDevelopment,
      detailedDescription:
        "Our Web Development service includes designing and developing responsive, SEO-friendly, and user-centric websites. Whether you need a personal blog, a corporate site, or an eCommerce platform, we have the skills and expertise to bring your vision to life.",
      features: [
        "Custom Website Design",
        "Responsive Layouts",
        "SEO Optimization",
      ],
      benefits: [
        "Improved Online Presence",
        "Increased Customer Engagement",
        "Mobile-Friendly Designs",
      ],
      pricing:
        "Starting at $1500 for a basic website, pricing depends on complexity and features.",
      serviceDuration: "4 to 8 weeks based on project requirements.",
    },
    {
      title: "App Development",
      description: "Build custom apps for Android and iOS platforms.",
      icon: appDevelopment,
      detailedDescription:
        "We specialize in developing native mobile apps for both Android and iOS platforms. Our team ensures that your app is not only functional but also provides a seamless user experience across devices.",
      features: [
        "Custom Mobile App Design",
        "Cross-Platform Compatibility (iOS & Android)",
        "Push Notifications Integration",
      ],
      benefits: [
        "Improved Customer Engagement",
        "Better Brand Recognition",
        "Access to Mobile-First Users",
      ],
      pricing:
        "Starting at $2500 for a basic mobile app, pricing varies based on features and platforms.",
      serviceDuration: "6 to 12 weeks depending on the app complexity.",
    },
    {
      title: "App Publishing",
      description: "Publish your apps on the App Store and Play Store easily.",
      icon: appPublishing,
      detailedDescription:
        "We offer app publishing services for both iOS and Android apps. Our team will guide you through the entire process of submitting your app to the App Store and Google Play Store, ensuring a smooth launch.",
      features: [
        "App Store & Play Store Submission",
        "App Store Optimization (ASO)",
        "Comprehensive App Review Process",
      ],
      benefits: [
        "Reach a Global Audience",
        "Increase App Downloads",
        "Maximized App Visibility",
      ],
      pricing: "Starts at $500 per platform for submission and setup.",
      serviceDuration: "1 to 2 weeks for submission and setup.",
    },
    {
      title: "App Promotion",
      description: "Effective promotion services to increase your app users.",
      icon: appPromotion,
      detailedDescription:
        "Our app promotion services help you increase your app downloads and boost user engagement. We utilize social media, influencer marketing, and app store optimization (ASO) strategies to ensure maximum visibility.",
      features: [
        "App Store Optimization (ASO)",
        "Social Media Advertising",
        "Influencer Marketing Campaigns",
      ],
      benefits: [
        "Increased App Visibility",
        "Higher User Acquisition Rates",
        "Better User Retention",
      ],
      pricing:
        "Starting at $1000 for a basic promotion campaign, pricing may vary based on platforms and services.",
      serviceDuration: "Campaigns typically run for 3 to 6 weeks.",
    },
    {
      title: "Lead Generation",
      description: "Collect potential customer information for your business.",
      icon: lead,
      detailedDescription:
        "Our lead generation service helps you capture high-quality leads from various channels. By using forms, landing pages, and social media tools, we ensure that you can effectively collect information from potential customers.",
      features: [
        "Custom Landing Pages",
        "Form Integrations with CRM",
        "Email List Building",
      ],
      benefits: [
        "Higher Lead Conversion",
        "Improved Sales Opportunities",
        "Effective Customer Data Collection",
      ],
      pricing: "Starting at $750 for a basic lead generation campaign.",
      serviceDuration: "Lead generation campaigns typically last 2 to 4 weeks.",
    },
  ];
  return (
    <footer id="footer" className="bg-[#0c111a] text-white py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left gap-8">
          {/* Logo & About */}
          <div className="w-full md:w-1/3">
            <div className="w-72 flex gap-2 items-center mx-auto md:mx-0">
              <div className="md:w-40 w-36 select-none cursor-default">
                <img src={logoText} alt="" />
              </div>
            </div>
            <p className="text-gray-400 mt-4 w-[80%]">
              Delivering premium app development, web solutions, and digital
              marketing expertise.
            </p>
          </div>
          {/* Quick Links */}
          <div className="w-full md:w-1/3 flex justify-around md:justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="services"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500 cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="whyUs"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500 cursor-pointer"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="offers"
                    smooth={true}
                    duration={500}
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500 cursor-pointer"
                  >
                    Offers
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/8801622559988"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500 cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-100">
                Our Services
              </h3>
              <ul className="space-y-2">
                {offers.map((offer, index) => (
                  <li onClick={() => openModal(offer)} key={index}>
                    <a className="hover:text-blue-500 hover:font-bold text-gray-400 transition-all duration-500 cursor-pointer">
                      {offer.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {modalContent && (
              <div
                className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
                onClick={closeModal}
              >
                <div
                  className="bg-[#1e2a3d] p-4 rounded-lg w-[95%] md:w-[90%] lg:w-[95%] transition-all transform scale-95 opacity-0 animate-modal-open"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6 h-full xl:h-[500px]">
                    <div className="w-full md:w-1/2 h-full hidden md:flex items-center">
                      <img
                        className="w-full h-[200px] md:h-full object-cover"
                        src={modalContent.icon}
                        alt={modalContent.title}
                      />
                    </div>
                    <div className="w-full md:w-1/2">
                      <h2 className="text-2xl font-semibold text-blue-400 mb-2 text-left">
                        {modalContent.title}
                      </h2>
                      <div className="bg-[#313e67] rounded-full w-fit mb-4 px-4 py-[2px] text-xs md:text-sm border-[1px] border-[#7086cf]">
                        <p className="text-gray-100 mb-1">
                          {modalContent.description}
                        </p>
                      </div>

                      <p className="text-sm text-gray-300 mb-2 text-left">
                        {modalContent.detailedDescription}
                      </p>

                      {/* Detailed Information */}
                      <div className="space-y-3 text-gray-200">
                        <div className="flex flex-col md:flex-row justify-between text-xs">
                          {/* Features */}
                          <div className="mb-2 md:mb-0">
                            <h4 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                              <MdFeaturedPlayList />
                              Features:
                            </h4>
                            <ul className="space-y-2">
                              {modalContent.features?.map((feature, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <FaCheckCircle className="text-green-500" />{" "}
                                  {/* Green check icon */}
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits */}
                          <div className="mb-2 md:mb-0">
                            <h4 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                              <FaLightbulb /> Benefits:
                            </h4>
                            <ul className=" space-y-2">
                              {modalContent.benefits?.map((benefit, index) => (
                                <li
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <FaCheckCircle className="text-green-500" />{" "}
                                  {/* Green check icon */}
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* Pricing and Duration */}
                        <div className="space-y-2">
                          <div>
                            <h4 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                              <IoMdPricetags />
                              Pricing:
                            </h4>
                            <p className="text-sm text-green-400 text-left">
                              {modalContent.pricing}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                              <IoIosTime />
                              Service Duration:
                            </h4>
                            <p className="text-sm text-gray-300 text-left">
                              {modalContent.serviceDuration}
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <button
                            className="text-white bg-red-600 hover:bg-red-700 transition-all duration-300  p-2 sm:px-3 sm:py-1 lg:px-6 lg:py-2 rounded-full sm:rounded-md flex items-center gap-2 cursor-pointer"
                            onClick={closeModal}
                          >
                            <IoIosCloseCircle className="text-2xl md:text-xl" />
                            <p className="hidden sm:block">Close</p>
                          </button>
                          <button
                            className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300  p-2 sm:px-3 sm:py-1 lg:px-6 lg:py-2 rounded-full sm:rounded-md flex items-center gap-2 cursor-pointer"
                            onClick={() =>
                              window.open(
                                "https://wa.me/8801622559988",
                                "_blank"
                              )
                            }
                          >
                            <RiWhatsappFill className="text-2xl md:text-xl" />
                            <p className="hidden sm:block">
                              Contact via WhatsApp
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact & Social Icons */}
          <div className="w-fit mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-gray-100">
              Contact Us
            </h3>
            <p className="text-gray-400 ">Email: support@blackly.dev</p>
            <p className="text-gray-400 mt-2">Phone: +880 1622-559988</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://wa.me/8801622559988"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-green-500 p-3 rounded-full text-lg transition transform hover:scale-110 duration-500"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://www.linkedin.com/company/blacklyofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-blue-700 p-3 rounded-full text-lg transition transform hover:scale-110 duration-500"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 pt-6 border-t border-gray-700">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} BlacklyDev. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

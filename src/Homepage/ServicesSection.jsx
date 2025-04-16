import { useState } from "react";
import Container from "@/Shared/Container";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaPhoneAlt,
} from "react-icons/fa";
import webDevelopment from "../assets/web.png";
import appDevelopment from "../assets/app-development.png";
import appPublishing from "../assets/publishing.png";
import appPromotion from "../assets/promotion.png";
import adPromotion from "../assets/add-promotion.jpg";
import lead from "../assets/lead.png";
import softwareTesting from "../assets/Softwaretesting.jpg";
import consoleImage from "../assets/console.png";
import { MdFeaturedPlayList } from "react-icons/md";
import { IoIosCloseCircle, IoIosTime, IoMdPricetags } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";

const ServicesSection = () => {
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
      title: "Ad Promotion",
      description: "Advertise your products and reach more customers.",
      icon: adPromotion,
      detailedDescription:
        "Our ad promotion service includes digital marketing campaigns, targeted ads, and SEO strategies to help you advertise your business and reach potential customers. We use Google Ads, Facebook, Instagram, and other platforms to create custom campaigns.",
      features: [
        "Targeted Ad Campaigns",
        "Social Media Marketing",
        "SEO and Content Marketing",
      ],
      benefits: [
        "Increased Brand Exposure",
        "Targeted Audience Reach",
        "Higher Conversion Rates",
      ],
      pricing:
        "Pricing depends on the platforms and duration, starting at $500 for a basic campaign.",
      serviceDuration: "Campaigns typically last 4 to 8 weeks.",
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
    {
      title: "Testing Service",
      description: "Find errors in your app or website and ensure quality.",
      icon: softwareTesting,
      detailedDescription:
        "Our testing service ensures that your website or mobile app is free from bugs, errors, and performance issues. We provide manual and automated testing to ensure your product is ready for launch.",
      features: [
        "Functional Testing",
        "Performance Testing",
        "Security Testing",
      ],
      benefits: [
        "Bug-Free Launch",
        "Improved User Experience",
        "Faster Time-to-Market",
      ],
      pricing:
        "Starting at $1000 depending on the size and complexity of the project.",
      serviceDuration: "1 to 4 weeks depending on the project scope.",
    },
    {
      title: "Console Service",
      description:
        "Support for Google Play Console and Apple Developer Console.",
      icon: consoleImage,
      detailedDescription:
        "We provide support for managing your apps on the Google Play Console and Apple Developer Console. From app submission to analytics, our team helps you maintain and optimize your apps for both stores.",
      features: [
        "Google Play Console Management",
        "Apple Developer Console Support",
        "App Analytics Setup and Optimization",
      ],
      benefits: [
        "Seamless App Management",
        "Better App Performance Insights",
        "Increased App Visibility",
      ],
      pricing: "Starts at $300 for basic management and support.",
      serviceDuration: "Ongoing service with monthly plans available.",
    },
  ];

  return (
    <div id="services" className="bg-[#111722] relative pt-4 pb-16 md:pb-24">
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#21304b] to-transparent opacity-60 z-0"></div>
      <Container>
        <div className="text-center mb-12 w-[95%] lg:w-[60%] mx-auto">
          <h2 className="text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 mb-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
            Your Success, Our Services
          </h2>
          <p className="text-gray-300">
            Discover our expert services tailored to accelerate your business
            growth and ensure long-term success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {offers.map((offer, index) => (
            <Fade key={index} triggerOnce delay={index * 120}>
              <div className="bg-[#090F1B] bg-opacity-90 backdrop-blur-lg rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform border border-gray-700 overflow-hidden hover:border-blue-300/60 group relative">
                <div className=" h-48 w-48 xl:w-52 xl:h-52 mb-6 mx-auto rounded-full border-[3px] border-gray-700  shadow-md overflow-hidden">
                  <img
                    src={offer.icon}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 text-center">
                  {offer.title}
                </h3>
                <p className="text-gray-300 mb-16 text-center text-sm">
                  {offer.description}
                </p>
                <div className="flex gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button
                    className="flex justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 lg:px-2 lg:py-1 xl:px-4 xl:py-2 rounded-full transition-all shadow-md w-1/2 text-sm xl:text-base"
                    onClick={() => openModal(offer)}
                  >
                    Details <FaArrowRight />
                  </button>
                  <button
                    className="flex justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 lg:px-2 lg:py-1 px-4 py-2 xl:px-4 xl:py-2 rounded-full transition-all shadow-md w-1/2 text-sm xl:text-base cursor-pointer"
                    onClick={() =>
                      window.open("https://wa.me/8801622559988", "_blank")
                    }
                  >
                    <FaPhoneAlt /> Contact
                  </button>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </Container>

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
              <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center">
                <img
                  className="w-full h-[200px] md:h-full object-cover"
                  src={modalContent.icon}
                  alt={modalContent.title}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl font-semibold text-blue-400 mb-2">
                  {modalContent.title}
                </h2>
                <div className="bg-[#313e67] rounded-full w-fit mb-4 px-4 py-[2px] text-xs md:text-sm border-[1px] border-[#7086cf]">
                  <p className="text-gray-100 mb-1">
                    {modalContent.description}
                  </p>
                </div>

                <p className="text-sm text-gray-300 mb-2">
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
                          <li key={index} className="flex items-center gap-2">
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
                          <li key={index} className="flex items-center gap-2">
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
                      <p className="text-sm text-green-400">
                        {modalContent.pricing}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                        <IoIosTime />
                        Service Duration:
                      </h4>
                      <p className="text-sm text-gray-300">
                        {modalContent.serviceDuration}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button
                      className="text-white bg-red-600 hover:bg-red-700 transition-all duration-300 p-2 sm:px-3 sm:py-1 lg:px-6 lg:py-2 rounded-full sm:rounded-md flex items-center gap-2 cursor-pointer"
                      onClick={closeModal}
                    >
                      <IoIosCloseCircle className="text-2xl md:text-xl" />
                      <p className="hidden sm:block">Close</p>
                    </button>
                    <button
                      className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300  p-2 sm:px-3 sm:py-1 lg:px-6 lg:py-2 rounded-full sm:rounded-md flex items-center gap-2 cursor-pointer"
                      onClick={() =>
                        window.open("https://wa.me/8801622559988", "_blank")
                      }
                    >
                      <RiWhatsappFill className="text-2xl md:text-xl" />
                      <p className="hidden sm:block">Contact via WhatsApp</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;

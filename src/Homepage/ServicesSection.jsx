import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Container from "@/Shared/Container";
import {
  FaArrowRight,
  FaCheckCircle,
  FaLightbulb,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdFeaturedPlayList } from "react-icons/md";
import { IoIosCloseCircle, IoIosTime, IoMdPricetags } from "react-icons/io";
import { RiWhatsappFill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import webDevelopment from "../assets/web.png";
import appDevelopment from "../assets/app-development.png";
import appPublishing from "../assets/publishing.png";
import appPromotion from "../assets/promotion.png";
import adPromotion from "../assets/add-promotion.jpg";
import lead from "../assets/lead.png";
import softwareTesting from "../assets/Softwaretesting.jpg";
import consoleImage from "../assets/console.png";

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
      title: "Web Development Services",
      description:
        "Create modern, responsive, and SEO-friendly websites for your business.",
      icon: webDevelopment,
      detailedDescription:
        "Our web development services deliver responsive, SEO-optimized, and user-centric websites. From personal blogs to eCommerce platforms, we craft solutions to elevate your online presence.",
      features: [
        "Custom Website Design",
        "Responsive Layouts",
        "SEO Optimization",
      ],
      benefits: [
        "Enhanced Online Presence",
        "Increased Customer Engagement",
        "Mobile-Friendly Designs",
      ],
      pricing: "Starting at $1500 for a basic website.",
      serviceDuration: "4 to 8 weeks based on project requirements.",
    },
    {
      title: "Mobile App Development",
      description: "Build custom mobile apps for Android and iOS platforms.",
      icon: appDevelopment,
      detailedDescription:
        "We specialize in developing high-performance native mobile apps for Android and iOS, ensuring seamless user experiences and cross-platform compatibility.",
      features: [
        "Custom Mobile App Design",
        "Cross-Platform Compatibility",
        "Push Notifications Integration",
      ],
      benefits: [
        "Improved Customer Engagement",
        "Stronger Brand Recognition",
        "Access to Mobile-First Audiences",
      ],
      pricing: "Starting at $2500 for a basic mobile app.",
      serviceDuration: "6 to 12 weeks depending on app complexity.",
    },
    {
      title: "App Publishing",
      description:
        "Easily publish your apps on the App Store and Google Play Store.",
      icon: appPublishing,
      detailedDescription:
        "Our app publishing services streamline the submission process for iOS and Android apps, including App Store Optimization (ASO) for maximum visibility.",
      features: [
        "App Store & Play Store Submission",
        "App Store Optimization (ASO)",
        "Comprehensive App Review Process",
      ],
      benefits: [
        "Global Audience Reach",
        "Increased App Downloads",
        "Enhanced App Visibility",
      ],
      pricing: "Starts at $500 per platform for submission and setup.",
      serviceDuration: "1 to 2 weeks for submission and setup.",
    },
    {
      title: "App Promotion Services",
      description: "Boost app downloads with effective promotion strategies.",
      icon: appPromotion,
      detailedDescription:
        "Our app promotion services leverage social media, influencer marketing, and ASO to increase app visibility and user engagement.",
      features: [
        "App Store Optimization (ASO)",
        "Social Media Advertising",
        "Influencer Marketing Campaigns",
      ],
      benefits: [
        "Increased App Visibility",
        "Higher User Acquisition",
        "Improved User Retention",
      ],
      pricing: "Starting at $1000 for a basic promotion campaign.",
      serviceDuration: "Campaigns typically run for 3 to 6 weeks.",
    },
    {
      title: "Digital Marketing & Ad Promotion",
      description:
        "Advertise your products and reach more customers with targeted campaigns.",
      icon: adPromotion,
      detailedDescription:
        "Our digital marketing services include targeted ad campaigns, SEO, and social media marketing to boost brand exposure and conversions.",
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
      pricing: "Starting at $500 for a basic campaign.",
      serviceDuration: "Campaigns typically last 4 to 8 weeks.",
    },
    {
      title: "Lead Generation Services",
      description: "Capture high-quality leads to grow your business.",
      icon: lead,
      detailedDescription:
        "Our lead generation services use landing pages, forms, and social media tools to collect valuable customer information for your business.",
      features: [
        "Custom Landing Pages",
        "CRM Form Integrations",
        "Email List Building",
      ],
      benefits: [
        "Higher Lead Conversion",
        "Improved Sales Opportunities",
        "Effective Customer Data Collection",
      ],
      pricing: "Starting at $750 for a basic campaign.",
      serviceDuration: "Campaigns typically last 2 to 4 weeks.",
    },
    {
      title: "Software Testing Services",
      description: "Ensure quality with comprehensive app and website testing.",
      icon: softwareTesting,
      detailedDescription:
        "Our testing services include functional, performance, and security testing to ensure your website or app is bug-free and ready for launch.",
      features: [
        "Functional Testing",
        "Performance Testing",
        "Security Testing",
      ],
      benefits: [
        "Bug-Free Launches",
        "Enhanced User Experience",
        "Faster Time-to-Market",
      ],
      pricing: "Starting at $1000 based on project complexity.",
      serviceDuration: "1 to 4 weeks depending on project scope.",
    },
    {
      title: "App Store Console Management",
      description:
        "Manage your apps on Google Play and Apple Developer Consoles.",
      icon: consoleImage,
      detailedDescription:
        "We provide expert support for managing your apps on Google Play Console and Apple Developer Console, including analytics and optimization.",
      features: [
        "Google Play Console Management",
        "Apple Developer Console Support",
        "App Analytics Setup",
      ],
      benefits: [
        "Seamless App Management",
        "Better Performance Insights",
        "Increased App Visibility",
      ],
      pricing: "Starts at $300 for basic management.",
      serviceDuration: "Ongoing service with monthly plans.",
    },
  ];

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Services",
    provider: {
      "@type": "Organization",
      name: "Blackly, blackly",
      url: "https://yourwebsite.com",
    },
    offers: offers.map((offer) => ({
      "@type": "Offer",
      name: offer.title,
      description: offer.description,
      priceCurrency: "USD",
      price: offer.pricing.split(" ")[2] || "Contact for pricing",
    })),
  };

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover expert web development, mobile app development, app publishing, promotion, digital marketing, lead generation, software testing."
        />
        <meta
          name="keywords"
          content="web development services, Blackly,blackly,mobile app development, app publishing, app promotion, digital marketing, lead generation, software testing, app store management, SEO-friendly websites, custom mobile apps"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Business Name" />
        <meta property="og:title" content="Professional Digital Services" />
        <meta
          property="og:description"
          content="Boost your business with our expert services in web development, mobile apps, digital marketing, and more."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/services" />
        <meta property="og:image" content={webDevelopment} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Professional Digital Services" />
        <meta
          name="twitter:description"
          content="Explore our services in web development, mobile apps, digital marketing, and more to grow your business."
        />
        <meta name="twitter:image" content={webDevelopment} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section
        id="services"
        className="bg-[#111722] relative pt-4 pb-16 md:pb-24"
        aria-labelledby="services-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#21304b] to-transparent opacity-60 z-0"></div>
        <Container>
          <div className="text-center mb-12 w-[95%] lg:w-[60%] mx-auto">
            <h1
              id="services-heading"
              className="text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 mb-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
            >
              Your Success, Our Services
            </h1>
            <p className="text-gray-300">
              Discover our expert services tailored to accelerate your business
              growth and ensure long-term success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {offers.map((offer, index) => (
              <Fade key={index} triggerOnce delay={index * 120}>
                <article
                  className="bg-[#090F1B] bg-opacity-90 backdrop-blur-lg rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform border border-gray-700 hover:border-blue-300/60 group relative"
                  aria-labelledby={`offer-${index}-title`}
                >
                  <div className="h-48 w-48 xl:w-52 xl:h-52 mb-6 mx-auto rounded-full border-[3px] border-gray-700 shadow-md overflow-hidden">
                    <img
                      src={offer.icon}
                      alt={`${offer.title} illustration`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h2
                    id={`offer-${index}-title`}
                    className="text-xl font-semibold text-white mb-2 text-center"
                  >
                    {offer.title}
                  </h2>
                  <p className="text-gray-300 mb-16 text-center text-sm">
                    {offer.description}
                  </p>
                  <div className="flex gap-2 absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <button
                      className="flex justify-center items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 lg:px-2 lg:py-1 xl:px-4 xl:py-2 rounded-full transition-all shadow-md w-1/2 text-sm xl:text-base"
                      onClick={() => openModal(offer)}
                      aria-label={`View details for ${offer.title}`}
                    >
                      Details <FaArrowRight />
                    </button>
                    <a
                      href="https://wa.me/8801622559988"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-700 lg:px-2 lg:py-1 px-4 py-2 xl:px-4 xl:py-2 rounded-full transition-all shadow-md w-1/2 text-sm xl:text-base"
                      aria-label="Contact us via WhatsApp"
                    >
                      <FaPhoneAlt /> Contact
                    </a>
                  </div>
                </article>
              </Fade>
            ))}
          </div>
        </Container>

        {modalContent && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center"
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div
              className="bg-[#1e2a3d] p-4 rounded-lg w-[95%] md:w-[90%] lg:w-[95%] transition-all transform scale-95 animate-modal-open"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 h-full xl:h-[500px]">
                <div className="w-full md:w-1/2 h-full hidden md:flex items-center justify-center">
                  <img
                    className="w-full h-[200px] md:h-full object-cover"
                    src={modalContent.icon}
                    alt={`${modalContent.title} illustration`}
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <h2
                    id="modal-title"
                    className="text-2xl font-semibold text-blue-400 mb-2"
                  >
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
                  <div className="space-y-3 text-gray-200">
                    <div className="flex flex-col md:flex-row justify-between text-xs">
                      <div className="mb-2 md:mb-0">
                        <h3 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                          <MdFeaturedPlayList />
                          Features:
                        </h3>
                        <ul className="space-y-2">
                          {modalContent.features?.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <FaCheckCircle className="text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-2 md:mb-0">
                        <h3 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                          <FaLightbulb />
                          Benefits:
                        </h3>
                        <ul className="space-y-2">
                          {modalContent.benefits?.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <FaCheckCircle className="text-green-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h3 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                          <IoMdPricetags />
                          Pricing:
                        </h3>
                        <p className="text-sm text-green-400">
                          {modalContent.pricing}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-blue-400 flex items-center gap-2">
                          <IoIosTime />
                          Service Duration:
                        </h3>
                        <p className="text-sm text-gray-300">
                          {modalContent.serviceDuration}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4">
                      <button
                        className="text-white bg-red-600 hover:bg-red-700 transition-all duration-300 p-2 sm:px-3 sm:py-1 lg:px-6 lg:py-2 rounded-full sm:rounded-md flex items-center gap-2"
                        onClick={closeModal}
                        aria-label="Close modal"
                      >
                        <IoIosCloseCircle className="text-2xl md:text-xl" />
                        <span className="hidden sm:inline">Close</span>
                      </button>
                      <a
                        href="https://wa.me/8801622559988"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-green-600 hover:bg-green-700 transition-all duration-300 p-2 sm:px-3 sm:py-1 lg:px-6 lg:py-2 rounded-full sm:rounded-md flex items-center gap-2"
                        aria-label="Contact via WhatsApp"
                      >
                        <RiWhatsappFill className="text-2xl md:text-xl" />
                        <span className="hidden sm:inline">
                          Contact via WhatsApp
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default ServicesSection;

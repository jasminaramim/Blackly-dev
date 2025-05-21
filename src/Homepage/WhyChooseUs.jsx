import Container from "@/Shared/Container";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import {
  FaTrophy,
  FaRocket,
  FaHandsHelping,
  FaCogs,
  FaUsers,
  FaRegCheckCircle,
} from "react-icons/fa";
const WhyChooseUs = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Discover why clients choose us for web development, mobile apps, and digital marketing. From innovative strategies to client-centric service, we deliver real results."
        />
        <meta
          name="keywords"
          content="web development, mobile app development, digital marketing, branding, software solutions, client support, tech agency"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Why Choose Us | Digital Solutions Partner"
        />
        <meta
          property="og:description"
          content="We provide custom software solutions, mobile applications, branding, and data-driven digital marketing strategies to grow your business."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/#whyUs" />
      </Helmet>

      <div
        id="whyUs"
        className="bg-[#111722] pt-12 pb-16 lg:pt-16 lg:pb-20 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#111722] via-[#132038] to-[#090F1B] opacity-10 z-0"></div>
        <Container>
          <div>
            <header className="text-center mb-12 w-[95%] lg:w-[60%] mx-auto">
              <h2
                id="why-choose-us-title"
                className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 mb-5 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
              >
                Why Choose Us
              </h2>
              <p className="text-gray-300 text-lg">
                Discover why businesses trust us for{" "}
                <strong>custom web development</strong>,{" "}
                <strong>mobile app solutions</strong>, and{" "}
                <strong>digital growth strategies</strong>.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Card 1 */}
              <Fade triggerOnce>
                <div className="bg-blue-400/10 border-[1px] border-blue-400/10 hover:border-blue-400 p-8 rounded-3xl shadow-lg hover:shadow-[0_0_8px_5px_rgba(59,130,246,0.2)] transition-all duration-500 transform hover:translate-y-[-4px] flex flex-col items-center justify-center group">
                  <div className="mb-4 text-blue-400">
                    <FaTrophy className="text-5xl md:text-6xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-blue-400 transition-all duration-500 mb-4 text-center">
                    Multiple Area Expertise
                  </h3>
                  <p className="text-gray-300 text-center">
                    We specialize in web and mobile app development, offering
                    user-centric digital solutions. We also provide expert video
                    editing and promotional services to help your brand.
                  </p>
                </div>
              </Fade>
              {/* Card 2 */}
              <Fade triggerOnce delay={200}>
                <div className=" bg-green-400/10 border-[1px] border-green-400/10 hover:border-green-400 p-8 rounded-3xl shadow-lg hover:shadow-[0_0_8px_5px_rgba(34,197,94,0.2)] transition-all duration-500 transform hover:translate-y-[-4px] flex flex-col items-center justify-center group">
                  <div className="mb-4 text-green-400">
                    <FaRocket className="text-5xl md:text-6xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-green-400 transition-all duration-500 mb-4 text-center">
                    Result-Driven Strategies
                  </h3>
                  <p className="text-gray-300 text-center">
                    Our services focus on driving installs, increasing
                    conversions, and boosting visibility. We use data-driven
                    strategies to measure success and optimize for maximum
                    growth.
                  </p>
                </div>
              </Fade>

              {/* Card 3 */}
              <Fade triggerOnce delay={400}>
                <div className="bg-yellow-400/10 border-[1px] border-yellow-400/10 hover:border-yellow-400 p-8 rounded-3xl shadow-lg hover:shadow-[0_0_8px_5px_rgba(253,230,138,0.2)] transition-all duration-500 transform hover:translate-y-[-4px] flex flex-col items-center justify-center group">
                  <div className="mb-4 text-yellow-400">
                    <FaHandsHelping className="text-5xl md:text-6xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-yellow-400 mb-4 text-center transition-all duration-500">
                    Reliable Execution
                  </h3>
                  <p className="text-gray-300 text-center">
                    Our team ensures precision and efficiency in every task,
                    maintaining high standards. We focus on delivering
                    exceptional quality, meeting deadlines, and exceeding
                    expectations.
                  </p>
                </div>
              </Fade>

              {/* Card 4 */}
              <Fade triggerOnce delay={800}>
                <div className="bg-pink-400/10 border-[1px] border-pink-400/10 hover:border-pink-400 p-8 rounded-3xl shadow-lg hover:shadow-[0_0_8px_5px_rgba(236,72,153,0.2)] transition-all duration-500 transform hover:translate-y-[-4px] flex flex-col items-center justify-center group">
                  <div className="mb-4 text-pink-400">
                    <FaCogs className="text-5xl md:text-6xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-pink-400 mb-4 text-center transition-all duration-500">
                    Innovative Solutions
                  </h3>
                  <p className="text-gray-300 text-center">
                    We specialize in crafting custom, innovative solutions that
                    align with your business needs. By understanding your goals,
                    we create strategies that drive growth, boost efficiency,
                    and ensure long-term success.
                  </p>
                </div>
              </Fade>

              {/* Card 5 */}
              <Fade triggerOnce delay={1000}>
                <div className="bg-purple-400/10 border-[1px] border-purple-400/10 hover:border-purple-400 p-8 rounded-3xl shadow-lg hover:shadow-[0_0_8px_5px_rgba(139,92,246,0.2)] transition-all duration-500 transform hover:translate-y-[-4px] flex flex-col items-center justify-center group">
                  <div className="mb-4 text-purple-400">
                    <FaUsers className="text-5xl md:text-6xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-purple-400 mb-4 text-center transition-all duration-500">
                    Client-Centric Approach
                  </h3>
                  <p className="text-gray-300 text-center">
                    We prioritize clear communication, keeping you informed at
                    all times. Our support team is always available, and we
                    offer flexible service models tailored to ensure smooth,
                    successful collaboration.
                  </p>
                </div>
              </Fade>

              {/* Card 6 */}
              <Fade triggerOnce delay={1200}>
                <div className="bg-orange-400/10 border-[1px] border-orange-400/10 hover:border-orange-400 p-8 rounded-3xl shadow-lg hover:shadow-[0_0_8px_5px_rgba(251,146,60,0.2)] transition-all duration-500 transform hover:translate-y-[-4px] flex flex-col items-center justify-center group">
                  <div className="mb-4 text-orange-400">
                    <FaRegCheckCircle className="text-5xl md:text-6xl" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white group-hover:text-orange-400 mb-4 text-center transition-all duration-500">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-300 text-center">
                    We help startups, brands, and enterprises grow with
                    innovative digital solutions. Our expertise enhances your
                    digital presence, optimizes operations, and scales your
                    business in a competitive market.
                  </p>
                </div>
              </Fade>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WhyChooseUs;

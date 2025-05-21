import image1 from "../assets/websd.jpg";
import image2 from "../assets/image2.jpg";
import Container from "../Shared/Container";
import { Link } from "react-scroll";
import { BsFillPlayFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from 'react-simple-typewriter';
import { Helmet } from "react-helmet-async";

const Banner = () => {
  return (
    <div id="home" className="bg-[#111722] relative">
      {/* SEO Helmet */}
      <Helmet>
        
        <meta
          name="description"
          content="Blackly Tech delivers high-performance web development, custom apps, and advanced digital marketing strategies to help your business grow faster in the digital era."
        />
        <meta
          name="keywords"
          content="Blackly Tech, web development agency, mobile app development, digital marketing agency, SEO services, React developer, LinkedIn marketing, business growth, custom software, enterprise solutions, full-stack development"
        />
        {/* open graph */}
        <meta property="og:title" content="Blackly Tech - Full-Stack Web & Mobile Solutions" />
        <meta property="og:description" content="Scale your business with powerful websites, innovative mobile apps, and digital strategies. Partner with Blackly Tech today!" />
        <meta property="og:image" content="https://yourwebsite.com/assets/websd.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Blackly Tech | Digital Growth Solutions" />
        <meta name="twitter:description" content="Expert web, app, and marketing services to transform your digital presence." />
        <meta name="twitter:image" content="https://yourwebsite.com/assets/websd.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Helmet>

      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#21304b] to-transparent opacity-60 z-0"></div>

      <Container>
        <section className="flex flex-col md:flex-row items-center relative pb-12 pt-24 md:pb-20 md:pt-28 lg:pt-32">
          
          <div className="w-full md:w-1/2">
            <div className='bg-[#3a435e7e] px-4 rounded-full flex items-center w-fit mb-4 p-2'>
              <div className="h-2 w-2 bg-blue-600 rounded-full mr-2 animate-ping"></div>
              <h3 className="font-bold text-[10px] md:text-sm text-white">
                Driving Growth through Web, Mobile & Digital Innovation
              </h3>
            </div>

            <h1 className="w-[96%] text-white text-4xl lg:text-5xl font-bold leading-tight">
              Empowering Your Vision with Cutting-Edge{" "}
              <br className="block sm:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-400 to-blue-300 mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                <Typewriter
                  words={['Solutions', 'Innovation', 'Technology']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={90}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            <p className="lg:text-lg text-gray-300 md:mt-4 mt-7">
              From advanced websites to scalable mobile apps and targeted digital marketing, Blackly Tech crafts tailored technology solutions for businesses aiming to lead in their industries.
            </p>

            <div className="mt-7 md:mt-6 flex justify-start gap-4">
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="px-4 py-2 md:px-6 md:py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition cursor-pointer flex items-center gap-2"
              >
                Get Started <FaArrowRight />
              </Link>
              <Link
                to="whyUs"
                smooth={true}
                duration={500}
                className="px-4 py-2 md:px-6 md:py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-white hover:text-white transition cursor-pointer flex items-center gap-1"
              >
                <BsFillPlayFill /> How It Works
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/2 justify-center relative">
            <img
              src={image1}
              alt="Custom Web Development by Blackly Tech"
              className="w-3/5 rounded-tl-4xl rounded-br-4xl shadow-lg absolute -top-14 z-10 border-l-[3px] border-b-[3px] border-l-blue-400 border-b-blue-400"
            />
            <img
              src={image2}
              alt="Innovative Mobile App Solutions"
              className="w-3/6 rounded-tl-4xl rounded-br-4xl shadow-lg absolute -top-44 right-0 z-0 border-r-[3px] border-t-[3px] border-r-blue-400 border-t-blue-400"
            />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Banner;

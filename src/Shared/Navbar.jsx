import logoText from "../../src/assets/blackly.png";
import { TfiMenu } from "react-icons/tfi";
import Container from "./Container";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet-async";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-400 hover:to-blue-300 hover:font-bold text-gray-300 transition-all duration-500"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="offers"
          smooth={true}
          duration={500}
          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-400 hover:to-blue-300 hover:font-bold text-gray-300 transition-all duration-500"
        >
          Offers
        </Link>
      </li>
      <li>
        <Link
          to="services"
          smooth={true}
          duration={500}
          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-400 hover:to-blue-300 hover:font-bold text-gray-300 transition-all duration-500"
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          to="whyUs"
          smooth={true}
          duration={500}
          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-400 hover:to-blue-300 hover:font-bold text-gray-300 transition-all duration-500"
        >
          Why Us
        </Link>
      </li>
      <li>
        <Link
          to="footer"
          smooth={true}
          duration={500}
          className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-700 hover:via-blue-400 hover:to-blue-300 hover:font-bold text-gray-300 transition-all duration-500"
        >
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <>
      <Helmet>
        {/* <title>Blackly | Expert Web & Mobile App Development Solutions</title> */}

        <meta
          name="description"
          content="Blackly offers expert web and mobile app development services for startups and enterprises. We build fast, scalable, and innovative software tailored to accelerate your business growth."
        />

        <meta
          name="keywords"
          content="
      Blackly , blackly, development, web development, software solutions, frontend development, backend development, full stack developer,
      mobile app development, startup software, enterprise applications, react developer, firebase developer,
      tailwind css, high performance apps, custom software, digital transformation, innovative apps,
      scalable software, agile development, UI/UX design, cloud integration, fast delivery software
    "
        />

        <meta name="author" content="blackly" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Blackly | Expert Web & Mobile App Development Solutions"
        />
        <meta
          property="og:description"
          content="Accelerate your business growth with Blackly’s handcrafted, innovative web and mobile applications."
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/images/preview.jpg"
        />
        <meta property="og:url" content="https://yourdomain.com/" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blackly | Expert Web & Mobile App Development Solutions"
        />
        <meta
          name="twitter:description"
          content="Fast, scalable, and custom software solutions for startups and enterprises by Blackly."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/images/preview.jpg"
        />
      </Helmet>

      <div className="fixed top-0 bg-black/10 backdrop-blur-md z-50 w-full py-1">
        <Container>
          <div className="navbar p-0">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="lg:hidden mr-4">
                  <TfiMenu className="text-white text-xl md:text-2xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-[#090F1B] rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  {links}
                </ul>
              </div>
              <Link to="home" smooth={true} duration={500}>
                <div className="cursor-pointer">
                  <div className="w-36 md:w-36">
                    <img src={logoText} alt="Blackly Logo" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg">{links}</ul>
            </div>

            <div className="navbar-end">
              <button
                className="bg-white text-black text-sm md:text-base hover:bg-transparent hover:text-white transition-all duration-300 border-[1px] border-white hover:border-white/50 font-semibold px-2 py-1 md:py-2 md:px-4 rounded-full flex items-center cursor-pointer"
                onClick={() =>
                  window.open("https://wa.me/8801622559988", "_blank")
                }
              >
                <FaPhoneAlt className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;

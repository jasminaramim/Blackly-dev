import logoText from "../../src/assets/blackly.png";
import { TfiMenu } from "react-icons/tfi";
import Container from "./Container";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-scroll";
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
              <div className=" cursor-pointer">
                <div className="w-36 md:w-36">
                  <img src={logoText} alt="" />
                </div>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal  px-1 text-lg">{links}</ul>
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
  );
};

export default Navbar;

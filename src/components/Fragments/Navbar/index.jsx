import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/rizkiAdamLogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="logo" className="w-10 mx-2" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/angga-rizki-b67999280"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="https://github.com/radmv" target="_blank">
          <FaGithub />
        </a>
        <a href="https://instagram.com/cheezebug" target="_blank">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

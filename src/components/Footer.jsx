import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../public/assets/icon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="mb-10 bg-[#101727] text-white py-10">
        <div className="grid md:grid-cols-3  lg:grid-cols-5 w-10/12 mx-auto">
          <div className="space-y-3 pr-5">
            <div className="flex items-center gap-2">
              <Image
                src={logo}
                alt="Book Hopper Logo"
                width={40}
                height={40}></Image>
              <h2 className="text-xl font-bold">Book Hopper</h2>
            </div>
            <p className="text-sm font-light">
              Your fast, modern online book borrowing platform for stories, tech, and science. Explore, borrow, and read instantly across any device.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Products</h3>
            <ul className="text-sm font-light">
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold">Resources</h3>
            <ul className="text-sm font-light">
              <li>
                <a>Documantation</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
          <div className="items-center text-center justify-center">
            <h3 className="text-xl font-bold">Social Links</h3>
            <div className="flex justify-center items-center gap-2 pt-1">
              <FaLinkedin />
              <FaInstagramSquare />
              <FaSquareXTwitter />
              <FaSquareFacebook />
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex  justify-between px-30">
          <div>
            <p>&copy; 2026 BookHopper. All rights reserved.</p>
          </div>
          <div className="flex items-center">
            <ul className="text-sm font-light flex gap-2">
              <li>
                Privacy Policy
              </li>
              <li>Terms of Service</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

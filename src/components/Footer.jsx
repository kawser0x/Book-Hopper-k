import { FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../public/assets/icon.png";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="mb-10 bg-[#101727] text-white py-10">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 w-10/12 mx-auto gap-8">
          <div className="space-y-3 pr-5">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="Book Hopper Logo" width={40} height={40} />
              <h2 className="text-xl font-bold">Book Hopper</h2>
            </div>
            <p className="text-sm font-light">
              Your fast, modern online book borrowing platform for stories,
              tech, and science. Explore, borrow, and read instantly across any
              device.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Products</h3>
            <ul className="text-sm font-light space-y-2">
              <li>
                <a className="hover:underline cursor-pointer">Features</a>
              </li>
              <li>
                <a className="hover:underline cursor-pointer">Pricing</a>
              </li>
              <li>
                <a className="hover:underline cursor-pointer">About</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Resources</h3>
            <ul className="text-sm font-light space-y-2">
              <li>
                <a className="hover:underline cursor-pointer">Documentation</a>
              </li>
              <li>
                <a className="hover:underline cursor-pointer">Help Center</a>
              </li>
              <li>
                <a className="hover:underline cursor-pointer">Community</a>
              </li>
              <li>
                <a className="hover:underline cursor-pointer">Contact</a>
              </li>
            </ul>
          </div>
          <div className="items-center text-center justify-center">
            <h3 className="text-xl font-bold mb-3">Social Links</h3>
            <div className="flex justify-center items-center gap-3 pt-1 text-2xl">
              <a href="#" className="hover:text-gray-300">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagramSquare />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaSquareXTwitter />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaSquareFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="w-10/12 mx-auto my-8 border-t border-gray-700"></div>

        <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="text-sm font-light">
              &copy; 2026 BookHopper. All rights reserved.
            </p>
          </div>
          <div>
            <ul className="text-sm font-light flex flex-wrap justify-center gap-4">
              <li>
                <a className="hover:underline cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a className="hover:underline cursor-pointer">
                  Terms of Service
                </a>
              </li>
              <li>
                <a className="hover:underline cursor-pointer">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

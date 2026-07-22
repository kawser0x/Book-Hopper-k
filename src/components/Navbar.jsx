import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/icon.png";

const Navbar = () => {
  const links = (
    <>
      <li className="hover:underline" >
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:underline">
        <Link href={"/"}>All Books</Link>
      </li>
      <li className="hover:underline">
        <Link href={"/"}>About Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Image
          src={logo}
          alt="Book Hopper Logo"
          width={40}
          height={40}
          className="rounded-full"></Image>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-2 px-1 ">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link href={"/"}>
          <button className="btn btn-outline">Signin</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

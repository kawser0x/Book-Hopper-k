"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/assets/icon.png";
import { authClient } from "@/app/lib/auth-client";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const pathname = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-accent underline"
              : "hover:underline"
          }>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/allbook"
          className={
            pathname === "/allbook"
              ? "font-bold text-accent underline"
              : "hover:underline"
          }>
          All Books
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={
            pathname === "/about"
              ? "font-bold text-accent underline"
              : "hover:underline"
          }>
          Profile
        </Link>
      </li>
    </>
  );

  const handleSignOut = async () => {
    await authClient.signOut();
  };

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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <Image
          src={logo}
          alt="Book Hopper Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-4 px-1 menu menu-horizontal">{links}</ul>
      </div>
      <div className="navbar-end">
        {!user && (
          <Link href={"/login"}>
            <button className="btn btn-outline">Signin</button>
          </Link>
        )}
        {user && (
          <div className="avatar flex gap-1 justify-center items-center">
            <h2 className="font-bold">{user.name}</h2>
            <div className="w-10 rounded-full overflow-hidden flex items-center justify-center bg-neutral text-neutral-content">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={user?.name}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <span className="text-xl font-bold">
                  {user?.name?.charAt(0) || "K"}
                </span>
              )}
            </div>
            <button
              onClick={handleSignOut}
              className="btn btn-error rounded-full">
              SignOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

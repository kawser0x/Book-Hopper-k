import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-base-100 text-center p-6">
      <div className="text-9xl md:text-[150px] font-extrabold text-accent animate-bounce">
        😱
      </div>

      <h1 className="mt-8 text-6xl md:text-8xl font-black tracking-tighter text-base-content">
        4<span className="text-primary">0</span>4
      </h1>

      <h2 className="mt-4 text-2xl md:text-3xl font-bold text-base-content/90">
        Oops! Looks like this page went on an adventure.
      </h2>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
        <Link href="/" className="w-full sm:w-auto">
          <button className="btn btn-primary w-full text-lg">
            Go Back Home
          </button>
        </Link>
      </div>

      <div className="mt-24 text-sm text-base-content/40">
        Error Code: PAGE_NOT_FOUND_BOOK_HOPPER
      </div>
    </div>
  );
};

export default NotFound;

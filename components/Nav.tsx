import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="fixed w-full px-4 lg:px-6 h-14 flex items-center border-2 rounded-b-lg z-50 bg-white">
      <Link
        href="#landing"
        className="flex items-center justify-center ml-6 mb-2"
        prefetch={false}
      >
        <Image src="/bull.svg" alt="Bull" width={80} height={80} />
        <span className="sr-only">Bull Broker</span>
      </Link>
      <div className=" ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Testimonials
        </Link>
        <Link
          href="#about"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="/help"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Help-Ai
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

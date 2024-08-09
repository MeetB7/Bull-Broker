import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href="/" className="flex items-center ml-6">
        <Image src="/bull.svg" width={70} height={70} alt="home"/>
        <span className="sr-only">Home</span>
      </Link>
      <div
        id="drawer-contact"
        className="h-screen p-4 overflow-y-auto bg-white dark:bg-gray-800"
        aria-labelledby="drawer-contact-label"
      >

        <h5
          id="drawer-label"
          className="inline-flex items-center mb-6 text-base font-semibold text-slate-800 uppercase dark:text-gray-400"
        >
          <svg
            className="w-4 h-4 me-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 16"
          >
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
          </svg>
          Contact us
        </h5>
        <form className="mb-6">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-50 border border-gray-300 text-slate-700 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-slate-700 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-slate-700 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-slate-900 hover:bg-slate-700 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 block"
          >
            Send message
          </button>
        </form>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <a
            href="#"
            className="hover:underline hover:text-slate-900 dark:hover:text-gray-50"
          >
            info@bullbroker.com
          </a>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <a
            href=""
            className="hover:underline hover:text-slate-900 dark:hover:text-gray-50"
          >
            212-456-7890
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
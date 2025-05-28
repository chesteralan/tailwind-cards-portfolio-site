import Image from "next/image";
import Link from "next/link";
import React from "react";
import GitHubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";

const Header = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Alchie Tagudin
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
          <a
            href="https://github.com/chesteralan"
            target="_blank"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Image src={GitHubIcon} alt="GitHub Mark" width={20} height={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/chesteralan/"
            target="_blank"
            className="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Image
              src={LinkedInIcon}
              alt="GitHub Mark"
              width={20}
              height={20}
            />
          </a>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/chrome-extensions"
                className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                aria-current="page"
              >
                Chrome Extensions
              </Link>
            </li>
            <li>
              <Link
                href="/websites"
                className="block py-2 px-3 bg-blue-700 rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
                aria-current="page"
              >
                Websites
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

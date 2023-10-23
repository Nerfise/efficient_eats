import React, { useState, useEffect } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) {
        setNav(nav);
        return;
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [nav]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      window.location.replace("/");
      signOut(auth);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 transition ease-in-out shadow-md sticky top-0 flex justify-between md:justify-between lg:justify-evenly items-center h-20 w-full mx-auto px-4 z-30">
      <Link
        to="top"
        spy={true}
        smooth={true}
        duration={500}
        className="group text-3xl font-bold cursor-pointer"
      >
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-56 inline-block mr-40"
          />
        </a>
      </Link>
      <ul className="hidden md:flex justify-end md:w-[30%] uppercase">
        <Link
          to="top"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => navigate("/home")}
          className="p-3 dark:text-white hover:text-blue-500 transition ease-in-out rounded-xl font-semibold cursor-pointer caligraphy-home"
        >
          Home
        </Link>
        <Link
          to="work"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => navigate("/home")}
          className="p-3 dark:text-white hover:text-blue-500 transition ease-in-out rounded-xl font-semibold cursor-pointer caligraphy-work"
        >
          About
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => navigate("/home")}
          className="p-3 dark:text-white hover:text-blue-500 transition ease-in-out rounded-xl font-semibold cursor-pointer caligraphy-education"
        >
          Contact
        </Link>
        <div
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => navigate("/home/reservation")}
          className="p-3 dark:text-white hover:text-black-500 transition ease-in-out rounded-xl font-semibold cursor-pointer caligraphy-education"
        >
          Reservation
        </div>
        <div
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          onClick={() => navigate("/home/gallery")}
          className="p-3 dark:text-white hover:text-black-500 transition ease-in-out rounded-xl font-semibold cursor-pointer caligraphy-education"
        >
          Gallery
        </div>
        <div
          onClick={toggleTheme}
          className="flex justify-center items-center cursor-pointer"
        >
          {theme === "dark" ? (
            <HiSun size={25} className="m-2 text-white-500" />
          ) : (
            <HiMoon size={25} className="m-2 text-black-500" />
          )}
        </div>
        <div
          className="flex justify-center items-center cursor-pointer ml-2"
        >
           <button
            onClick={handleLogout}
            className="mt-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            >
              Logout
          </button>
        </div>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={20} className="cursor-pointer dark:text-white" />
        ) : (
          <AiOutlineMenu size={20} className="cursor-pointer dark:text-white" />
        )}
      </div>
      <div
        className={
          nav
            ? "flex flex-col items-center py-6 fixed left-0 top-0 h-full w-[75%] bg-gray-100 dark:bg-gray-800 dark:border-r-black ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <Link
          to="top"
          spy={true}
          smooth={true}
          duration={500}
          className="group text-3xl font-bold cursor-pointer "
        >
          <a href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-60 h-20 inline-block "
            />
          </a>
        </Link>
        <ul className="uppercase p-4 flex flex-col text-center ">
          <Link
            to="top"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleNav}
            className="p-3 dark:text-white hover:text-blue-500 rounded-xl font-semibold cursor-pointer caligraphy-home "
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleNav}
            className="p-3 dark:text-white hover:text-blue-500 rounded-xl font-semibold cursor-pointer caligraphy-work "
          >
            About
          </Link>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={handleNav}
            className="p-3 dark:text-white hover:text-blue-500 rounded-xl font-semibold cursor-pointer caligraphy-education"
          >
            Contact
          </Link>
          <div
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => navigate("/home/reservation")}
            className="p-3 dark:text-white hover:text-black-500 transition ease-in-out rounded-xl font-semibold cursor-pointer caligraphy-education"
          >
            Reservation
          </div>
          <div
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            onClick={() => navigate("/home/reservation")}
            className="p-3 dark:text-white hover:text-black-500 transition ease-in-out rounded-xl font-semibold cursor-pointer caligraphy-education"
          >
            Gallery
          </div>
          <div
            onClick={toggleTheme}
            className="flex justify-center items-center cursor-pointer"
          >
            {theme === "dark" ? (
              <HiSun size={25} className="m-2 text-white-500" />
            ) : (
              <HiMoon size={25} className="m-2 text-black-500" />
            )}
          </div>
          <button
            onClick={handleLogout}
            className="mt-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            >
              Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="transition ease-in-out w-full text-black dark:text-white bg-gray-100 dark:bg-gray-800 p-6 flex flex-col gap-2 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-2">
        <div className="flex flex-col items-center gap-2 text-center md:text-left">
          <p className="text-sm font-semibold">Efficient Eats:</p>
          <p className="text-xs">
            Our website is meticulously designed to offer you a seamless and pleasant online experience.
          </p>
          <p className="text-xs">
            Our top priority is cleanliness and accuracy, ensuring that you can effortlessly find the information.
          </p>
          <p className="text-xs">
            This website is designed to be both environmentally friendly and highly effective.
          </p>
        </div>
        <div className="flex flex-col items-center flex-wrap gap-4 mt-auto md:mt-0 md:justify-end">
          <p className="text-sm font-semibold">Contact us:</p>
          <a
            href="tel:09173911931"
            className="text-sm flex items-center hover:underline"
          >
            <FiPhone className="mr-1" /> Phone: 09173911931
          </a>
          <a
            href="mailto:efficienteats@gmail.com"
            className="text-sm flex items-center hover:underline"
          >
            <FiMail className="mr-1" /> Email: efficienteats@gmail.com
          </a>
          <div className="flex justify-center items-center flex-wrap gap-4 md:justify-end">
            <span className="text-sm font-semibold">Get in Touch with Us:</span>
            <a
              href="https://www.facebook.com"
              className="text-xl text-blue-600 hover:text-blue-800"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              className="text-xl text-blue-400 hover:text-blue-600"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-xl text-pink-600 hover:text-pink-800"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-xl text-blue-800 hover:text-blue-900"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

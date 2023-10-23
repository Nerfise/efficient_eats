import React from 'react';
import { FiMail } from "react-icons/fi";
import { ContactData } from "../../../../data/ContactData.js";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lol22d9', 'template_767fs4o', form.current, 'vtXLr4r1SnXfOFrHj')
      .then((result) => {
          console.log(result.text);
          alert("Your Message was succesfully sent");
      }, (error) => {
          console.log(error.text);
          alert("Your Message wasn't sent");
      });
  };

  return (
    <div
      id="contact"
      className="overflow-hidden py-40 px-2 transition ease-in-out w-full max-h-fit flex flex-col justify-evenly items-center md:flex-row dark:text-white"
      style={{
        backgroundImage: `url("https://jooinn.com/images/fruits-background-3.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" bg-blue-100 p-2 rounded-md bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-30 border border-gray-100">
        <h1 className="text-6xl font-bold mt-4 text-black">Get in Touch with Us</h1>
        <div className="flex gap-3 justify-center items-center mx-10 text-gray-600 dark:text-gray-300">
          <FiMail size={20} />
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300">
            <p>EfficientEats@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center mt-2">
          {ContactData.map((data, index) => (
            <a href={data.path} key={index}>
              <div
                whileHover={{ scale: 1.2, y: -5 }}
                className={data.className}
                style={{ color: data.color }}
              >
                <data.icon size={30} />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="p-2 w-100 max-w-[500px] dark:bg-gray-700 md:shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-red-500 rounded-md flex flex-col md:flex-row justify-center items-center">
        <div className="transition ease-in-out p-8 rounded-md gap-3 w-full text-gray-600 dark:text-gray-300">
          <form className="flex flex-col gap-3 text-black dark:text-white"  ref={form} onSubmit={sendEmail}>
            <h6 className="text-gray-600 dark:text-gray-300">Name:</h6>
            <input
              type="text"
              name="from_name"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Email:</h6>
            <input
              type="email"
              name="user_email"
              required
              className="shadow-lg shadow-black-500/50 p-2 rounded-full focus:outline-blue-500 dark:text-black"
            />
            <h6 className="text-gray-600 dark:text-gray-300">Message:</h6>
            <textarea
              name="message"
              rows="7"
              required
              className="resize-none shadow-lg shadow-black-500/50 p-1 rounded-xl focus:outline-blue-500 dark:text-black"
            ></textarea>

            <div className="flex gap-3">
              <button
                type="submit"
                className="w-full self-center font-semibold uppercase py-3 rounded-full bg-[#242424] dark:bg-blue-500 text-gray-200 transition ease-in-out transform hover:scale-105"
              >
                Submit
              </button>
              <button
                type="reset"
                className="w-full self-center font-semibold uppercase py-3 rounded-full bg-red-500 text-gray-200 transition ease-in-out transform hover:scale-105"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;

import React from "react";
import { BiLogoGithub } from "react-icons/bi";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { AboutData } from "../../../../data/AboutData";

const About = () => {
 

  const fadeInOutVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      id="work"
      className="overflow-hidden transition ease-in-out w-full max-h-fit flex justify-center 
      dark:bg-gray-800 dark:text-white"
      initial="hidden"
      animate="visible"
      variants={fadeInOutVariants}>

      <div className="flex flex-col p-2 gap-6 justify-center items-center text-center ">
        
        <div className="text-center text-white-600 darkshadow:text-white-300 mx-auto mt-10 mb-16">
          <h1 className="text-4xl font-semibold mb-4">Tables Etiquette and Guides</h1>
          <p>Table etiquette and guidelines are important because they promote respect, professionalism, hygiene,</p>
          <p>and effective communication while enhancing personal growth and social interactions.</p>
          <p>They are essential for navigating various social and professional settings with poise and confidence.</p>
        </div>

        <div className="flex flex-col items-center gap-10">
          {AboutData.map((props,index) => {
              return (
                <motion.div
                  key={index}
                  className="overflow-hidden dark:bg-gray-700 rounded-md flex flex-col lg:flex-row text-center lg:text-start items-center gap-3 shadow-md hover:shadow-lg transition ease-in-out duration-300 shadow-gray-300 dark:shadow-red-500"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInOutVariants}
                >
                  <div className="w-full md:max-w-2xl">
                    <a href={props.readMoreLink} target="_blank">
                      <motion.img
                        src={props.gifSrc}
                        alt="/"
                        className="w-full"
                        whileHover={{ scale: 1.05 }}
                      />
                    </a>
                  </div>
                  <div className="flex flex-col w-full md:max-w-md gap-6 overflow-hidden p-2">
                    <h6 className="text-red-500 font-semibold text-2xl">
                      {props.projectName}
                    </h6>
                    <p className="text-gray-600 text-lg dark:text-gray-300">
                      {props.description}
                    </p>
                    <div className="box mt-4">
                      <a
                        href={props.readMoreLink}
                        target="_blank"
                        className="read-more-link bg-red-500 text-white rounded-full px-4 py-2 hover:bg-red-700 transition ease-in-out duration-300"
                      >
                        Read More!
                      </a>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-center lg:justify-start mt-4">
                      <a href={props.sourceCode} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="github-icon"
                          style={{ color: props.githubColor }}
                        >
                          <BiLogoGithub size={30} />
                        </motion.div>
                      </a>
                      <a href={props.instagram} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="instagram-icon"
                          style={{ color: props.instagramColor }}
                        >
                          <FaInstagram size={30} />
                        </motion.div>
                      </a>
                      <a href={props.facebook} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="facebook-icon"
                          style={{ color: props.facebookColor }}
                        >
                          <FaFacebook size={30} />
                        </motion.div>
                      </a>
                      <a href={props.twitter} target="_blank">
                        <motion.div
                          whileHover={{ scale: 1.2, y: -5 }}
                          className="twitter-icon"
                          style={{ color: props.twitterColor }}
                        >
                          <FaTwitter size={30} />
                        </motion.div>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            }
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
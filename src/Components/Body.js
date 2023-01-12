import React from "react";
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Mainjpeg from "../Img/IMG-6385.png";
import Static from "../Img/static_media_background.png";
import Resume from "../Img/Carmen_Amba_Resume.pdf";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const container = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.25,
      staggerChildren: 0.5,
    },
  },
};

const items = {
  hide: {
    y: 50,
  },
  show: {
    opacity: 1,
    y: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6,
    },
  },
};
const item = {
  hide: {
    y: 100,
  },
  show: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
    },
  },
};

function Body() {
  return (
    <>
      <motion.section
        initial="hide"
        animate="show"
        variants={container}
        className="max-w-screen-xl m-auto py-32 md:py-10 md:pt-32"
      >
        <div>
          <h2
            initial="hide"
            animate="show"
            variants={items}
            className="flex text-4xl text-[rgb(41,29,220)] font-[470] p-8 md:p-0"
          >
            <div className="w-32 bg-[rgb(73,66,171)] h-0 p-[0.6px] mt-6 border-1 mr-8 "></div>
            Carmen A{" "}
            <Typewriter
              words={["mba"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={200}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
        <div className="flex flex-col md:flex-row  align-middle h-full md:relative pb-10">
          <div className="w-full md:w-1/2">
            <motion.h1
              initial="hide"
              animate="show"
              variants={items}
              className="text-[3.5rem] md:text-7xl font-bold uppercase text-center md:text-left mt-8 text-gray-600 leading-[3.5rem] w-full"
            >
              Frontend <br /> Developer & <br />
              Logical Expert
            </motion.h1>

            <div className="md:m-0 text-base md:text-lg mt-8 text-gray-600 mb-10 text-center md:text-left px-4 md:px-0 max-w-md m-auto">
              <motion.p initial="hide" animate="show" variants={item}>
                I aim to consistently deliver products with a grit mindset and
                commitment to successful team work. so, let me join your amazing
                team to create magic.
              </motion.p>
            </div>
          </div>
          <div className="w-[80%] m-auto md:w-1/2 md:flex md:justify-end">
            <div className="hidden md:block">
              <img
                src={Static}
                alt="static"
                className="md:w-[45%] md:ml-[60%]"
              />
            </div>

            <motion.div
              initial="hide"
              animate="show"
              variants={item}
              className="md:absolute top-16 ml-0 bg-[rgb(116,128,230)] rounded-r-full"
            >
              <img src={Mainjpeg} alt="mainjpeg" className="md:w-[80%]" />
            </motion.div>
          </div>
        </div>

        <div className="flex gap-4 h-12 w-[350px] space-x-3 md:w-[40%] md:ml-16 mb-5 m-auto md:m-2">
          <div className="w-[150px] md:w-[25%] flex justify-center rounded align-middle bg-[rgba(38,30,148,0.89)]">
            <a
              target="{_blank}"
              href="/contact"
              className="p-2 text-white text-xl"
            >
              Hire Me
            </a>
          </div>
          <div className="w-[30%]">
            <span className="flex justify-center align-middle">
              <a
                download={Resume}
                href="https://drive.google.com/file/d/15_hvn6vvxgczz9PezSrnwCeNx3abmtOa/view"
                target="{_blank}"
                className="flex py-2 cursor-pointer underline underline-offset-2 text-blue-900 text-[1.3rem]"
              >
                Resume
                <div className="ml-1">
                  <ion-icon name="download-outline"></ion-icon>
                </div>
              </a>
            </span>
          </div>
        </div>

        <div className="w-full py-5">
          <div className="w-[60%] md:m-0 md:w-[50%] bg-slate-700 underline m-auto underline-offset-2 border border-red-700 "></div>
          <h5 className="text-lg text-gray-800 m-auto md:m-0 w-[60%] md:w[50%] py-2">
            I am currently open for work
          </h5>
        </div>
      </motion.section>
    </>
  );
}

export default Body;

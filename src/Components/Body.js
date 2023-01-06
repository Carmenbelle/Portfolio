import React from "react";
// import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Mainjpeg from "../Img/IMG-6385.png";
import Static from "../Img/static_media_background.png";
import Resume from "../Img/Carmen_Amba_Resume.pdf";

function Body() {
  return (
    <>
      <section className="max-w-screen-xl m-auto py-32">
        <div>
          <h2 className="flex text-4xl text-[rgb(41,29,220)] font-[470]">
            <div className="w-32 bg-[rgb(73,66,171)] h-0 p-[0.6px] mt-6 border-1 mr-8 "></div>
            Carmen Amba
          </h2>
        </div>
        <div className="flex flex-col md:flex-row  align-middle h-full md:relative pb-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-[3.5rem] md:text-7xl font-bold uppercase text-center md:text-left mt-10 text-gray-600 leading-[3.5rem] w-full">
              Frontend <br /> Developer & <br />
              Logical Expert
            </h1>

            <div className="md:m-0 text-base md:text-lg mt-8 text-gray-600 mb-10 text-center md:text-left px-4 md:px-0 max-w-md m-auto">
              <p>
                I aim to consistently deliver products with a grit mindset and
                commitment to successful team work. so, let me join your amazing
                team to create magic.
              </p>
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

            <div className="md:absolute top-16 ml-0 bg-[rgb(116,128,230)] rounded-r-full">
              <img src={Mainjpeg} alt="mainjpeg" className="md:w-[80%]" />
            </div>
          </div>
        </div>

        <div className="flex gap-4 h-12 w-[350px] space-x-3 md:w-[40%] md:ml-16 mb-8 m-auto md:m-2">
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

        <div className="w-full py-6">
          <div className="w-[60%] md:m-0 md:w-[50%] bg-slate-700 underline m-auto underline-offset-2 border border-red-700 "></div>
          <h5 className="text-lg text-gray-800 m-auto md:m-0 w-[60%] md:w[50%] py-2">
            I am currently open for work
          </h5>
        </div>
      </section>
    </>
  );
}

export default Body;

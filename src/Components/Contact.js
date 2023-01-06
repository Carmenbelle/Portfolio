import React from "react";
import Avater from "../Img/avater-phone.png";
import { IoMdMailUnread } from "react-icons/io";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <>
      <section className="max-w-screen-xl m-auto py-32">
        <div className="">
          <div className="flex space-x-6 text-gray-700 text-5xl py-10 font-semibold ">
            <h1>Contact Me</h1>
            <div className="w-32 bg-[rgb(73,66,171)] h-0 p-[0.6px] mt-7 border-1 mr-8 "></div>
          </div>

          <div className="w-full flex flex-col md:flex-row m-auto">
            <div className="w-full md:w-1/2">
              <p className="py-8 text-gray-500 text-xl leading-8">
                I'm currently looking for an oportunity in a Frontend stack, if
                you have any request or follow up question, kindly contact
              </p>
              <div className="space-y-6 w-[95%] p-6 ">
                <div className="flex space-x-5">
                  <input
                    for="name"
                    placeholder="Name"
                    className="w-[48%] p-4 text-lg"
                  />
                  <input
                    for="email"
                    placeholder="Email"
                    className="w-[48%] p-4 text-lg"
                  />
                </div>

                <div>
                  <input
                    for="subject"
                    placeholder="Subject"
                    className="w-full p-4 text-lg"
                  />
                </div>

                <div>
                  <textarea
                    rows="6"
                    cols="20"
                    for="message"
                    placeholder="Message"
                    className="w-full p-4 text-lg"
                  />
                </div>
              </div>
              <div className="pl-6">
                <button className="border bg-[rgba(38,30,148,0.89)] text-xl w-[92%] text-white rounded p-4 ">
                  Send
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className=" flex justify-end ">
                <img src={Avater} alt="avaterpng" className="border w-[65%]" />
              </div>

              <div className="flex w-[70%] justify-end align-middle ml-40">
                <span className="flex py-5 space-x-20 text-[rgba(38,30,148,0.89)] ">
                    <a target="{_blank}" href="mailto:carmieamba@gmail.com">
                        <IoMdMailUnread size={25} className="hover:text-[rgba(96,88,207,0.89)] text-red-800" />
                    </a>
                    <a target="{_blank}" href="https://www.linkedin.com/in/carmen-amba-226975185/">
                        <BsLinkedin size={25} className="hover:text-[rgba(96,88,207,0.89)] text-blue-700" />
                    </a>
                    <a target="{_blank}" href="https://github.com/carmenbelle">
                        <AiFillGithub size={25} className="hover:text-[rgba(96,88,207,0.89)] text-black" />
                    </a>
                    <a target="{_blank}" href="https://twitter.com/car__mie" >
                        <BsTwitter size={25} className="hover:text-[rgba(96,88,207,0.89)] text-blue-500" />
                    </a>

                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

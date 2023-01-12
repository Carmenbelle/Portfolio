import React from "react";
import ReactIcon from "../Img/React.png";
import VueIcon from "../Img/Vue.png";
import TailwindIcon from "../Img/Tailwind.png";
import BootstrapIcon from "../Img/Bootstrap.png";
import Algorithm from "../Img/Algorithm.png";
import Github from "../Img/Github.png";
import Wordpress from "../Img/Wordpress.png";
import Votingsite from "../Img/Votingsite.png";
// import apiCall from "../Img/Api.png";
// import clock from "../Img/Clock.png";

function Portfolio() {
  return (
    <>
      <div className="max-w-screen-xl m-auto md:pt-32">
        <div>
          <div className="md:flex md:space-x-12 text-gray-700 text-4xl md:text-5x py-32 md:py-10 font-semibold ">
            <h1 className="flex justify-center">My Recent Projects</h1>

            <div className="flex justify-center">
              <div className="w-40 bg-[rgb(73,66,171)] h-0 p-[0.8px] md:mt-7 mt-3 border-2 md:p-[0.8px] "></div>
            </div>
          </div>
        </div>

        <section className="space-y-10 py-10 w-full">
          <p className="text-2xl text-gray-700 pl-[1.2rem] md-p-0">
            I use these tools to bring my ideas to reality
          </p>

          <div className="md:flex text-gray-700  w-full md:space-x-20">
            <div className="1/2 md:w-[60%]">
              <h4 className="w-full flex justify-center text-2xl py-4 font-bold">
                Frontend Tools
              </h4>
              <div className="flex py-4 p-10 md:5">
                <a target="{_blank}" href="https://beta.reactjs.org/">
                  <img src={ReactIcon} alt="reacticon" className="w-[60%]" />
                  <p className="w-[55%] flex justify-center">React</p>
                </a>

                <a target="{_blank}" href="https://vuejs.org/">
                  <img src={VueIcon} alt="vueicon" className="w-[50%] py-2" />
                  <p className="w-[49%] flex justify-center">Vue</p>
                </a>

                <a target="{_blank}" href="https://tailwindcss.com/">
                  <img
                    src={TailwindIcon}
                    alt="tailwindicon"
                    className="w-[50%] py-1"
                  />
                  <p className="w-[40%] flex justify-center">Tailwind</p>
                </a>

                <a
                  target="{_blank}"
                  href="https://getbootstrap.com/"
                  className=""
                >
                  <img
                    src={BootstrapIcon}
                    alt="bootstrapicon"
                    className="w-[50%] py-1"
                  />
                  <p className="w-[40%] flex justify-center">Bootstrap</p>
                </a>
              </div>
            </div>

            <div className="1/2 w-full md:w-[40%]">
              <h4 className="w-full flex justify-center text-2xl py-4 font-bold">
                Other skills
              </h4>
              <div className="flex ml-8 md:ml-0 py-4 justify-start md:justify-end">
                <a target="{_blank}" href="https://the-algorithms.com/" className="">
                  <img src={Algorithm} alt="algorithm" className="w-[70%] " />
                  <p className="w-[70%] flex justify-center">Algorithm</p>
                </a>

                <a target="{_blank}" href="https://github.com/carmenbelle">
                  <img src={Github} alt="github" className="w-[70%] py-2" />
                  <p className="w-[70%] flex justify-center">Github</p>
                </a>

                <a target="{_blank}" href="https://wordpress.com/">
                  <img src={Wordpress} alt="wordpress" className="w-[70%]" />
                  <p className="w-[70%] flex justify-center">Wordpress</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="md:flex p-10 md:p-0 w-full space-y-6 md:space-y-0 space-x-8 ">
            <div className="h-[80%] ml-8 md:ml-0 rounded-lg p-4 shadow">
              <div className="relative  ">
                <img src={Votingsite} alt="votingsite" className="" />
                <div className="absolute bg-[rgb(238,242,255)] rounded-xl w-[40%] h-[40%] top-[180px] left-[110px] flex text-4xl space-x-8 justify-center p-4">
                  <div className="hover:text-gray-600 hover:text-5xl">
                    <a
                      target="{_blank}"
                      href="https://exams-project-4fluaqu38-carmenbelle.vercel.app/"
                    >
                      <ion-icon name="eye-outline"></ion-icon>
                    </a>
                  </div>

                  <div className="hover:text-pink-500 hover:text-5xl">
                    <a
                      target="{_blank}"
                      href="https://github.com/Carmenbelle/Exams-project"
                    >
                      <ion-icon name="logo-github"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
              <div className="py-2 pt-16 text-3xl font-bold flex justify-center text-gray-800">
                <h3>Voting Site</h3>
              </div>
              <div className="text-lg text-gray-700 p-3 text-center ">
                <p>
                  A voting Site that implement an increment and decrement
                  counter
                </p>
              </div>

              <div className="text-center py-4 text-gray-700 text-lg">
                <p>Tools: React JS, CSS, Github</p>
              </div>

              <div className="text-center py-8 text-xl border text-gray-800 font-semibold ">
                <button>READ MORE</button>
              </div>
            </div>

            <div className="h-[80%] rounded-lg p-4 shadow">
              <div className="relative  ">
                <img src={Votingsite} alt="votingsite" className="" />
                <div className="absolute bg-[rgb(238,242,255)] rounded-xl w-[40%] h-[40%] top-[180px] left-[110px] flex text-4xl space-x-8 justify-center p-4">
                  <div className="hover:text-gray-600 hover:text-5xl">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <div className="hover:text-pink-500 hover:text-5xl">
                    <ion-icon name="logo-github"></ion-icon>
                  </div>
                </div>
              </div>
              <div className="py-2 pt-16 text-3xl font-bold flex justify-center text-gray-800">
                <h3>Voting Site</h3>
              </div>
              <div className="text-lg text-gray-700 p-3 text-center ">
                <p>
                  A voting Site that implement an increment and decrement
                  counter
                </p>
              </div>

              <div className="text-center py-4 text-gray-700 text-lg">
                <p>Tools: React JS, CSS, Github</p>
              </div>

              <div className="text-center py-8 text-xl border text-gray-800 font-semibold ">
                <button>READ MORE</button>
              </div>
            </div>

            <div className="h-[80%] rounded-lg p-4 shadow">
              <div className="relative  ">
                <img src={Votingsite} alt="votingsite" className="" />
                <div className="absolute bg-[rgb(238,242,255)] rounded-xl w-[40%] h-[40%] top-[180px] left-[110px] flex text-4xl space-x-8 justify-center p-4">
                  <div className="hover:text-gray-600 hover:text-5xl">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <div className="hover:text-pink-500 hover:text-5xl">
                    <ion-icon name="logo-github"></ion-icon>
                  </div>
                </div>
              </div>
              <div className="py-2 pt-16 text-3xl font-bold flex justify-center text-gray-800">
                <h3>Voting Site</h3>
              </div>
              <div className="text-lg text-gray-700 p-3 text-center ">
                <p>
                  A voting Site that implement an increment and decrement
                  counter
                </p>
              </div>

              <div className="text-center py-4 text-gray-700 text-lg">
                <p>Tools: React JS, CSS, Github</p>
              </div>

              <div className="text-center py-8 text-xl border text-gray-800 font-semibold ">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Portfolio;

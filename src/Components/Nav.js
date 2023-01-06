import React, { useState } from "react";

function Nav() {
  let Links = [
    { name: "Portfolio", link: "/portfolio" },
    { name: "About Me", link: "/about" },
    // { name: "Hire Me", link: "/" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 h-24 bg-[rgb(238,242,255)]">
      <div className="max-w-screen-xl m-auto h-full flex justify-between items-center">
        <div className="md:border-t border-[rgb(55,48,163)] text-3xl md:text-4xl mt-2 font-bold md:hover:scale-125 transition duration-700 ease-in-out text-[rgb(55,48,163)] cursor-pointer">
          <span className="text-3xl m-5 md:m-0 mr-1 pt-1">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <a href="/">
          Carmi
          </a>

        </div>
        <nav className="md:flex item-center justify-between">
          <div>
            <div
              onClick={() => setOpen(!open)}
              className="text-4xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>
            <ul
              className={`md:flex md:space-x-20 text-2xl md:text-xl md:pb-0 absolute bg-white pb-6 md:bg-[rgb(238,242,255)] md:static md:z-auto z-[0] w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "left-0" : "left-[-630px]"
              }  `}
            >
              {Links.map((link) => (
                <li className="text-gray-600 md:hover:text-gray-400 md:my-0 my-7 md:mt-3">
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
              <a href="/contact">
              <button className="border border-[rgb(50,43,152)] p-1 text-xl md:text-lg md:w-20 md:h-10 md:mt-2 hover:text-cyan-50 text-[rgb(50,43,152)] font-medium rounded-lg hover:bg-[rgb(50,43,152)] ">
                Hire Me
              </button>
              </a>

              {/* <li>Portfolio</li>
                    <li>About Me</li>
                    <button>Hire Me</button> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;

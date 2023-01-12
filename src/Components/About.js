import React from 'react'
import Mainjpeg from "../Img/IMG-6385.png";

function About() {
  return (
    <>
    <section className='m-5 max-w-screen-xl py-32'>
      <header>
      <div className="flex space-x-6 text-gray-700 text-5xl pl-8 py-10 font-semibold ">
            <h1>About Me</h1>
            <div className="w-32 bg-[rgb(73,66,171)] h-0 p-[0.6px] mt-7 border-1 mr-8 "></div>
      </div>
      </header>

      <div className=' p-2 '>
        <div className=' w-full justify-center align-middle relative'>
          <img src={Mainjpeg} alt="Mainjpeg" className='w-[70%] m-auto md:w-[40%] ' ></img>
        <div className='md:w-[40%] bg-[#f4d0d0] md:absolute bottom-0 md:bottom-10 md:top-32 md:right-2 rounded-lg p-10 font-mono leading-8 '>
          <p>
            I am a Frontend Developer passionate about creating compatible webpages with a good
            user experience/interface. I am focused on learning and growing in a collaborative team work.  
          </p>
          <p>
            I have always loved working with technology and over time, I have developed a wide variety 
            of skills.
          </p>
          <p>
            My biggest strength is to learn and adapt quickly to new roles and working environment.
          </p>
          <p>
            I am aiming to leveraging my experience and skills to successfully join the engineering team to create magic.
          </p>
        </div>
        
        </div>

      </div>
    </section>

    </>
  )
}

export default About
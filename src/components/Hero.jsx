import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="md:grid md:grid-cols-2 min-h-[110vh] bg-[#66666e] col-span-12">
      <img src="/profile3.jpg" className="relative md:hidden" alt="" />

      <div className="md:col-span-1 bg-[#fdfffc] flex-col flex items-start justify-center p-5 md:p-20 gap-5 ">
        <p className="md:text-5xl text-3xl font-bold">HI THERE!</p>
        <p className="md:text-6xl text-4xl font-bold">I'M Yogesh</p>
        <p className="md:text-2xl text-[15px] text-[#fdfffc] bg-[#d00000] px-4 py-1">
          Full-Stack Web Developer / Freelancer
        </p>
        <p className="text-xl">
          Bringing ideas to life through code. I specialize in building robust,
          scalable web applications from the ground up. Whether you need a
          custom website, an interactive user interface, or backend solutions
          that can handle complex workflows, I've got you covered.
        </p>

        <Link to={"/yogesh/about"}>
          <button className="md:text-2xl text-[15px] bg-[#000000] text-[#fdfffc] hover:text-[#d00000] rounded-full px-5 py-3 font-bold">
            MORE ABOUT ME
          </button>
        </Link>
      </div>
      <div className="md:col-span-1 bg-[url(/profile.png)] bg-cover hover:bg-opacity-40 hidden md:block "></div>
    </div>
  );
}

export default Hero
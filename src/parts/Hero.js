/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

import BuildWebsite from 'assets/images/Startup2.png';

export default function Hero() {
  return (
    <section className="hero">
      <Fade bottom>
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h1 className="text-5xl sm:text-5xl text-theme-blue font-bold leading-tight mb-5" style={{color:"#367588",fontSize:"40px"}}>
          WE'RE STRATEGIC <br />  WE'RE CREATIVE <br /> WE'RE SOLUTION-DRIVEN
          </h1>

          <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          Providing services in a multitude of fields to exponentiate your business
          </p>

          <Button href="/project" type="link" className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl  rounded-lg shadow-2xl  transition duration-200 box" >
           
            See Our Work
            <svg className="ml-2 w-7 h-7 text-white animate-bounce-x" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img className="" src={BuildWebsite} alt="Build Website" />
        </div>
      </Fade>
    </section>
  );
}

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import '../assets/css/styles.css'

export default function Service({ data, Title,paragraph, className }) {
  const navigate = useHistory()

  const toPage = (pagePath) => {
    navigate.push(pagePath)
  }

  return (


    <a id="services">
      <div className="bg-gray-50" id='services'>
        <div className="container mx-auto pt-20 pb-28">

          <Fade bottom>
            <h1 className={"text-5xl  text-center font-bold  color" }>{Title}</h1>

            <p className="font-light text-lg text-gray-400 text-center mb-12">{paragraph}
            </p>
          </Fade>
          <div className="responsive-portfoliomarketing grid grid-rows-3 px-20 gap-8 sm:grid-cols-2 sm:grid-rows-1 sm:gap-6 xl:gap-16" style={{textAlign:"-webkit-center"}}>
            {
              data.map((item, index) => (
                <Fade bottom delay={500 * index}>
                  <div onClick={() => toPage(item.pagePath)}>

                    <div className="responsive-portfoliomarketing-img bg-white group rounded-2xl shadow-2xl  focus:#367588 border border-light-theme-blue transform transition duration-500 hover:scale-105 responsive-portfolioMarketing" style={{width:"450px"}}>
                      <img  src={item.imageUrl} alt="Service" className="responsive-portfoliomarketing-img w-full rounded-t-2xl" style={{height:"300px",width:"600px"}}/>
                      <h2 className="text-theme-blue text-center text-xl py-7 rounded-b-2xl">{item.title}</h2>
                    </div>

                  </div>

                </Fade>
              ))
            }
          </div>
        </div>
      </div>
    </a>
  );
}

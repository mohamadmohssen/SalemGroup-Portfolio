import React from 'react';

import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';
import { useHistory } from 'react-router-dom';


export default function Blogscards({ data}) {
  const navigate = useHistory()

    const toPage = (pagePath) => {
        navigate.push(pagePath)
      }

  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
       {/* <Fade bottom>
         <h1 className="text-5xl text-theme-blue text-center font-bold">Our Selected Project</h1>

         <p className="font-light text-lg text-gray-400 text-center mb-12">
           We are ready to scale up your business with our great work result.
         </p>
       </Fade>
 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
        {
                    data.map((item, index) => (
                      <Fade bottom delay={500 * index}>
                        <div onClick={() => toPage(item.pagePath)}>
                          <div className="group rounded-2xl shadow-xl w-auto w-11/12 m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                            <div className="relative">
                              <img src={item.imageUrl} alt="Portfolio" className="rounded-t-2xl z-0" />
                              <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                                <button className="focus:outline-none">
                                  <svg className="w-20 h-20 text-gray-200" xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <div className="py-4">
                              <h2 className="text-theme-blue text-center text-xl">{item.title}</h2>
                              <p className="font-light text-gray-400 text-center">{item.type}</p>
                            </div>
                          </div>
                          </div>
                      </Fade>
                    ))
                }
      </div>

      </section>
  );
}

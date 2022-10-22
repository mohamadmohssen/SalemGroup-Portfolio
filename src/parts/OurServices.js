import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Consulting({ data }) {
  return (
    <section className="container mx-0 sm:mx-auto" style={{marginTop:10}}>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-32 sm:gap-14 lg:gap-10 mx-16 justify-items-center">
        {
                    data.map((item, index) => (
                      <Fade bottom delay={200 * index}>
                        <div>
                          <div className="flex flex-col w-44 h-60 sm:w-56 sm:h-72 rounded-xl shadow-xl border border-light-theme-blue justify-center transform transition duration-500 hover:scale-105">
                            <div className="flex justify-center xl:mb-5">
                              <img src={item.imageUrl} alt="Team Member" className="flex w-32 h-32 rounded-full" style={{borderRadius:0}}  />
                            </div>
                            <h2 className="text-theme-blue text-center text-xl">{item.name}</h2>
                            
                          </div>
                        </div>
                      </Fade>
                    ))
                }
      </div>
    </section>
  );
}
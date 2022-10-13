/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { useState } from 'react';
import NotFound from 'assets/images/NotFound.png';
import './drop.css';
import Button from 'elements/Button';

import jsonFile from  "../json/landingPage.json"
import { useParams } from 'react-router-dom';
export default function PortfolioDetail({ data }) {
  
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const navigate = useHistory()
  const toPage = (pagePath) => {
    navigate.push(pagePath)
  }
  
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button href="/Portfolio" type="link" className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
     { data.map((item) =>(
      <Fade bottom>
        
        <p onClick={() => toPage(item.pagePath)} id="GoBackBtn" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Go Back
        </p>
      </Fade>
      ))}

      {
                data.map((item) => (
                  <div className="flex flex-col mt-8 justify-center">
                    <Fade bottom>
                      <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>

                      <p className="font-light text-xl text-gray-400 text-center mb-10">
                        {item.type}
                      </p>
                    </Fade>

                    <Fade bottom delay={300 * 1}>
                      <div className="flex justify-center xl:mb-6">
                        <img src={`../${item.imageUrl}`} alt="Project" className="flex w-4/5 sm:w-4/6" style={{boxShadow:" 8px 8px 19px -6px rgba(0,0,0,0.75)"}}/>
                      </div>
                    </Fade>

                    <Fade bottom delay={300 * 1}>

                      <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
                        <h1 className="text-3xl text-theme-blue font-bold mb-3">
                         
                        </h1>
                        {
                        data.map((item) => (
                        <p className="font-light text-lg text-gray-400 text-justify">
                          {item.paragraph}
                        </p>
                        ))}
                      </div>

                      <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
                        {data.map((item) => (
                        <h1 className="text-3xl text-theme-blue font-bold mb-5">
                          {item.technologieused}
                        </h1>))}
                        <div className="flex flex-row ml-1">
                          {
                                            item.responsibility.map((responsibility) => (
                                              <div className="mr-4 px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg" style={{color:"#367588",borderColor:"#367588"}}>
                                                {responsibility}
                                              </div>
                                            ))
                                        }
                        </div>
                      </div>

                      <p className="font-light italic text-gray-400 mt-16 mx-8 sm:mx-16 xl:mx-28">
                        
                       {data.map((item)=>(
                        <p>
                          {item.originalP}
                          {' '}
                          <Button type="link" href={item.credit} target="_blank" className="text-theme-purple" isExternal  style={{color:"#367588"}}>{item.credit}</Button></p>
                       ))
                       }
                       
                       
                        
                        
                      </p>
                    </Fade>
                  </div>
                ))
            }
    </section>
  );
}

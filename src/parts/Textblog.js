import React from 'react';
import { useEffect } from 'react';
import Fade from 'react-reveal/Fade';

import NotFound from 'assets/images/NotFound.png';

import Button from 'elements/Button';

import jsonFile from  "../json/landingPage.json"
import { useParams } from 'react-router-dom';

export default function Textblog({ data }) {
  const id = useParams().id;
  const item = data[id]
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
      
      <Fade bottom>
        <Button type="link" href="/Blog" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
          <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          See All Blogs
        </Button>
      </Fade>



                  <div className="flex flex-col mt-8 justify-center">
                    <Fade bottom>
                      <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>

                      <p className="font-light text-xl text-gray-400 text-center mb-10">
                        {item.type}
                      </p>
                    </Fade>

                    <Fade bottom delay={300 * 1}>
                      <div className="flex justify-center xl:mb-6">
                        <img src={`../${item.imageUrl}`} alt="Project" className="flex w-4/2 sm:w-4/3" />
                      </div>
                    </Fade>

                    <Fade bottom delay={300 * 1}>

                      <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
                        <h1 className="text-3xl text-theme-blue font-bold mb-3">
                          {item.title1}
                          
                        </h1>
                        {                       
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                          {item.paragraph}
                        </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph1}
                      </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph2}
                      </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph3}
                      </p>
                        }
                        <h1 className="text-3xl text-theme-blue font-bold mb-3">
                          {item.title2}
                        </h1>
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle}
                        </h1>
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph4}
                      </p>
                        }
                         {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph5}
                      </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph6}
                      </p>
                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle2}
                        </h1>
                        
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph7}
                      </p>
                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle3}
                        </h1>
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph8}
                      </p>
                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle4}
                        </h1>
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph9}
                      </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph10}
                      </p>
                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle5}
                        </h1>
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph11}
                      </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph12}
                      </p>
                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle6}
                        </h1>
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph13}
                      </p>
                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle7}
                        </h1>
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph14}
                      </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph15}
                      </p>
                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                          {item.subtitle8}
                        </h1>
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph16}
                      </p>
                        }
                        {
                        <p className="font-light text-lg text-gray-400 text-justify padding-blog-p">
                        {item.paragraph17}
                      </p>


                        }
                        <h1 className="text-xl text-theme-blue font-bold mb-3">
                        References: 
                        </h1>

                        
                        
                      </div>

                      <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
                       
                        <h1 className="text-3xl text-theme-blue font-bold mb-5">
                          {item.technologieused}
                        </h1>
                        <div className="flex flex-row ml-1">
                          {
                                            item.responsibility.map((responsibility) => (
                                              <div className="mr-4 px-6 py-3 text-theme-purple border border-theme-purple rounded-full shadow-lg">
                                                {responsibility}
                                              </div>
                                            ))
                                        }
                        </div>
                      </div>

                      <p className="font-light italic text-gray-400 text-xl mt-16 mx-8 sm:mx-16 xl:mx-28">
                      Written By: 
                       {item.writter}
                       
                        
                        {' '}
                        <Button type="link" href={item.credit} target="_blank" className="text-theme-purple" isExternal>{item.credit}</Button>
                      </p>
                    </Fade>
                  </div>
                
          
    </section>
  );
}
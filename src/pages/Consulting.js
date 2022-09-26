import React, { Component } from 'react';

import "../assets/css/styles.css"
import Fade from 'react-reveal/Fade';
import Button from 'elements/Button';


import Header from 'parts/Header';
import OurServices from 'parts/OurServices';
import Footer from 'parts/Footer';

import Data from 'json/landingPage.json';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <h1 
          class="  text-4xl text-theme-blue font-bold leading-tight mb-5  "
          style={{ textAlign: "center", marginTop:"3%", paddingBottom:"3%" }}>
          Our Consulting Services
        </h1>
        <OurServices data={Data.Consulting}/>

        <Fade bottom>
     
      <section className="flex container mx-auto justify-center">
        <div className="flex flex-col w-10/12 sm:w-11/12 xl:w-10/12 rounded-2xl  text-gray-100 py-14 sm:px-12 sm:py-20 xl:px-16 shadow-2xl discuss" style={{backgroundColor:"#367588"}}>
          <div className="flex flex-col sm:flex-row mb-3 sm:mb-9 p-5 sm:p-0 sm:items-center">
            <h1 className="w-2/3 text-2xl sm:text-3xl leading-tight font-semibold">
              Have an awesome project in mind?
            </h1>
            <Button href="/discuss-project" type="link" className="flex bg-white bg-yellow-300 text-blue-800 text-l lg:text-xl xl:text-xl tracking-wider items-center justify-center w-56 lg:w-96 lg:h-24 xl:w-56 h-20 p-5 border-2  shadow-xl rounded-full mt-6 sm:mt-0 sm:ml-4 lg:ml-0 xl:ml-12 transform transition duration-600 hover:scale-105" style={{backgroundColor:"#9cb8c2", color:"white"}}>
              Contact Us
            </Button>
          </div>
          <p className="font-light p-5 sm:p-0 text-lg sm:text-l lg:text-xl xl:text-xl mb-1">Let's discuss it and bring your ideas to life!</p>
        </div>
      </section>
    </Fade>



        <Footer />
      </>
    );
  }
}

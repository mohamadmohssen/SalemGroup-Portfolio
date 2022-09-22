import React, { Component } from 'react';

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
        <Footer />
      </>
    );
  }
}

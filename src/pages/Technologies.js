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
        <OurServices data={Data.Technology}/>
        <Footer />
      </>
    );
  }
}

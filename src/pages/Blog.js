import React, { Component } from 'react';

import Header from 'parts/Header';
import HeroPortfolio from 'parts/HeroPortfolio';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import AllPortfolio from 'parts/AllPortfolio';
import Service from 'parts/Service';

import Data from '../json/landingPage.json';
import Blogscards from "../parts/Blogscards"

export default class Blog extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Blogscards data= {Data.ourblog} />
        <Footer />
      </>
    );
  }
}
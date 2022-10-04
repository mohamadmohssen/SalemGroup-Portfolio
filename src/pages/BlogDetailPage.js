import React, { Component } from 'react';

import Header from 'parts/Header';
import PortfolioDetail from 'parts/PortfolioDetail';
import Footer from 'parts/Footer';
import Textblog from 'parts/Textblog';
import Data from 'json/landingPage.json';

export default class BlogDetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    var detailData = Data.Cardsblogs
    


    
    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Header {...this.props} />
        {console.log("gggg",detailData[0])}
        <Textblog data={detailData} />
        <Footer />
      </>
    );
  }
}
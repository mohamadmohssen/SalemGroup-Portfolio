/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from 'parts/Header';
import PortfolioBranding from 'parts/PorfolioBranding';
import Footer from 'parts/Footer';

import Data from 'json/landingPage.json';

export default class ProjectDetailPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    var detailData = Data.MrktBranding.filter((item) => item.id === `${this.props.match.params.id}`)
   
   


    
    return (
      <>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Header {...this.props} />
        <PortfolioBranding data={detailData.length === 1 ? [detailData[0]] : null} />
        <Footer />  
      </>
    );
  }
}

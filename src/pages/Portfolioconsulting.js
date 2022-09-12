import React, { Component } from 'react';
import Header from 'parts/Header';
import Footer from 'parts/Footer';
import Service from 'parts/Service';
import Data from 'json/landingPage.json';

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Service data={Data.portfolioconsulting}/>
        <Footer />
      </>
    );
  }
}

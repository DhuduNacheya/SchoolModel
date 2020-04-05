import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Header from './../Stars/Header' 
import HomeContent from './../Stars/HomeContent'


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {/* <Header position="top"></Header> */}
        <HomeContent></HomeContent>
        {/* <Header position="bottom"></Header> */}
        </React.Fragment>
        )
        ;
      }
}

export default App;

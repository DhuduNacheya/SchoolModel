import React, { Component } from 'react';
import './App.css';
import Header from './../Stars/Header' 
import addOperation from "./../action";
import { connect } from "react-redux";
import HomeContent from './../Stars/HomeContent'

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => {
  return {
    onAdd: thins => {
      dispatch(addOperation(thins));
    }
  };
};


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
       <React.Fragment>
        <Header position="top"></Header> 
        <HomeContent></HomeContent>
        <Header position="bottom"></Header> 
        </React.Fragment>
     
        )
        ;
      }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

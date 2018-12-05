import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar/Navbar';

const mapStateToProps = state => {
  return {  };
}

class ConnectedHomePage extends Component{
  constructor(){
    super();
    this.state={};
  }



  render(){
    return(
      <div>
        <Navbar/>

      </div>
    )
  }
}

const HomePage = connect(mapStateToProps)(ConnectedHomePage);

export default HomePage;

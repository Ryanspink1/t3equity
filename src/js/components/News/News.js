import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, Link, withRouter} from 'react-router-dom';
import Axios from 'axios'
let XMLParser = require('react-xml-parser');


const mapStateToProps = state => {
  return {  };
}
class ConnectedNews extends Component{
  constructor(){
    super();
    this.state={
      stories:[]
    };
  }

  componentWillMount(){
    Axios.get("https://peaceful-beach-96299.herokuapp.com/https://finance.yahoo.com/rss/topstories")
      .then(response => {
        let self = this;
        let xml = new XMLParser().parseFromString(response.data);
        let stories = xml.children[0].children.slice(8,57)

        this.setState({stories: stories})
      })
  }


  render(){
    let stories = this.state
    let storyList
    debugger;
    if(stories.stories.length >=1){
    storyList = stories.stories.map((story, index) => (

      <Grid.Column key={index}>
        <p>
        { story.children[0].value }
        </p>
      </Grid.Column>
    ))
    }
    return(
      <div>
      {storyList}
      </div>
    )
  }
}

const News = connect()(ConnectedNews);

export default News;

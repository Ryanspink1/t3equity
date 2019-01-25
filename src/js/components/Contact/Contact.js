import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';
import { FullNav } from "../Navbar/FullNav.js";



const mapStateToProps = state => {
  return {  };
}
class ConnectedContact extends Component{
  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
        <Grid.Row centered id='contact-row'>
          <Grid.Column  width={10} centered id='contact-row-column'>
          <div id='contact-row-column-text'>
            <p id='contact-text-p'>
              <span id='contact-name'>Michael C. Jackson</span>
              <br/>
              <br/>
              <span id='contact-title'>- Owner, Financial Analyst -</span>
              <br/>
              <br/>
              5 Columbine Ln
              <br/>
              Littleton, Colorado
              <br/>
              80123
              <br/>
              <br/>
              Phone: (303) 641-3127
              <br/>
              Email: mcjacks@hotmail.com
            </p>

          </div>
          </Grid.Column>
        </Grid.Row>
    )
  }
}

const Contact = connect()(ConnectedContact);

export default Contact;

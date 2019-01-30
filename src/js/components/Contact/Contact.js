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
          <Grid.Column only='computer' width={10} centered id='contact-row-column'>
            <div className='contact-row-column-text'>
              <p id='contact-text-p'>
                <span className='contact-name'>Michael C. Jackson</span>
                <br/>
                <br/>
                <span className='contact-title'>- Owner; Financial Advisor -</span>
                <br/>
                <br/>
                5 Columbine Ln
                <br/>
                Littleton, Colorado
                <br/>
                80123
                <br/>
                <br/>
                Phone: (303) 478-8630
                <br/>
                Email: mike@t3equity.com
              </p>

            </div>
          </Grid.Column>
          <Grid.Column only='tablet'  width={14} centered id='contact-row-column'>
            <div className='contact-row-column-text mob'>
              <p id='contact-text-p'>
                <span className='contact-name mob'>Michael C. Jackson</span>
                <br/>
                <br/>
                <span className='contact-title mob'>- Owner; Financial Advisor -</span>
                <br/>
                <br/>
                5 Columbine Ln
                <br/>
                Littleton, Colorado
                <br/>
                80123
                <br/>
                <br/>
                Phone: (303) 478-8630
                <br/>
                Email: mike@t3equity.com
              </p>

            </div>
          </Grid.Column>
          <Grid.Column  only='mobile' width={14} centered id='contact-row-column'>
            <div className='contact-row-column-text mob'>
              <p id='contact-text-p'>
                <span className='contact-name mob'>Michael C. Jackson</span>
                <br/>
                <br/>
                <span className='contact-title mob'>- Owner; Financial Advisor -</span>
                <br/>
                <br/>
                5 Columbine Ln
                <br/>
                Littleton, Colorado
                <br/>
                80123
                <br/>
                <br/>
                Phone: (303) 478-8630
                <br/>
                Email: mike@t3equity.com
              </p>

            </div>
          </Grid.Column>
        </Grid.Row>
    )
  }
}

const Contact = connect()(ConnectedContact);

export default Contact;

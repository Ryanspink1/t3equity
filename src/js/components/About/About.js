import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';
import { FullNav } from "../Navbar/FullNav.js";
import HomeRowThree from "../Home/HomeRowThree"



const mapStateToProps = state => {
  return {  };
}
class ConnectedAbout extends Component{
  constructor(){
    super();
    this.state={

    };
  }

  render(){
    return(
      <>
        <Grid.Row only='computer' centered className='about-row'>
          <Grid.Column  width={12} centered className='about-row-column'>
            <div className='about-text'>
            <p>
                t<span style={{color:'red'}}>3</span>equity labs, llc is an innovative equity portfolio research and management firm.  t<span style={{color:'red'}}>3</span> combines 21 years of stock  market
                experience, traditional fundamental economic principles and a strong foundation of academic finance together to produce
                a scientifically advanced stock portfolio engine that is designed to manage the downside risk inherent in the stock market.
            </p>
            <p>
                This is done through a proprietary combination of Behavioral Economics, quantitative, fundamental and technical factors into
                one Quantimental trigger which is controlled and managed through a strict set of rules.
            </p>
            <p>
                The goal is to direct investors
                into Sectors of the market predicted to benefit from future earnings surprises while avoiding Sectors that will suffer primarily
                due to negative earnings surprises.
            </p>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='tablet' centered className='about-row tab'>
          <Grid.Column  width={14} centered className='about-row-column tab'>
            <div className='about-text'>
            <p>
                t<span style={{color:'red'}}>3</span>equity labs, llc is an innovative equity portfolio research and management firm.  t<span style={{color:'red'}}>3</span> combines 21 years of stock  market
                experience, traditional fundamental economic principles and a strong foundation of academic finance together to produce
                a scientifically advanced stock portfolio engine that is designed to manage the downside risk inherent in the stock market.
            </p>
            <p>
                This is done through a proprietary combination of Behavioral Economics, quantitative, fundamental and technical factors into
                one Quantimental trigger which is controlled and managed through a strict set of rules.
            </p>
            <p>
                The goal is to direct investors
                into Sectors of the market predicted to benefit from future earnings surprises while avoiding Sectors that will suffer primarily
                due to negative earnings surprises.
            </p>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='mobile' centered className='about-row mob'>
          <Grid.Column  width={14} centered className='about-row-column mob'>
            <div className='about-text mob'>
            <p>
                t<span style={{color:'red'}}>3</span>equity labs, llc is an innovative equity portfolio research and management firm.  t<span style={{color:'red'}}>3</span> combines 21 years of stock  market
                experience, traditional fundamental economic principles and a strong foundation of academic finance together to produce
                a scientifically advanced stock portfolio engine that is designed to manage the downside risk inherent in the stock market.
            </p>
            <p>
                This is done through a proprietary combination of Behavioral Economics, quantitative, fundamental and technical factors into
                one Quantimental trigger which is controlled and managed through a strict set of rules.
            </p>
            <p>
                The goal is to direct investors
                into Sectors of the market predicted to benefit from future earnings surprises while avoiding Sectors that will suffer primarily
                due to negative earnings surprises.
            </p>
            </div>
          </Grid.Column>
        </Grid.Row>
        <HomeRowThree/>
      </>
    )
  }
}

const About = connect()(ConnectedAbout);

export default About;

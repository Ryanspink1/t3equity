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
    const aboutText =
    <div>
      <p>
          t<span style={{color:'red'}}><sup>3</sup></span>'s investment process beings with qualitative and quantitative research accumulated from
          various sources including tradition wire-house research. The process utilizes a building block approach to model development.
          The process relies on a multi-factor algorithm that starts with a proprietary foundation factor that is then over-laid with
          traditional qualitative and quantitative factors (value and growth) confirming with technical overlays.
      </p>
      <p>
          t<span style={{color:'red'}}><sup>3</sup></span> offers various portfolios that are uniquely designed to meet different client objectives.
           All models are built off of the same platform. The particular universe for each portfolio varies according to the risk objectives of each individual client.
            Currently t3 offers the following portfolios:
      </p>
      <ul>
        <li style={{listStyleType:'none'}}>
          <p style={{textIndent:'0'}}>
            <span style={{color:'red', fontWeight:'bold' , borderBottom:'1px solid red'}}>Large Cap Core:</span><br/>
            Selections are chosen from the S&P 500 Universe.
            <br/>
            (long individual securities, short individual securities, dollar neutral, long-bias, sectors, and enhanced index)
          </p>
        </li>
        <br/>
        <li style={{listStyleType:'none'}}>
          <p style={{textIndent:'0'}}>
            <span style={{color:'red' ,fontWeight:'bold' , borderBottom:'1px solid red'}}>All-Cap Core:</span><br/>
            Selections are chosen from the Russel 3000 Universe.
            <br/>
            (long individual securities, short individual securities, dollar neutral, long-bias, sectors, and enhanced index)
          </p>
        </li>
        <br/>
        <li style={{listStyleType:'none'}}>
          <p style={{textIndent:'0'}}>
            <span style={{color:'red', fontWeight:'bold', borderBottom:'1px solid red'}}>Small-Cap Core:</span><br/>
            Selections are chosen from the Russel 2000 Universe.
            <br/>
            (long individual securities, and enhanced index)
          </p>
        </li>
        <br/>
      </ul>
      <p>
        t<span style={{color:'red'}}><sup>3</sup></span> may also blend various portfolios from the above categories (and within the above categories) into one portfolio
        in order to uniquely match the risk characteristics of a particular investor.
      </p>
      <p>
        All portfolios are composed of concentrated sector and stock selections. All stocks are evenly weighed at the time of construction and are re-balanced quarterly. All stocks are evaluated according to solid academic and scientific principles. All stocks are evaluated vs. various quantitative factors including, but not limited to: Earnings Expectations, Quality Ratings, Analysts Intermediate Buy Ratings, Stability of Dividend, Dividend Value, P/E ratio, Beta, along with a short and intermediate term technical factor in order to arrive at a final list.
      </p>
      <p>
        Any Initial Public Offering stocks will be distributed only to NASD eligible accounts.
      </p>
    </div>

    return(
      <>
        <Grid.Row only='computer' centered className='about-row'>
          <Grid.Column  width={12} centered className='about-row-column'>
            <div className='about-text'>
              { aboutText }
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='tablet' centered className='about-row tab'>
          <Grid.Column  width={14} centered className='about-row-column tab'>
            <div className='about-text'>
              { aboutText }
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row only='mobile' centered className='about-row mob'>
          <Grid.Column  width={14} centered className='about-row-column mob'>
            <div className='about-text mob'>
             { aboutText}
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

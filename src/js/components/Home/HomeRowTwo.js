import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image, Card, Icon} from "semantic-ui-react";
import { Redirect, NavLink, withRouter} from 'react-router-dom';


const mapStateToProps = state => {
  return {  };
}
class ConnectedHomeRowTwo extends Component{
  constructor(){
    super();
    this.state={
    };
  }

  render(){
    return(
      <>
        <Grid.Row columns={3}centered id='home-row-two'>
          <Grid.Column className='home-row-two-col first' >
            <Card className='home-row-two-card'>
              <Image className='home-row-two-card-pic' src='https://s3-us-west-1.amazonaws.com/t3equity/Home+Row+2/black-and-white-3410940_960_720.jpg' />
              <Card.Content>
                <Card.Header className='home-row-two-card-header' textAlign={'center'}>Technical Advantage</Card.Header>
                <Card.Description>
                  Combining behavioral economics, quantitative, fundamental and technical factors into
                  one <strong>Quantimental Trigger</strong>.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className='home-row-two-col second' >
            <Card className='home-row-two-card'>
              <Image className='home-row-two-card-pic' src='https://s3-us-west-1.amazonaws.com/t3equity/Home+Row+2/business-agreement-in-black-and-white_1098-19.jpg' />
              <Card.Content>
                <Card.Header className='home-row-two-card-header' textAlign={'center'}>Experience</Card.Header>
                <Card.Description>
                  <strong>29 years</strong> of stock market experience, traditional fundamental economic
                  principles and a strong foundation of academic finance.
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column className='home-row-two-col third' >
            <Card className='home-row-two-card'>
              <Image className='home-row-two-card-pic' src='https://s3-us-west-1.amazonaws.com/t3equity/Home+Row+2/black-and-white-browsing-business-265152.jpg' />
              <Card.Content>
                <Card.Header className='home-row-two-card-header' textAlign={'center'}>Goals</Card.Header>
                <Card.Description>
                  Directing investors
                  into sectors of the market predicted to <strong>benefit from future earnings surprises</strong> while avoiding those that will suffer primarily
                  due to negative earnings surprises
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
        </>
    )
  }
}

const HomeRowTwo = connect()(ConnectedHomeRowTwo);

export default HomeRowTwo;

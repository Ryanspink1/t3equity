import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button} from "semantic-ui-react";

const mapStateToProps = state => {
  return {  };
}
class ConnectedRootPage extends Component{
  constructor(){
    super();
    this.state={};
  }

  render(){
    return(
      <Grid.Row id='root'>
        <Grid.Column width={16}>
          <div >
            hello
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const RootPage = connect()(ConnectedRootPage);

export default RootPage;

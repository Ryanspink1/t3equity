import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';

const mapStateToProps = state => {
  return { loggedIn: state.loggedIn };
};

class ConnectedAdminCreateNewsletter extends Component{
  constructor(){
    super();
    this.state={

    }
  }

  render(){

    return(
      <>
        <div style={{color:'white'}}>
          Create
        </div>
      </>
    )
  }
}

const AdminCreateNewsletter = connect(mapStateToProps)(ConnectedAdminCreateNewsletter)
export default AdminCreateNewsletter

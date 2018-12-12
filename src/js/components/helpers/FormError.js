import React, { Component } from "react";
import { connect } from "react-redux";
import { clearFormError } from "../../actions/index";

const mapStateToProps = state => {
  return { formError: state.formError }
}

const mapDispatchToProps = dispatch => {
  return {
    clearFormError: formError => dispatch(clearFormError(formError)),
  };
};

class ConnectedFormError extends Component {
  constructor(){
    super();
    this.state={};
  }

  componentWillReceiveProps(){
    let clearError = () =>{
      if(this.props.formError !== null){
        this.props.clearFormError('');
      }
    }
    setTimeout(clearError, 4000);
  }

  render(){
    let errorMessage
    let errorStyle

    const errors = [
        [ 'blank',                'Input(s) may not be blank.',          'red' ],
        [ 'login',                'Invalid Login Credentials',           'red' ],
        [ 'signUp',               'Incorrect format or username taken.', 'red' ],
        [ 'noUserExists',         'Could not find User',                 'red' ],
        [ 'friendRequestSuccess', 'Friend Request Sent!',                'green' ],
        [ 'friendRequestFailure', 'User does not exist!',                'red' ],
      ]

    for(const error of errors){
      if(error[0] === this.props.formError){
        errorMessage = error[1]
        errorStyle = {
          color: error[2]
        }
      }
    }

    let error = (this.props.formError !== null)
      ? <p style={ errorStyle }>{ errorMessage }</p>
      : <span/>

    return(
      <div id='form-errors'>{ error }</div>
    )
  }
};

const FormError = connect(mapStateToProps, mapDispatchToProps)(ConnectedFormError);

export default FormError;

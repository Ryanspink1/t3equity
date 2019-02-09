import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link} from 'react-router-dom';
import { AxiosRequest } from '../helpers/axios';
import { RequestError } from '../helpers/errorHandling';
import { addNewsletters } from '../../actions/index';
import { Form, Button } from 'semantic-ui-react';
import FormError from '../helpers/FormError';

const mapDispatchToProps = dispatch => {
  return {
    addNewsletters: newsletters => dispatch(addNewsletters(newsletters)),
  };
};

const mapStateToProps = state => {
  return { loggedIn:    state.loggedIn,
           jwt:         state.userData.jwt,
           id:          state.userData.id,
         };
};


class ConnectedAdminCreateNewsletter extends Component{
  constructor(){
    super();
    this.state={
      fileName:""
    }
    this.createNewsletter = this.createNewsletter.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){

  }

  handleChange(event){
    this.setState({ [event.target.id]: event.target.value});
  }

  createNewsletter(event){
    let fd = new FormData();
    fd.append('file', event.target.form[1].files[0], this.state.fileName)
    this.postNewsletter(fd);
  }

  postNewsletter(fd){
    const requestParams = {
      method:  'post',
      url:     `http://localhost:3001/api/v1/users/${this.props.id}/newsletters`,
      headers: {'Authorization' :'Bearer ' + this.props.jwt},
      data:    fd
    }
    AxiosRequest(
      requestParams
    ).then(
      response => {
        let newsletter = response.data
        let newNewsletter = [[newsletter.id, newsletter.name, newsletter.location]]
        this.props.addNewsletters(newNewsletter)
        this.resetForms()
      }
    ).catch((error) => {
      RequestError(error)
    });
  }


    resetForms(){
      document.getElementById("fileName").value = ""
      document.getElementById("fileInput").value = ""
    }


  render(){

    return(
      <>
        <div className='admin-newsletter-view'>
          <FormError/>
          <Form className="login-form" encType="multipart/form-data" ref={(el) => this.newsletterForm = el}>
            <Form.Input onChange={ this.handleChange } id="fileName" placeholder='File Name' width={14} ></Form.Input>
            <Form.Input id="fileInput" type='file' ref={ref => this.fileInput = ref} accept='.pdf' width={16}></Form.Input>
            <Form.Field control={ Button } onClick={ this.createNewsletter.bind(this) } id='create-newsletter-button' size='small' >Login</Form.Field>
          </Form>
        </div>
      </>
    )
  }
}

const AdminCreateNewsletter = connect(mapStateToProps, mapDispatchToProps)(ConnectedAdminCreateNewsletter)
export default AdminCreateNewsletter

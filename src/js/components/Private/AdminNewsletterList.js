import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link} from 'react-router-dom';
import { AxiosRequest } from '../helpers/axios';
import { RequestError } from '../helpers/errorHandling';
import { addNewsletters } from '../../actions/index';
import { List, Icon} from 'semantic-ui-react';


const mapDispatchToProps = dispatch => {
  return {
    addNewsletters: newsletters => dispatch(addNewsletters(newsletters)),
  };
};

const mapStateToProps = state => {
  return { loggedIn:    state.loggedIn,
           email:       state.userData.email,
           jwt:         state.userData.jwt,
           id:          state.userData.id,
           newsletters: state.newsletters,
         };
};


class ConnectedAdminNewsletterList extends Component{
  constructor(){
    super();
    this.state={

    }
    this.handleDelete=this.handleDelete.bind(this);
  }

  componentDidMount(){
    if(this.props.newsletters.length === 0){
      this.retrieveNewsletters()
    }
  }

  handleDelete(newsletter_id){
    const requestParams = {
      method:  'DELETE',
      url:     `http://localhost:3001/api/v1/users/${this.props.id}/newsletters/${newsletter_id}`,
      headers: {'Authorization' :'Bearer ' + this.props.jwt},
      data:    null
    }
    debugger;

    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const newsletters = response.data
        let newNewsletter
        newsletters.forEach((newsletter)=>{
          newNewsletter = [[newsletter.id, newsletter.name, newsletter.location]]
          this.props.addNewsletters(newNewsletter)
        })
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  retrieveNewsletters(){
    const requestParams = {
      method:  'get',
      url:     `http://localhost:3001/api/v1/users/${this.props.id}/newsletters/`,
      headers: {'Authorization' :'Bearer ' + this.props.jwt},
      data:    null
    }
    AxiosRequest(
      requestParams
    )
    .then(
      response => {
        const newsletters = response.data
        let newNewsletter
        newsletters.forEach((newsletter)=>{
          newNewsletter = [[newsletter.id, newsletter.name, newsletter.location]]
          this.props.addNewsletters(newNewsletter)
        })
      }
    ).catch((error) => {
      RequestError(error)
    });
  }

  render(){
    let newsletters = this.props.newsletters
    let newsletterList = newsletters.map((newsletter, index)=>(
      <List.Item className='newsletter-list-item'>
        <List.Icon
          size={'large'}
          className='newsletter-list-item-icon'
          verticalAlign={'middle'}
          name='delete'
          onClick={(e)=>this.handleDelete(newsletter[0][0])}
        />
        <List.Content className='newsletter-list-item-content'>
          <List.Header >
            <span className='newsletter-list-item-header'>{ newsletter[0][1] }</span>
          </List.Header>
          <List.Description>
          <a className='newsletter-list-item-link' key={index} href={newsletter[0][2]}>{ newsletter[0][2] }</a>
          </List.Description>
        </List.Content>
      </List.Item>
    ))
    return(
      <>
        <div className='admin-newsletter-view'>
          <List className='admin-newsletter-list'>
            { newsletterList }
          </List>
        </div>
      </>
    )
  }
}

const AdminNewsletterList = connect(mapStateToProps, mapDispatchToProps)(ConnectedAdminNewsletterList)
export default AdminNewsletterList

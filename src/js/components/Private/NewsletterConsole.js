import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect} from 'react-router-dom';
import { Grid, Menu } from 'semantic-ui-react';
import { changeAdminView } from '../../actions/index'
import AdminNewsletterList from './AdminNewsletterList';
import AdminCreateNewsletter from './AdminCreateNewsletter';

const mapDispatchToProps = dispatch => {
  return {
    changeAdminView: adminView => dispatch(changeAdminView(adminView)),
  };
};

const mapStateToProps = state => {
  return { adminView: state.adminView };
};

class ConnectedNewsletterConsole extends Component{
  constructor(){
    super();
    this.state={
      activeItem: 'newsletters'
    };
    this.handleItemClick = this.handleItemClick.bind(this);

  }

  componentDidMount(){
    if(window.location.pathname !== "/Private"){
      window.location.pathname = "/Private"
    }
  }

  handleItemClick(e, { name }){
    this.setState({ activeItem: name })
    this.props.changeAdminView(name)
  }



  render(){
    const { activeItem } = this.state
    let viewOrCreate = (this.props.adminView === 'newsletters')
      ? <AdminNewsletterList/>
      : <AdminCreateNewsletter/>


    return(
      <>
        <Grid.Row columns={1} centered>
          <Grid.Column width={8}>
            <div style={{backgroundColor:'white'}}>
              <Menu pointing secondary>
                <Menu.Item
                  name='newsletters'
                  active={activeItem === 'newsletters'}
                  onClick={this.handleItemClick}
                />
                <Menu.Item
                  name='create'
                  active={activeItem === 'create'}
                  onClick={this.handleItemClick}
                />
                <Menu.Menu position='right'>
                  <Menu.Item
                    name='logout'
                    active={activeItem === 'logout'}
                    onClick={this.handleItemClick}
                />
                </Menu.Menu>
              </Menu>
            </div>
            { viewOrCreate }
          </Grid.Column>
        </Grid.Row>
      </>
    )
  }
}

const NewsletterConsole = connect(mapStateToProps, mapDispatchToProps)(ConnectedNewsletterConsole)

export default NewsletterConsole

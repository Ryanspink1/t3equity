import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Grid, Button, Sticky, Image} from "semantic-ui-react";
import { Link} from 'react-router-dom';
import { changeActive } from "../../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    changeActive: activeItem => dispatch(changeActive(activeItem))
  };
};

const mapStateToProps = state => {
  return { activeItem: state.activeItem };
}


class ConnectedFullScreenMenu extends Component{
  constructor(){
    super();
    this.state={
    };
  }

  componentDidMount(){
    let path = window.location.pathname
    let activePath = path.substr(1);
    this.props.changeActive(activePath)
  }

  handleClick(e, page){
    this.props.changeActive(page)
  }

  render(){
    debugger;
    let active = this.props.activeItem
    let pages = ['Home', 'About', 'News', 'Newsletter', 'Contact']
    let menu = pages.map((page, index) =>(
     <span
        key={ index }
        className='nav-menu-item'
      >
        <Link
          to={{
            pathname: `/${page}`,
          }}
          style={ (page === active)
            ? { color: 'black'}
            : { color: 'white'}
           }
          onClick = { (e)=>this.handleClick(e, page)}
        >
          { page }
        </Link>
      </span>
    ))
    return(
      <Grid.Row centered id='full-screen-menu'>
        <Grid.Column width={16} verticalAlign={'middle'} text-align='center'>
          <div id='nav-menu'>
            { menu }
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const FullScreenMenu = connect( mapStateToProps, mapDispatchToProps)(ConnectedFullScreenMenu);

export default FullScreenMenu;

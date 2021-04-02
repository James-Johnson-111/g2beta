import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Navbar.css';
import * as actionsTypes from '../../store/actions';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageDropdown: false
    }
  }


  openImageDropdown = () => {
    if(!this.state.imageDropdown) {
      this.setState({imageDropdown: true});
    }else {
      this.setState({imageDropdown: false});
    }
  }

  userLogout = () => {
    sessionStorage.removeItem('user_email');
    sessionStorage.removeItem('usrid');
    this.props.onUserLogout();
    this.props.onUserNotBecomeMentor();
  }

    render() {
      let dropdown = null;
      if(this.state.imageDropdown) {
        dropdown = <>
                      <div className="imgDropdown px-3 py-2 text-left" style={{ 'position' : 'absolute', 'backgroundColor' : '#000', 'zIndex' : '100', 'left' : '20%' }}>
                        <Link href="##" className="d-block text-white">Profile</Link>
                        <Link href="##" className="d-block text-white">Settings</Link>
                        <Link href="##" className="d-block text-white">Dashboard</Link>
                        <Link href="/" className="d-block text-white" onClick={this.userLogout}>Logout</Link>
                      </div>
                   </>
      }
        return(
            <>
              {this.props.auth ? 
              <>
              <nav className="navbar navbar-expand-lg navbar-light m-0 p-0">
                <div className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink 
                        activeClassName="active" 
                        to="/dashboard"
                        isActive={(match, location) => {
                          let pathStrings = location.pathname.split('/');
                            if (match) {
                              return true;
                            }}}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        activeClassName="active" 
                        to="/mymentor"
                        isActive={(match, location) => {
                          let pathStrings = location.pathname.split('/');
                            if (match) {
                              return true;
                            }}}
                      >
                        My Mentors
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        activeClassName="active" 
                        to="/mymentees"
                        isActive={(match, location) => {
                          let pathStrings = location.pathname.split('/');
                            if (match) {
                              return true;
                            }}}
                      >
                        My Mentees
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        activeClassName="active" 
                        to="/myconnections"
                        isActive={(match, location) => {
                          let pathStrings = location.pathname.split('/');
                            if (match) {
                              return true;
                            }}}
                      >
                        My Connections
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        activeClassName="active" 
                        to="/myinvitaions"
                        isActive={(match, location) => {
                          let pathStrings = location.pathname.split('/');
                            if (match) {
                              return true;
                            }}}
                      >
                        My Invitations
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink 
                        activeClassName="active" 
                        to="/mymessages"
                        isActive={(match, location) => {
                          let pathStrings = location.pathname.split('/');
                            if (match) {
                              return true;
                            }}}
                      >
                        My Messages
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div className="text-right px-3" onClick={this.openImageDropdown} style={{ 'cursor' : 'pointer', 'position' : 'relative' }}>
                          <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-25 rounded-circle" />
                          {dropdown}
                        </div>
                    </li>
                  </ul>
                </nav>
              </> 
              : 
              <> 
              <nav className="navbar navbar-expand-lg navbar-light m-0 p-0">
                <div className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <NavLink activeClassName="active" to="/becomementor">Become a Mentor</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="active" to="/mymentor">Search Mentors</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="active" to="/getmentored">Get Mentored</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="active" to="/about">About Us</NavLink>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <NavLink activeClassName="active" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="btn btn-primary px-4" to="/signin">Get Started</NavLink>
                    </li>
                  </ul>
                </div>
                </nav>
              </>}
            </>
        )
    }

};

const mapStateToProps = state => {
  return {
      auth: state.authenticate
  };
}

const mapDispatchToProps = dispatch => {
  return {
      onUserLogin: () => dispatch({type: actionsTypes.USER_LOGIN}),
      onUserLogout: () => dispatch({type: actionsTypes.USER_LOGOUT}),
      onUserBecomeMentor: () => dispatch({type: actionsTypes.BECOME_MENTOR_TRUE}),
      onUserNotBecomeMentor: () => dispatch({type: actionsTypes.BECOME_MENTOR_FALSE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
// export default Navbar;
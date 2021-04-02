import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import * as actionsTypes from './store/actions';
import axios from './axios-order';

import TopBar from './components/Topbar/TopBar';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import Welcome from './components/Welcome/Welcome';
import Login from './components/Login/Login';
import Profilebtns from './components/ImportProfile-Option/ProfileBtns';
import Dashboard from './components/Dashboard/Dashboard';
import SigninForm from './components/SigninForm/SigninForm';
import ProfileSetup from './components/ProfileSetup/ProfileSetup';
import DashboardItems from './components/Dashboard/DashboardCards/DashboardCards';

import { Redirect, Route, Switch } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    if(sessionStorage.getItem('user_email')) {
      this.props.onUserLogin();
      axios.get('/allusers')
             .then((response) => {
                 console.log(response.data[0].user_site_name);
                 for(let key in response.data) {
                     if(sessionStorage.getItem('user_email') == response.data[key].user_email)
                            {
                               sessionStorage.setItem('user_email', sessionStorage.getItem('user_email'));
                               axios.get('/allusersocial')
                                .then((responses) => {
                                  for(let keys in responses.data) {
                                      if(responses.data[keys].user_id == response.data[key].user_id)
                                              {
                                                this.props.onUserDetails(
                                                  response.data[key].user_id, 
                                                  response.data[key].user_site_name, 
                                                  response.data[key].user_first_name, 
                                                  response.data[key].user_last_name, 
                                                  response.data[key].user_city, 
                                                  response.data[key].user_state, 
                                                  response.data[key].user_country, 
                                                  response.data[key].user_gender, 
                                                  response.data[key].user_date_of_birth, 
                                                  response.data[key].user_email, 
                                                  responses.data[keys].facebook, 
                                                  responses.data[keys].twitter, 
                                                  responses.data[keys].linkedin, 
                                                  responses.data[keys].pinterest, 
                                                  responses.data[keys].google, 
                                                  responses.data[keys].instagram, 
                                                  responses.data[keys].url
                                                  );
                                              }
                                  }
                              }).catch(error => {
                                  console.log(error);
                              })
                            }
                 }
             }).catch(error => {
                 console.log(error);
             })
    };
  }

  render() {
  return (
    <>
      <TopBar />
      <Slider>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/getmentored" component={Login} />
          <Route path="/becomementor" component={ this.props.auth ? Dashboard : Login } />
          <Route path="/login" component={Login} />
          <Route exact path="/profileoptions" component={Profilebtns} />
          <Route exact path="/signin" component={SigninForm} />
          <Route exact path="/profilesetup" component={ this.props.auth ? ProfileSetup : Login} />
          <Route exact path="/step2/:id" component={ this.props.auth ? ProfileSetup : Login} />
          <Route exact path="/profilesettings" component={ this.props.auth ? ProfileSetup : Login} />
          
          {/* For Dashboard */}
          <Route exact path="/dashboard" component={ this.props.auth ? Dashboard : Login } />
          <Route exact path="/mymentor" component={ this.props.auth ? Dashboard : Login } />
          <Route exact path="/mymentor/search" component={ this.props.auth ? Dashboard : Login } />
          <Route exact path="/mymentor/searchmentorresult" component={ this.props.auth ? Dashboard : Login } />
          <Route exact path="/mymentor/requestmentor" component={ this.props.auth ? Dashboard : Login } />
          <Route exact path="/mymentor/communicatewithmentor" component={ this.props.auth ? Dashboard : Login } />

          {/* For My Messages Link */}
          <Route exact path="/mymessages" component={ this.props.auth ? Dashboard : Login } />
          <Route exact path="/personinbox" component={ this.props.auth ? Dashboard : Login } />

          {/* For My Invitaions Link */}
          <Route exact path="/myinvitaions" component={ this.props.auth ? Dashboard : Login } />
          
          {/* For My Connections Link */}
          <Route exact path="/myconnections" component={ this.props.auth ? Dashboard : Login } />
            
          {/* For My Mentees Link */}
          <Route exact path="/mymentees" component={ this.props.auth ? Dashboard : Login } />
        </Switch>
      </Slider>
      <Route exact path="/dashboard" component={ this.props.auth ? DashboardItems : null } />
      <Footer />
    </>
  );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.authenticate
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onUserLogin: () => dispatch({type: actionsTypes.USER_LOGIN}),
      onUserLogout: () => dispatch({type: actionsTypes.USER_LOGOUT}),
      onUserDetails: (id, 
                        name, 
                        fname, 
                        lname, 
                        city, 
                        state, 
                        country, 
                        gender, 
                        birth, 
                        email, 
                        facebook, 
                        twitter, 
                        linkedin, 
                        pinterest, 
                        google, 
                        instagram, 
                        url
                        ) => dispatch(
            {
                type: actionsTypes.USER_DETAILS, 
                usrid: id, 
                usrname: name, 
                usrfname: fname, 
                usrlname: lname, 
                usrcity: city, 
                usrstate: state, 
                usrcountry: country, 
                usrgender: gender, 
                usrdbirth: birth, 
                usremail: email,
                facebook: facebook,
                twitter: twitter,
                linkedin: linkedin,
                pinterest: pinterest,
                google: google,
                instagram: instagram,
                url: url,
            })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

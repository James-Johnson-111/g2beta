import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Login.css';
import axios from '../../axios-order';
import * as actionsTypes from '../../store/actions';
import * as passwordHash from 'password-hash';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            User: {
                usremail: null,
                usrpass: null
            }
        }
    }

    onInputChangeHandler  = (event) => {
        const { name, value } = event.target;
        const values = {
            ...this.state.User,
            [name] : value
        };
        this.setState({User: values});
    }

    onUserLogin = (event) => {
        event.preventDefault();
        axios.get('/allusers')
             .then((response) => {
                 console.log(response.data[0].user_site_name);
                 for(let key in response.data) {
                     if(
                            (this.state.User.usremail == response.data[key].user_email) && 
                            (passwordHash.verify(this.state.User.usrpass, response.data[key].user_password)))
                            {
                               sessionStorage.setItem('user_email', this.state.User.usremail);
                               sessionStorage.setItem('usrid', response.data[key].user_id);
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
                                        this.props.history.replace('/dashboard');
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
    }

    render() {
        return(
            <form onSubmit={this.onUserLogin}>
                <div className="loginForm text-white text-center" style={{ 'marginTop' : '50px' }}>
                <h3>Login</h3>
                <hr className="bg-white" />
                <div className="px-5">
                <div className="px-5">
                    <input 
                        type="email" 
                        className="form-control form-control-sm mb-3" 
                        placeholder="Email" 
                        onChange={this.onInputChangeHandler} 
                        name="usremail"
                        />
                    <input 
                        type="password" 
                        className="form-control form-control-sm mb-3" 
                        placeholder="Password" 
                        onChange={this.onInputChangeHandler} 
                        name="usrpass"
                        />
                </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <button className="btn btn-sm px-4 mr-3 text-white" style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}>
                        <i className="lab la-facebook-f"></i> Login with Facebook
                    </button>
                    <button className="btn btn-sm px-4 ml-3 text-white" style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}>
                        <i className="lab la-linkedin-in"></i> Login with Linkedin
                    </button>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <button type="submit" className="btn btn-sm w-25 mr-3 text-white" style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}>
                        Sign in
                    </button>
                </div>
                <div className="d-flex justify-content-center">
                    <small className="text-white">Don't have an account? <Link className="text-white" to="/profileoptions">Signup</Link></small>
                </div>
            </div>
            </form>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.authenticate
    };
  }
  
  const mapDispatchToProps = dispatch => {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
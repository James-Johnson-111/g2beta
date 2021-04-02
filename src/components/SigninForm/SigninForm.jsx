import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SigninForm.css';
import axios from '../../axios-order';
import * as passwordHash from 'password-hash';
import * as actionsTypes from '../../store/actions';

class SigninForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            UserDetails: {
                usrfname: null,
                usrlname: null,
                usrcity: null,
                usrstate: null,
                usrcountry: "United States",
                usrgender: null,
                usrbirth: null,
                usremail: null,
                usrusername: null,
                usrpass: null,
                cnfpass: null
            }
        }
    }


    onSigninFormSubmit = (event) => {
        event.preventDefault();
        // axios.get('/users.json')
        //      .then(response => {
        //          for(let x in response.data) {
        //              if(this.state.UserDetails.usremail == response.data[x].user_email) {
        //                  alert("This email is already exist");
        //                  this.props.history.replace('/signin');
        //              }
        //          }
        //      })
        //      .catch(error => {
        //          console.log(error);
        //      });
        const hashed_password = passwordHash.generate(this.state.UserDetails.usrpass);
            const User = {
                user_first_name: this.state.UserDetails.usrfname,
                user_last_name: this.state.UserDetails.usrlname,
                user_city: this.state.UserDetails.usrcity,
                user_state: this.state.UserDetails.usrstate,
                user_country: this.state.UserDetails.usrcountry,
                user_gender: this.state.UserDetails.usrgender,
                user_date_of_birth: this.state.UserDetails.usrbirth,
                user_email: this.state.UserDetails.usremail,
                user_name_for_site: this.state.UserDetails.usrusername,
                user_password: hashed_password
            }
        axios.post('/createuser', User).then(() => {
                 sessionStorage.setItem('user_email', this.state.UserDetails.usremail);
                 this.props.onUserDetails(null, this.state.UserDetails.usrusername, this.state.UserDetails.usrfname, this.state.UserDetails.usrlname, this.state.UserDetails.usrcity, this.state.UserDetails.usrstate, this.state.UserDetails.usrcountry, this.state.UserDetails.usrgender, this.state.UserDetails.usrbirth, this.state.UserDetails.usremail);
                 this.props.history.replace('/profilesetup');
             }).catch(error => {
                 console.log(error);
             })
    }

    onInputChangeHandler  = (event) => {
        const { name, value } = event.target;
        const values = {
            ...this.state.UserDetails,
            [name] : value
        };
        this.setState({UserDetails: values});
    }

    render() {
        return(
            <div className="signinForm">
                <div className="signinForm-inner py-5 text-white">
                    <form onSubmit={this.onSigninFormSubmit}>
                    <h3>Signup</h3>
                    <hr className="bg-white mb-5" />
                    <div className="container px-5">
                        <div className="row px-5">
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <input type="text" className="form-control form-control-sm" placeholder="First Name" name="usrfname" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <input type="text" className="form-control form-control-sm" placeholder="Last Name" name="usrlname" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <input type="text" className="form-control form-control-sm" placeholder="City" name="usrcity" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <select className="form-control form-control-sm" name="usrstate" onChange={this.onInputChangeHandler}  >
                                    <option selected>Select your State</option>
                                    <option>Alabama</option>
                                    <option>Alaska</option>
                                    <option>Arizona</option>
                                    <option>Arkansas</option>
                                    <option>California</option>
                                    <option>Colorado</option>
                                    <option>Connecticut</option>
                                    <option>Delaware</option>
                                    <option>Florida</option>
                                    <option>Georgia</option>
                                    <option>Hawaii</option>
                                    <option>Idaho</option>
                                    <option>Illinois</option>
                                    <option>Indiana</option>
                                    <option>Iowa</option>
                                    <option>Kansas</option>
                                    <option>Kentucky</option>
                                    <option>Louisiana</option>
                                    <option>Maine</option>
                                    <option>Maryland</option>
                                    <option>Massachusetts</option>
                                    <option>Michigan</option>
                                    <option>Minnesota</option>
                                    <option>Mississippi</option>
                                    <option>Missouri</option>
                                    <option>Montana</option>
                                    <option>Nebraska</option>
                                    <option>Nevada</option>
                                    <option>New Hampshire</option>
                                    <option>New Jersey</option>
                                    <option>New Mexico</option>
                                    <option>New York</option>
                                    <option>North Carolina</option>
                                    <option>North Dakota</option>
                                    <option>Ohio</option>
                                    <option>Oklahoma</option>
                                    <option>Oregon</option>
                                    <option>Pennsylvania</option>
                                    <option>Rhode Island</option>
                                </select>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                <input type="text" className="form-control form-control-sm" placeholder="United States" readOnly />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <select className="form-control form-control-sm" name="usrgender" onChange={this.onInputChangeHandler}  >
                                    <option selected>Select your Gender</option>
                                    <option>Male</option>
                                    <option>FeMale</option>
                                </select>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <input type="date" className="form-control form-control-sm" placeholder="Your name" name="usrbirth" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <input type="email" className="form-control form-control-sm" placeholder="Email" name="usremail" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-3">
                                <input type="text" className="form-control form-control-sm" placeholder="Username" name="usrusername" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                <input type="password" className="form-control form-control-sm" placeholder="Password" name="usrpass" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                <input type="password" className="form-control form-control-sm" placeholder="Confirm Password" name="cnfpass" required  onChange={this.onInputChangeHandler} />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 text-right col-sm-12 mb-3">
                                <button className="btn btn-sm w-75 text-white" style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}><i className="lab la-facebook-f"></i> Login with Facebook</button>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 text-left col-sm-12 mb-3">
                                <button className="btn btn-sm w-75 text-white" style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}><i className="lab la-linkedin-in"></i> Login with Linkedin</button>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-3">
                                <button type="submit" className="btn btn-sm w-25" style={{ 'backgroundColor': '#0057B2', 'color': '#fff', 'border' : '#007BFF 1px solid' }}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </form>
                    <hr className="bg-white" />
                    <small className="text-center text-white">By clicking Sign Up, you agree to our Terms of use and Privacy Policy</small>
                </div>
            </div>
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
        onUserDetails: (id, name, fname, lname, city, state, country, gender, birth, email) => dispatch({type: actionsTypes.USER_DETAILS, usrid: id, usrname: name, usrfname: fname, usrlname: lname, usrcity: city, usrstate: state, usrcountry: country, usrgender: gender, usrdbirth: birth, usremail: email})
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);
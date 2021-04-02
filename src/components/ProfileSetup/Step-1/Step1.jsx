import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Step1.css';
import axios from '../../../axios-order';

class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            steps: false,
            userProfileName: null,
            aboutUser: {
                Arts: false,
                Business: false,
                Economics: false,
                Education: false,
                Engineering_Technology: false,
                Finance: false,
                Law: false,
                PublicServices: false,
                LiberalArts: false,
                Entrepreneur: false,
                Medicine: false,
                PublicPolicy: false,
                SalesMarketing: false,
                Science: false,
                Sports: false,
                Other: false
            },
            beforeClick: 'beforeClick',
            afterClick: 'afterClick'
        };
    }

    componentDidMount() {
        axios.get('/allusers')
             .then(response => {
                 for(let key in response.data) {
                     if(response.data[key].user_email == sessionStorage.getItem('user_email')) {
                        this.setState({userProfileName: response.data[key].user_site_name});
                     }
                 }
             }).catch(error => {
                 console.log(error);
             })
    }

    nextStep = () => {
        this.setState({steps: true});
    }

    inputChangeHandler  = (event) => {
        this.setState({userProfileName: event.target.value});
    }

    styling = (event) => {
        if(event.target.className == 'beforeClick') {
            event.target.className = 'afterClick';
        }else {
            event.target.className = 'beforeClick';
        }

        let name = event.target.name;
        const aboutUserDefination= {
            ...this.state.aboutUser,
            [name]: true
        }
        this.setState({aboutUser: aboutUserDefination});
    }

    finishGotoProfile  = () => {
        axios.get('/allusers').then(response => {
            for(let key in response.data){
                if(response.data[key].user_email == sessionStorage.getItem('user_email')) {
                    sessionStorage.setItem('usrid', response.data[key].user_id);
                }
            }
        })
        const userDetails = {
            User: sessionStorage.getItem('usrid'),
            Arts: this.state.aboutUser.Arts,
            Business: this.state.aboutUser.Business,
            Economics: this.state.aboutUser.Economics,
            Education: this.state.aboutUser.Education,
            Engineering_Technology: this.state.aboutUser.Engineering_Technology,
            Finance: this.state.aboutUser.Finance,
            Law: this.state.aboutUser.Law,
            PublicServices: this.state.aboutUser.PublicServices,
            LiberalArts: this.state.aboutUser.LiberalArts,
            Entrepreneur: this.state.aboutUser.Entrepreneur,
            Medicine: this.state.aboutUser.Medicine,
            PublicPolicy: this.state.aboutUser.PublicPolicy,
            SalesMarketing: this.state.aboutUser.SalesMarketing,
            Science: this.state.aboutUser.Science,
            Sports: this.state.aboutUser.Sports,
            Other: this.state.aboutUser.Other
        }
        axios.post('/userrelated', userDetails)
             .then(response => {
                this.props.history.replace('/step2/' + sessionStorage.getItem("usrid"));
             })
             .catch(error => {
                console.log(error);
             })
    }

    render() {
        return(
            <div className="StepOne" style={{ 'backgroundColor' : 'rgb(0, 40, 70, .5)', 'width' : '70%', 'marginLeft' : '15%' }}>
                <div className="container py-3 px-0 w-100">
                        <h3 className="text-left text-white" style={{ 'marginLeft' : '70px' }}>What defines you best ?</h3>
                        <hr className="bg-white" />
                        <div className="row px-5">
                            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 pl-5">
                                <div className="w-100 px-3 bg-white rounded p-1 mx-auto">
                                    <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-75 rounded-circle" />
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 pr-5">
                                
                                <input 
                                    type="text" 
                                    className="form-control form-control-sm w-50 mb-3" 
                                    placeholder="New Profile Name"
                                    value={this.state.userProfileName}
                                    onChange={this.inputChangeHandler}
                                 />
                                <div className="text-left btns-container">
                                    <button name="Arts" className='beforeClick' onClick={this.styling}>Arts</button>
                                    <button name="Business" className='beforeClick' onClick={this.styling}>Business</button>
                                    <button name="Economics" className='beforeClick' onClick={this.styling}>Economics</button>
                                    <button name="Education" className='beforeClick' onClick={this.styling}>Education</button>
                                    <button name="Engineering_Technology" className='beforeClick' onClick={this.styling}>Engineering / Technology</button>
                                    <button name="Finance" className='beforeClick' onClick={this.styling}>Finance</button>
                                    <button name="Law" className='beforeClick' onClick={this.styling}>Law</button>
                                    <button name="PublicServices" className='beforeClick' onClick={this.styling}>Public Services</button>
                                    <button name="LiberalArts" className='beforeClick' onClick={this.styling}>Liberal Arts</button>
                                    <button name="Entrepreneur" className='beforeClick' onClick={this.styling}>Entrepreneur</button>
                                    <button name="Medicine" className='beforeClick' onClick={this.styling}>Medicine</button>
                                    <button name="PublicPolicy" className='beforeClick' onClick={this.styling}>Public Policy</button>
                                    <button name="SalesMarketing" className='beforeClick' onClick={this.styling}>Sales and Marketing</button>
                                    <button name="Science" className='beforeClick' onClick={this.styling}>Science</button>
                                    <button name="Sports" className='beforeClick' onClick={this.styling}>Sports</button>
                                    <button name="Other" className='beforeClick' onClick={this.styling}>Other</button>
                                </div>
                                <div className="py-3 text-right">
                                    <Link to="/step2">
                                    <button 
                                        className="btn btn-sm px-5" 
                                        style={{ 'backgroundColor' : '#0057b2', 'color' : '#fff', 'border' : '#007BFF 1px solid' }}
                                        onClick={this.finishGotoProfile}
                                    >
                                        Finish & Go to Profile
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default Step1;
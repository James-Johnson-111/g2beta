import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PSettings2.css';
import * as actionsTypes from '../../../store/actions';

class PSettings2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMoreDetails: false
        }
    }

    saveSettings = () => {
        sessionStorage.setItem("usrname", "Usman Badar");
        this.props.onUserLogin();
        sessionStorage.removeItem('becomeMentor');
        this.props.onUserNotBecomeMentor();
        this.props.history.replace('/dashboard');
    }

    showMore = (event) => {
        let ch = event.target.checked;
        if(ch) {
            this.setState({showMoreDetails: true});
        }else {
            this.setState({showMoreDetails: false});
        }
    }

    render() {
        let ShowMoreDetails = null;
        if(this.state.showMoreDetails) {
            ShowMoreDetails = 
            <>
                <div className="col-xl-8 col-lg-8 pl-5 col-md-8 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="w-100">
                                <small className="text-white">
                                    How many people would you like to mentor (we recommend 3 at any time)
                                </small>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 pr-5 col-md-4 col-sm-12 mb-4 pt-2">
                            <select className="form-control form-control-sm">
                                <option>1</option>
                                <option>2</option>
                                <option selected>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                        <div className="col-xl-8 col-lg-8 pl-5 col-md-8 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="w-100">
                                <small className="text-white">
                                    List the period for which you would like to mentor (we recommend 3 months). 
                                    Past mentees show up in My Connections but not as active mentees
                                </small>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 pr-5 col-md-4 col-sm-12 mb-4 text-left pt-2">
                            <select className="form-control form-control-sm">
                                <option>1 months</option>
                                <option>2 months</option>
                                <option selected>3 months</option>
                                <option>4 months</option>
                                <option>5 months</option>
                                <option>6 months</option>
                            </select>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="w-100">
                                <small className="text-white">
                                    How would you like to mentor? (Select all that apply)
                                </small>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 text-left" style={{ 'fontSize' : '12px' }}>
                            <div className="mb-3">
                                <input type="checkbox" /> <small>Platform Message (5 Questions in a message, 3 Messages Allowed)</small>
                            </div>
                            <div className="mb-3">
                                <input type="checkbox" /> <small>Chat (10 minutes, 3 Total Chats Allowed)</small>
                            </div>
                            <div className="mb-3">
                                <input type="checkbox" /> <small>Phone Call (10 minutes, 3 Total Calls Allowed)</small>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10 col-sm-12 text-justify offset-xl-1 offset-lg-1">
                            <small style={{ 'fontSize' : '11px' }}>
                                <b>Disclaimer:</b> Gomentors is not liable for any protected company
                                information if divalulged during mentors/mentee interactions.
                                By initiating contact, mentors and mentees agree that such protected
                                information will not be exchanged between the two including but not limited
                                to any intellectual property, timeline, product/service launch information, 
                                internal company decisions, organizational charts and personnal records
                            </small>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5 text-center">
                            <button 
                                className="btn btn-sm px-5 rounded-0" 
                                style={{ 'backgroundColor' : '#0057b2', 'color' : '#fff', 'border' : '1px solid #007bff' }}
                                onClick={this.saveSettings}
                            >
                                Save Settings
                            </button>
                        </div>
            </>
        }
        return(
            <div className="PSettings2 pb-5 pt-3" style={{ 'backgroundColor' : 'rgb(0, 40, 70, .5)' }}>
                <div className="container text-white">
                    <h3>My Settings</h3>
                    <p>
                        <i class="las la-user"></i> John
                    </p>
                    <hr className="bg-white" />
                    <div className="row pt-3">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <small className="text-white">
                                    How many mentors do you want at any time (we recommend 1-2 at any time)
                                </small>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4">
                            <select className="form-control form-control-sm">
                                <option selected>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="w-75">
                                <small className="text-white">
                                    In the spirit of giving back and being fair to mentors, we request that as a
                                    mentee, you also mentor  someone else in turn. PLease check the box to accept.
                                </small>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-4 text-left">
                            <input type="checkbox" className="form-control form-control-sm d-block w-25" onChange={this.showMore} />
                        </div>
                        {ShowMoreDetails}
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: () => dispatch({type: actionsTypes.USER_LOGIN}),
        onUserLogout: () => dispatch({type: actionsTypes.USER_LOGOUT}),
        onUserNotBecomeMentor: () => dispatch({type: actionsTypes.BECOME_MENTOR_FALSE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PSettings2);
// export default PSettings2;
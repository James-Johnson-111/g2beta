import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PSettings.css';
import * as actionsTypes from '../../../store/actions';

class PSettings extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {}
    // }

    saveSettings = () => {
        sessionStorage.setItem("usrname", "Usman Badar");
        this.props.onUserLogin();
        this.props.history.replace('/dashboard');
    }

    render() {
        return(
            <div className="PSettings">
                <div className="container text-white px-5">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="w-50">
                                <small className="text-white">
                                    How many mentors do you want at any time (we recommend 1-2 at any time)
                                </small>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-4">
                            <select className="form-control form-control-sm">
                                <option selected>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center mb-4">
                            <div className="w-50">
                                <small className="text-white">
                                    In the spirit of giving back and being fair to mentors, we request that as a
                                    mentee, you also mentor  someone else in turn. PLease check the box to accept.
                                </small>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 mb-4 text-left">
                            <input type="checkbox" className="form-control form-control-sm d-block w-25" />
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5 text-center">
                            <button 
                                className="btn btn-sm px-5 rounded-0" 
                                style={{ 'backgroundColor' : '#4472c4', 'color' : '#fff' }}
                                onClick={this.saveSettings}
                            >
                                Save Settings
                            </button>
                        </div>
                    </div>
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
        onUserLogin: () => dispatch({type: actionsTypes.USER_LOGIN}),
        onUserLogout: () => dispatch({type: actionsTypes.USER_LOGOUT})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PSettings);
// export default PSettings;
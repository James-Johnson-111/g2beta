import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';

import './ProfileSetup.css';
import Step1 from './Step-1/Step1';
import Step2 from './Step-2/Step2';
import PSettings from './PSettings/PSettings';
import PSettings2 from './PSettings2/PSettings2';
import { connect } from 'react-redux';

class ProfileSetup extends Component {

    render() {
        // let gotoSettings = <Route exact path="/profilesettings" component={PSettings} />
        // if(this.props.becomementor) {
        //     gotoSettings = <Route exact path="/profilesettings" component={PSettings2} />
        // }
        return(
            <div className="ProfileSetup">
                <div className="pb-5 pt-3 justify-content-center w-100">
                    <NavLink activeClassName="active" to="/profilesetup" className="px-2 mx-4 pb-1 text-white">Profile</NavLink>
                    <NavLink activeClassName="active" to="/profilesettings" className="px-2 mx-4 pb-1 text-white">Settings</NavLink>
                    <NavLink activeClassName="active" to="/login" className="px-2 mx-4 pb-1 text-white">Dashboard</NavLink>
                </div>
                <Switch>
                    <Route exact path="/profilesetup" component={Step1} />
                    <Route exact path="/step2/:id" component={Step2} />
                    <Route exact path="/profilesettings" component={PSettings2} />
                    {/* {gotoSettings} */}
                </Switch>
            </div>
            // sessionStorage.getItem('becomeMentor')
        )
    }

}

const mapStateToProps = state => {
    return {
        becomementor: state.bementor
    }
}

export default connect(mapStateToProps, null)(ProfileSetup);
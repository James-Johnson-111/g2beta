import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import './Dashboard.css';
import Home from './Home/Home';
import MyInvitaions from './MyInvitaions/MyInvitaions';
import MyMentors from './MyMentors/MyMentors';
import MyMessages from './MyMessages/MyMessages';
import MyConnections from './MyConnections/MyConnections';
import MyMentees from './MyMentees/MyMentees';

class Dashboard extends Component {


    componentDidMount() {
        sessionStorage.removeItem('becomeMentor');
    }
    render() {
        return(
            <div className="Dashboard w-100" style={{ 'fontSize' : '12px' }}>
                <Switch>
                    <Route exact path="/dashboard" component={Home} />
                    <Route exact path="/mymentor" component={MyMentors} />
                    <Route exact path="/mymentor/search" component={MyMentors} />
                    <Route exact path="/mymentor/searchmentorresult" component={MyMentors} />
                    <Route exact path="/mymentor/requestmentor" component={MyMentors} />
                    <Route exact path="/mymentor/communicatewithmentor" component={MyMentors} />

                    {/* For My Messages Link */}
                    <Route exact path="/mymessages" component={MyMessages} />
                    <Route exact path="/personinbox" component={MyMessages} />
                    
                    {/* For My Invitaions Link */}
                    <Route exact path="/myinvitaions" component={MyInvitaions} />
                    
                    {/* For My Connections Link */}
                    <Route exact path="/myconnections" component={MyConnections} />
                    
                    {/* For My Mentees Link */}
                    <Route exact path="/mymentees" component={MyMentees} />
                </Switch>
            </div>
        )
    }

}

export default Dashboard;
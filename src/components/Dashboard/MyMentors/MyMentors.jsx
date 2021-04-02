import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import CommunicateWithMentor from './CommunicateWithMentor/CommunicateWithMentor';

import './MyMentors.css';
import MentorRequest from './SearchMentors/MentorSearchResults/MentorRequest/MentorRequest';
import MentorSearchResults from './SearchMentors/MentorSearchResults/MentorSearchResults';
import SearchMentors from './SearchMentors/SearchMentors';

class MyMentors extends Component {

    // componentDidMount() {
    //     this.props.history.push('/mymentor');
    // }

    render() {
        return(
            <div className="MyMentors">
                <div className="mentor_circle text-center">
                    My Mentors
                </div>
                <div className="d-flex justify-content-center mb-5">
                    <NavLink activeClassName="active" to="/mymentor/search" className="px-2 mx-3 text-white">Search Mentors</NavLink>
                    <NavLink activeClassName="active" to="/mymentor/communicatewithmentor" className="px-2 mx-3 text-white">Communicate with Mentors</NavLink>
                    <NavLink activeClassName="active" to="/mymentor/requestmentor" className="px-2 mx-3 text-white">Sent Requests</NavLink>
                </div>
                <Switch>
                    <Route exact path="/mymentor" component={SearchMentors} />
                    <Route exact path="/mymentor/search" component={SearchMentors} />
                    <Route exact path="/mymentor/searchmentorresult" component={MentorSearchResults} />
                    <Route exact path="/mymentor/requestmentor" component={MentorRequest} />
                    <Route exact path="/mymentor/communicatewithmentor" component={CommunicateWithMentor} />
                </Switch>
            </div>
        )
    }

}

export default MyMentors;
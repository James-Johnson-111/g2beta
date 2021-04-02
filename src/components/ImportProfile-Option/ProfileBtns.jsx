import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ProfileBtns.css';

class Profilebtns extends Component {

    render() {
        return(
            <div class="d-flex justify-content-center" style={{ 'padding' : '150px 0' }}>
                <Link to="##" class=" w-25">
                    <button class="btn btn-sm btn-primary mr-3 rounded-0">Import Profile from Linkedin</button>
                </Link>
                <Link to="/signin" class=" w-25">
                    <button class="btn btn-sm btn-primary ml-3 rounded-0">Create your Profile without Import</button>
                </Link>
            </div>
        )
    }

}

export default Profilebtns;
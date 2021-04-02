import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Welcome.css';

class Welcome extends Component {

    render() {
        return(
            <div className="welcome py-5 mt-4">
                <div className="text-white w-100 pt-5">
                    <h1>The time is right for you to make a <br /> leap.. <br /> Be a mentor, make a difference</h1>
                    <div className="d-flex justify-content-center mt-5">
                        <Link to="/becomementor" className="btn btn-sm btn-primary ml-3 w-25">
                            Become a Mentor
                        </Link>
                        <Link to="/getmentored" className="btn btn-sm btn-primary ml-3 w-25">
                            Get Mentored
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

}

export default Welcome;
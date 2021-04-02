import React, { Component } from 'react';

import './MentorRequest.css';

class MentorRequest extends Component {

    render() {
        return(
            <div className="MentorRequest">
                <div className="container text-white">
                    <h3 style={{ 'textDecoration' : 'underline' }} className="pb-1">Sent Mentor Requests</h3>
                    <div className="row mb-4">
                        <div className="col-xl-1 col-lg-1 text-right col-md-2 col-sm-3 offset-xl-3 offset-md-3 pt-2">
                        <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                        </div>
                        <div className="col-xl-3 text-left col-lg-3 pt-1 col-md-6 col-sm-3">
                            <h2>Pankaj</h2>
                        </div>
                        <div className="col-xl-2 pt-3 col-lg-1 col-md-2 col-sm-3">
                            <button className="btn btn-sm btn-block border text-white">Pending</button>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-1 col-lg-1 text-right col-md-2 col-sm-3 offset-xl-3 offset-md-3 pt-2">
                            <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                        </div>
                        <div className="col-xl-3 text-left col-lg-3 pt-1 col-md-6 col-sm-3">
                            <h2>Mohn</h2>
                        </div>
                        <div className="col-xl-2 pt-3 col-lg-1 col-md-2 col-sm-3">
                            <button className="btn btn-sm btn-block border text-white">Pending</button>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-1 col-lg-1 text-right col-md-2 col-sm-3 offset-xl-3 offset-md-3 pt-2">
                            <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                        </div>
                        <div className="col-xl-3 text-left col-lg-3 pt-1 col-md-6 col-sm-3">
                            <h2>John</h2>
                        </div>
                        <div className="col-xl-2 pt-3 col-lg-1 col-md-2 col-sm-3">
                            <button className="btn btn-sm btn-block border text-white">Pending</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MentorRequest;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

class Home extends Component {

    render() {
        return(
            <div className="HomeDashboard">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 text-right px-5 pt-3">
                            <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 text-left overflow-hidden">
                            <div>
                                <h1 className="font-weight-bolder text-white mb-4">Pankaj</h1>
                                <Link to={"/step2/"+sessionStorage.getItem('usrid')}>
                                <button className="btn border btn-sm px-4">
                                    <i class="las la-pencil-alt"></i> Edit Profile
                                </button>
                                </Link>
                            </div>
                            <div className="d-flex justify-content-start mt-5">
                                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                    <div className="d-flex justify-content-center text-white">
                                        <div>
                                            <i class="lar la-building rounded-circle border" style={{ 'fontSize' : '15px', 'padding' : '10px' }}></i>
                                        </div>
                                        <div className="py-1 px-3 mx-1 text-center border-left">
                                            <small className="d-block font-weight-bolder">3</small>
                                            <small className="font-weight-bolder">Mentors</small>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                    <div className="d-flex justify-content-center text-white">
                                        <div>
                                            <i class="lar la-chart-bar rounded-circle border" style={{ 'fontSize' : '15px', 'padding' : '10px' }}></i>
                                        </div>
                                        <div className="py-1 px-3 mx-1 text-center border-left">
                                            <small className="d-block font-weight-bolder">3</small>
                                            <small className="font-weight-bolder">Mentees</small>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                    <div className="d-flex justify-content-center text-white">
                                        <div>
                                            <i class="las la-users rounded-circle border" style={{ 'fontSize' : '15px', 'padding' : '10px' }}></i>
                                        </div>
                                        <div className="py-1 px-3 mx-1 text-center border-left">
                                            <small className="d-block font-weight-bolder">3</small>
                                            <small className="font-weight-bolder">Connections</small>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                    <div className="d-flex justify-content-center text-white">
                                        <div>
                                            <i class="lar la-eye rounded-circle border" style={{ 'fontSize' : '15px', 'padding' : '10px' }}></i>
                                        </div>
                                        <div className="py-1 px-3 mx-1 text-center border-left">
                                            <small className="d-block font-weight-bolder">3</small>
                                            <small className="font-weight-bolder">Views</small>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                    <div className="d-flex justify-content-center text-white">
                                        <div>
                                            <i class="lab la-invision rounded-circle border" style={{ 'fontSize' : '15px', 'padding' : '10px' }}></i>
                                        </div>
                                        <div className="py-1 px-3 mx-1 text-center border-left">
                                            <small className="d-block font-weight-bolder">3</small>
                                            <small className="font-weight-bolder">Invitaions</small>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                    <div className="d-flex justify-content-center text-white">
                                        <div>
                                            <i class="las la-sms rounded-circle border" style={{ 'fontSize' : '15px', 'padding' : '10px' }}></i>
                                        </div>
                                        <div className="py-1 px-3 mx-1 text-center border-left">
                                            <small className="d-block font-weight-bolder">3</small>
                                            <small className="font-weight-bolder">Messages</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;
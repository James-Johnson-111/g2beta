import React, { Component } from 'react';

import './DashboardCards.css';

class DashboardCards extends Component {

    render() {
        return(
            <div className="DashboardCards">
                <div className="container-fluid py-5" style={{ 'fontSize' : '12px' }}>
                    <div className="row">
                        <div className="col-xl-2 py-5 col-lg-3 col-md-6 col-sm-12 offset-xl-1">
                            <div className="daashboardcard_items px-3 py-4 pt-5" style={{ 'border' : '1px solid #282934' }}>
                                <div className="dashboard-circle text-center text-white" style={{ 'backgroundColor' : '#282934', 'cursor' : 'pointer' }}>My Mentors</div>
                                <ul className="mt-3">
                                    <li>
                                        <a href="##">Herry</a>
                                    </li>
                                    <li>
                                        <a href="##">John</a>
                                    </li>
                                    <li>
                                        <a href="##">Gerry</a>
                                    </li>
                                </ul>
                                <p className="text-center">
                                    <a href="##" className="text-primary">Click </a>
                                    here for more
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2 py-5 col-lg-3 col-md-6 col-sm-12">
                            <div className="daashboardcard_items px-3 py-4 pt-5" style={{ 'border' : '1px solid #FFA500' }}>
                                <div className="dashboard-circle text-center text-white" style={{ 'backgroundColor' : 'orange' , 'cursor' : 'pointer'}}>My Mentees</div>
                                <ul className="mt-3">
                                    <li>
                                        <a href="##">Herry</a>
                                    </li>
                                    <li>
                                        <a href="##">John</a>
                                    </li>
                                    <li>
                                        <a href="##">Gerry</a>
                                    </li>
                                </ul>
                                <p className="text-center">
                                    <a href="##" className="text-primary">Click </a>
                                    here for more
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2 py-5 col-lg-3 col-md-6 col-sm-12">
                            <div className="daashboardcard_items px-3 py-4 pt-5" style={{ 'border' : '1px solid #0057B2' }}>
                                <div className="dashboard-circle text-center text-white" style={{ 'backgroundColor' : '#0057b2', 'cursor' : 'pointer' }}>My Connections</div>
                                <ul className="mt-3">
                                    <li>
                                        <a href="##">Herry</a>
                                    </li>
                                    <li>
                                        <a href="##">John</a>
                                    </li>
                                    <li>
                                        <a href="##">Gerry</a>
                                    </li>
                                </ul>
                                <p className="text-center">
                                    <a href="##" className="text-primary">Click </a>
                                    here for more
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2 py-5 col-lg-3 col-md-6 col-sm-12">
                            <div className="daashboardcard_items px-3 py-4 pt-5" style={{ 'border' : '1px solid #800080' }}>
                                <div className="dashboard-circle text-center text-white" style={{ 'backgroundColor' : 'purple' , 'cursor' : 'pointer'}}>My Invitaions</div>
                                <ul className="mt-3">
                                    <li>
                                        <a href="##">Herry</a>
                                    </li>
                                    <li>
                                        <a href="##">John</a>
                                    </li>
                                    <li>
                                        <a href="##">Gerry</a>
                                    </li>
                                </ul>
                                <p className="text-center">
                                    <a href="##" className="text-primary">Click </a>
                                    here for more
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-2 py-5 col-lg-3 col-md-6 col-sm-12">
                            <div className="daashboardcard_items px-3 py-4 pt-5" style={{ 'border' : '1px solid #007BFF' }}>
                                <div className="dashboard-circle text-center text-white" style={{ 'backgroundColor' : '#007bff', 'cursor' : 'pointer' }}>My Messages</div>
                                <ul className="mt-3">
                                    <li>
                                        <a href="##">Herry</a>
                                    </li>
                                    <li>
                                        <a href="##">John</a>
                                    </li>
                                    <li>
                                        <a href="##">Gerry</a>
                                    </li>
                                </ul>
                                <p className="text-center">
                                    <a href="##" className="text-primary">Click </a>
                                    here for more
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default DashboardCards;
import React, { Component } from 'react';
import { Route } from 'react-router';

import './MyMessages.css';

class MyMessages extends Component {

    constructor(props) {
        super(props);
        this.state  = {
            messageDetails: false
        }
    }


    showMessageDetails = () => {
        this.setState({messageDetails: true});
    }

    render() {
        let message = null;
        if(this.state.messageDetails) {
            message =
            <>
                <div className="container-fluid px-3 py-2 p-0" style={{ 'backgroundColor' : 'rgb(90, 110, 140, .8)' }}>
                    <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                        <div className="d-flex justify-content-start text-white">
                            <small className=" p-2 mb-3" style={{ 'backgroundColor' : '#022644' }}>
                                I want to see him
                            </small>
                        </div>
                        <div className="d-flex justify-content-start text-white">
                            <small className=" p-2 mb-3" style={{ 'backgroundColor' : '#022644' }}>
                                I want to see him
                            </small>
                        </div>
                        <div className="d-flex justify-content-start text-white">
                            <small className=" p-2 mb-3" style={{ 'backgroundColor' : '#022644' }}>
                                I want to see him
                            </small>
                        </div>
                        <div className="d-flex justify-content-start text-white">
                            <small className=" p-2 mb-3" style={{ 'backgroundColor' : '#022644' }}>
                                I want to see him
                            </small>
                        </div>
                    </div>
                </div>
            </>
        }
        return(
            <div className="MyMessages text-white">
                <div className="mentor_circle text-center">
                    My Messages
                </div>

                <div className="container messages_box">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 p-0">
                            <div className="conatiner px-3 py-2 p-0" style={{ 'borderRadius' : '30px 0 0 0', 'backgroundColor' : '#0057b2' }}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                                    </div>
                                    <div className="col-lg-8 text-left" style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                        <h6>Pankaj ( 1 message )</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="conatiner px-3 py-2 p-0 bg-white text-dark" onClick={this.showMessageDetails}>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                                    </div>
                                    <div className="col-lg-8 text-left" style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                        <div className=" d-flex w-100 justify-content-between">
                                            <p className="p-0 m-0">
                                                Pankaj
                                            </p>
                                            <p className="p-0 m-0">
                                                2021-3-18
                                            </p>
                                        </div>
                                        <small>Completed Questions</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 p-0">
                            <div className="container-fluid px-3 py-2 p-0 d-flex justify-content-between" style={{ 'borderRadius' : '0 30px 0 0', 'backgroundColor' : 'rgb(90, 110, 140, .5)' }}>
                                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                                    <div className="d-flex justify-content-center">
                                        <img style={{ 'width' : '47.5px' }} src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="rounded-circle" />
                                        <h6 className="mt-3 ml-3">Pankaj ( 1 message )</h6>
                                    </div>
                                </div>
                                <div className="text-right" style={{ 'display' : 'grid', 'alignItems' : 'center', 'lineHeight' : '0px' }}>
                                    <h6>2021-03-18</h6>
                                    <p>10:33:31</p>
                                </div>
                            </div>
                            {message}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MyMessages;
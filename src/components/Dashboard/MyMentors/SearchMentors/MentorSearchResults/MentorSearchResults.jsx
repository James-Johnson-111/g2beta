import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MentorSearchResults.css';
import Modal from '../../../../UI/Modal/Modal';

class MentorSearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showBtn:false,
            requestModalShow: false
        }
    }

    nextBtnShow  = (event) => {
        let ch = event.target.checked;
        if(ch) {
            this.setState({showBtn: true});
        }else {
            this.setState({showBtn: false});
        }
    }

    showRequestModal = () => {
        this.setState({requestModalShow: true});
    }

    modalClose = () => {
        this.setState({requestModalShow: false});
    }

    render() {
        let show = null;
        if(this.state.showBtn){
            show =
            <>
                <button 
                    className="btn btn-sm w-50 text-white" 
                    style={{ 'backgroundColor' : '#0250A2', 'border' : '#007BFF 1px solid' }}
                    onClick={this.showRequestModal}
                >
                    Request Mentoring
                </button>
            </>
        }
        return(
            <div className="MentorSearchResults text-white py-3">
                <Modal mClose={this.modalClose} mShow={this.state.requestModalShow}>
                    <div style={{ 'backgroundColor' : '#305883', 'display' : 'grid', 'alignItems' : 'center' }} className="text-white px-3">
                        <div className=" d-flex justify-content-between py-2">
                            <p className="p-0 m-0">
                                Requesting Mentorship
                            </p>
                            <p className="p-0 m-0" onClick={this.modalClose} style={{ 'cursor' : 'pointer' }}>
                                <i class="las la-times-circle"></i>
                            </p>
                        </div>
                    </div>
                    <div className="container-fluid py-3">
                        <div className="searchMentorsResultRows">
                        <div className="row border-bottom pt-3">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                            <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 text-left text-dark">
                                <h5>Pankaj</h5>
                                <p>
                                    Architect, Builder at Test Company Ltd.
                                </p>
                            </div>
                        </div>
                        <div className="row border-bottom pt-3">
                            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                <img src="https://msrealtors.org/wp-content/uploads/2018/11/no-user-image.gif" className="w-50 rounded-circle" />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 text-left text-dark">
                                <h5>Pankaj</h5>
                                <p>
                                    Architect, Builder at Test Company Ltd.
                                </p>
                            </div>
                        </div>
                        </div>
                        <div className="input-group pt-2">
                            <input type="text" className="form-control form-control-sm border" value="I would like you to be my mentor" />
                            <Link to="/mymentor/requestmentor">
                                <button className="btn btn-sm px-4 text-white" style={{ 'backgroundColor' : '#305883' }}>Send</button>
                            </Link>
                        </div>
                    </div>
                </Modal>
                <Link to="/mymentor/search">
                <button className="btn btn-sm goBackBtn text-white">
                    <i class="las la-long-arrow-alt-left"></i>
                </button>
                </Link>
                <h3>Search Result</h3>
                <hr className="bg-white" />
                <div className="container text-white">
                    <div className="row mb-4">
                        <div className="col-xl-2 col-lg-1 col-md-2 col-sm-3 text-right offset-xl-2">
                            <i class="las la-user la-4x"></i>
                        </div>
                        <div className="col-xl-5 col-lg-3 col-md-6 col-sm-3 text-left pt-1">
                            <h2>Pankaj</h2>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 text-left pt-2">
                            <input onChange={this.nextBtnShow} type="checkbox" className="mt-2" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-2 col-lg-1 col-md-2 col-sm-3 text-right offset-xl-2">
                            <i class="las la-user la-4x"></i>
                        </div>
                        <div className="col-xl-5 col-lg-3 col-md-6 col-sm-3 text-left pt-1">
                            <h2>Pankaj</h2>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 text-left pt-2">
                            <input onChange={this.nextBtnShow} type="checkbox" className="mt-2" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-2 col-lg-1 col-md-2 col-sm-3 text-right offset-xl-2">
                            <i class="las la-user la-4x"></i>
                        </div>
                        <div className="col-xl-5 col-lg-3 col-md-6 col-sm-3 text-left pt-1">
                            <h2>Pankaj</h2>
                        </div>
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 text-left pt-2">
                            <input onChange={this.nextBtnShow} type="checkbox" className="mt-2" />
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 text-center">
                            {show}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default MentorSearchResults;
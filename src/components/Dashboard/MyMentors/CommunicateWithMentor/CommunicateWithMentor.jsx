import React, { Component } from 'react';

import './CommunicateWithMentor.css';
import Modal from '../../../UI/Modal/Modal';

class CommunicateWithMentor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messagePopUps: false,
            phonePopUps: false
        }
    }

    messagePopUp = () => {
        this.setState({messagePopUps: true});
        this.setState({phonePopUps: false});
    }

    phonePopUp = () => {
        this.setState({messagePopUps: false});
        this.setState({phonePopUps: true});
    }

    modalClose = () => {
        this.setState({messagePopUps: false});
        this.setState({phonePopUps: false});
    }

    render() {
        return(
            <div className="CommunicateWithMentor w-100 text-white pt-5">
                <Modal mClose={this.modalClose} mShow={this.state.messagePopUps}>
                    <div className="text-dark px-3 py-4">
                        <h6>Subject: Advice on Career</h6>
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="Message for Mentor(write the background and your situation Limit 500 words)" />
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="What should I do (limit of 100 words)" />
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="What should I think (limit of 100 words)" />
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="Where should I take my career (limit of 100 words)" />
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="What is the next step (limit of 100 words)" />
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="Final question (limit of 100 words)" />
                        <button className="btn btn-sm px-4 text-white rounded-0" style={{ 'backgroundColor' : '#4472c4' }}>Send Message</button>
                    </div>
                </Modal>
                <Modal mClose={this.modalClose} mShow={this.state.phonePopUps}>
                    <div className="text-dark px-3 py-4">
                        <h6>Subject: Phone/Zoom Request</h6>
                        <p className="text-left m-0 p-0">Optional Message For Mentor</p>
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="Message for Mentor(write the background and your situation Limit 500 words)" />
                        <p className="text-left m-0 p-0">Phone Number to Reach (if any):</p>
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="What should I do (limit of 100 words)" />
                        <p className="text-left m-0 p-0">Zoom Link (if any):</p>
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="What should I think (limit of 100 words)" />
                        <p className="text-left m-0 p-0">Time:</p>
                        <input type="text" className="form-control form-control-sm mb-3" placeholder="Where should I take my career (limit of 100 words)" />
                        <button className="btn btn-sm px-4 text-white rounded-0" style={{ 'backgroundColor' : '#4472c4' }}>Send Message</button>
                    </div>
                </Modal>
                <div className="d-flex justify-content-center mb-2">
                    <div className="pl-5 text-right" style={{ 'width' : '10%' }}>
                        <i class="las la-user la-4x"></i>
                    </div>
                    <div className="px-3 overflow-hidden text-left" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '20%' }}>
                        <h3>Pankaj</h3>
                    </div>
                    <div 
                        className="text-center py-1 px-2 mx-1 border" 
                        style={{ 'cursor' : 'pointer', 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : '#4472c4', 'position' : 'relative' }}
                        onClick={this.messagePopUp}
                    >
                        <div className="messageMentorBox">3</div>
                        Message Mentor
                    </div>
                    <div
                        className="text-center py-1 px-2 mx-1 border" 
                        style={{ 'cursor' : 'pointer', 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : 'darkorange', 'position' : 'relative' }}
                        onClick={this.phonePopUp}
                        >
                        <div className="phoneMentorBox">3</div>
                        Send Phone Request
                    </div>
                    <div className="text-center py-1 px-2 mx-1 border" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : 'orange', 'position' : 'relative' }}>
                        <div className="chatMentorBox">3</div>
                        Chat with Mentor
                    </div>
                    <div className="text-left py-1 px-2 mx-1" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%' }}>
                        Notify me via email when mentor is online?
                    </div>
                    <div className="text-center pt-2 px-2" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '10%' }}>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="sliders round"></span>
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-2">
                    <div className="pl-5 text-right" style={{ 'width' : '10%' }}>
                        <i class="las la-user la-4x"></i>
                    </div>
                    <div className="px-3 overflow-hidden text-left" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '20%' }}>
                        <h3>Mohn</h3>
                    </div>
                    <div 
                        className="text-center py-1 px-2 mx-1 border" 
                        style={{ 'cursor' : 'pointer', 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : '#4472c4', 'position' : 'relative' }}
                        onClick={this.messagePopUp}
                    >
                        <div className="messageMentorBox">3</div>
                        Message Mentor
                    </div>
                    <div
                        className="text-center py-1 px-2 mx-1 border" 
                        style={{ 'cursor' : 'pointer', 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : 'darkorange', 'position' : 'relative' }}
                        onClick={this.phonePopUp}
                        >
                        <div className="phoneMentorBox">3</div>
                        Send Phone Request
                    </div>
                    <div className="text-center py-1 px-2 mx-1 border" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : 'orange', 'position' : 'relative' }}>
                        <div className="chatMentorBox">3</div>
                        Chat with Mentor
                    </div>
                    <div className="text-left py-1 px-2 mx-1" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%' }}>
                        Notify me via email when mentor is online?
                    </div>
                    <div className="text-center pt-2 px-2" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '10%' }}>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="sliders round"></span>
                        </label>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-2">
                    <div className="pl-5 text-right" style={{ 'width' : '10%' }}>
                        <i class="las la-user la-4x"></i>
                    </div>
                    <div className="px-3 overflow-hidden text-left" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '20%' }}>
                        <h3>Jahangeer</h3>
                    </div>
                    <div 
                        className="text-center py-1 px-2 mx-1 border" 
                        style={{ 'cursor' : 'pointer', 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : '#4472c4', 'position' : 'relative' }}
                        onClick={this.messagePopUp}
                    >
                        <div className="messageMentorBox">3</div>
                        Message Mentor
                    </div>
                    <div
                        className="text-center py-1 px-2 mx-1 border" 
                        style={{ 'cursor' : 'pointer', 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : 'darkorange', 'position' : 'relative' }}
                        onClick={this.phonePopUp}
                        >
                        <div className="phoneMentorBox">3</div>
                        Send Phone Request
                    </div>
                    <div className="text-center py-1 px-2 mx-1 border" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%', 'backgroundColor' : 'orange', 'position' : 'relative' }}>
                        <div className="chatMentorBox">3</div>
                        Chat with Mentor
                    </div>
                    <div className="text-left py-1 px-2 mx-1" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '15%' }}>
                        Notify me via email when mentor is online?
                    </div>
                    <div className="text-center pt-2 px-2" style={{ 'display' : 'grid', 'alignItems' : 'center', 'width' : '10%' }}>
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="sliders round"></span>
                        </label>
                    </div>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 text-left offset-xl-3 offset-lg-3">
                            <p>
                                <b>Disclaimer:</b> Gomentors is not liable for any protected company
                                information if divalulged during mentors/mentee interactions.
                                By initiating contact, mentors and mentees agree that such protected
                                information will not be exchanged between the two including but not limited
                                to any intellectual property, timeline, product/service launch information, 
                                internal company decisions, organizational charts and personnal records
                            </p>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-xl-1 col-lg-1 col-md-2 col-sm-3 offset-xl-3 offset-md-3">
                            <i class="las la-envelope-open-text la-4x"></i>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-2 col-sm-3 text-left pt-2">
                            <p>
                                Send an email to Mentor stating Phone Call Request received with Link to Request
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default CommunicateWithMentor;
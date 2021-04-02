import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenteeItem from './MenteeItem/MenteeItem';

import './MyMentees.css';
import Modal from '../../UI/Modal/Modal';

class MyMentees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    modalShow = () => {
        this.setState({showModal: true});
    }
    
    modalClose = () => {
        this.setState({showModal: false});
    }

    render() {
        return(
            <div className="MyMentees text-white">
                <Modal mClose={this.modalClose} mShow={this.state.showModal}>
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
                <div className="mentor_circle text-center">
                    My Mentees
                </div>
                <div className="d-flex justify-content-center mb-5">
                    <NavLink className="px-2 pb-1 text-white" to="/mymentees" activeClassName="active">Communicate with Connections</NavLink>
                </div>
                <MenteeItem personName="Pankaj" links="/##" clicked={this.modalShow} />
                <MenteeItem personName="KJ Gold" links="/##" clicked={this.modalShow} />
                <MenteeItem personName="Zink" links="/##" clicked={this.modalShow} />
            </div>
        )
    }

}

export default MyMentees;
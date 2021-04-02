import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './InvitaionItem.css';

class InvitaionItem extends Component {

    render() {
        return(
            <div className="InvitaionItem text-white mb-4" style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                <div className=" d-flex justify-content-center">
                <i class="las la-user la-4x"></i>
                <div className="mt-2 px-3" style={{ 'width' : '200px' }}>
                    <Link to={this.props.links} className="text-white text-left">
                       <h3>{this.props.personName}</h3>
                    </Link>
                </div>
                    <button className="btn btn-sm px-4 text-white mx-3 rounded-0 border" style={{ 'backgroundColor' : '#4472c4' }}>Accept</button>
                    <button className="btn btn-sm px-4 text-white mx-3 rounded-0 border" style={{ 'backgroundColor' : '#4472c4' }}>Ignore</button>
                </div>
            </div>
        )
    }

}

export default InvitaionItem;
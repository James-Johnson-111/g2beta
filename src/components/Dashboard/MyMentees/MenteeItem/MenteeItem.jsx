import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './MenteeItem.css';

class MenteeItem extends Component {

    render() {
        return(
            <div className="MenteeItem text-white mb-4" style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                <div className=" d-flex justify-content-center">
                <i class="las la-user la-4x"></i>
                <div className="mt-2 px-3" style={{ 'width' : '200px' }}>
                    <Link to={this.props.links} className="text-white text-left">
                       <h3>{this.props.personName}</h3>
                    </Link>
                </div>
                    <button 
                        className="btn btn-sm px-4 text-white rounded-0 border" 
                        style={{ 'backgroundColor' : '#4472c4' }}
                        onClick={this.props.clicked}
                    >
                        Message Mentor
                    </button>
                    
                </div>
            </div>
        )
    }

}

export default MenteeItem;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ConnectionItem from './ConnectionItem/ConnectionItem';

import './MyConnections.css';

class MyConnections extends Component {

    render() {
        return(
            <div className="MyConnections text-white">
                <div className="mentor_circle text-center">
                    My Connections
                </div>
                <div style={{ 'padding' : '80px 0' }}>
                    <ConnectionItem personName="Pankaj" links="/personinbox" />
                    <ConnectionItem personName="Mohn" links="/personinbox" />
                </div>
            </div>
        )
    }

}

export default MyConnections;
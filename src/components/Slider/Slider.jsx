import React, { Component } from 'react';

import './Slider.css';
import Navbar from '../Navbar/Navbar';

class Slider extends Component {

    render() {
        return(
        <div className="slider">
                <Navbar />
                <div style={{ 'padding' : '10px 100px 30px 100px' }}>
                <div style={{ 'display' : 'grid', 'alignItems' : 'center' }}>
                    {this.props.children}
                </div>
                </div>
            </div>
        )
    }

}

export default Slider;
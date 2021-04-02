import React, { Component } from 'react';

import './Footer.css';

class Slider extends Component {

    render() {
        return(
            <div class="footer d-lg-flex justify-content-lg-between">
                <div class="links">
                    <a href="##">About Us</a>
                    <a href="##">Terms</a>
                    <a href="##">Privacy</a>
                    <a href="##">FAQ</a>
                    <a href="##">Contact</a>
                    <a href="##">Legal</a>
                    <a href="##">Report</a>
                    <a href="##">Functionality Feedback</a>
                    <a href="##">Others</a>
                </div>
                <div class="text-center" style={{ 'fontSize' : '20px' }}>
                    <a href="##" class="text-white px-3">
                        <i class="lab la-facebook"></i>
                    </a>
                    <a href="##" class="text-white px-3">
                        <i class="lab la-google-plus-g"></i>
                    </a>
                    <a href="##" class="text-white px-3">
                        <i class="lab la-linkedin"></i>
                    </a>
                    <a href="##" class="text-white px-3">
                        <i class="lab la-twitter"></i>
                    </a>
                </div>
            </div>
        )
    }

}

export default Slider;
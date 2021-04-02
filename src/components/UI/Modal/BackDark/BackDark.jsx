import React, { Component } from 'react';

import './BackDark.css';

class BackDark extends Component {

    render() {
        return(
            <>
                {this.props.showing ? <div className="BackDark" onClick={this.props.closing}></div> : null }
            </>
        )
    }

}

export default BackDark;
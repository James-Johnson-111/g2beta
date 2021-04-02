import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.PNG';

const TopBar = () => {
    return (
        <div className="w-100 px-5 bg-white" style={{ 'zIndex' : '999' }}>
            <Link to="/">
                <img src={Logo} width="90" />
            </Link>
        </div>
    );
}

export default TopBar;
import React from 'react';
import HeaderCss from './Header.module.css';

const Header = () => {
    return (
        <header className={HeaderCss.header}>
            <img src={'https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png'}/>
        </header>);
}

export default Header;
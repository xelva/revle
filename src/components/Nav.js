import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import home from '../img/icon-home.png'
import feed from '../img/icon-feed.png'
import chat from '../img/icon-chat.png'
import profile from '../img/icon-profile.png'
import logo from '../img/revler.png'

const Nav = () => {
    return (
        <div className="nav-main">
            <img className="nav-logo-left" src={logo} alt="nav-logo"/>
            <Link to="/vent"><img className="nav-icon" src={home} alt="home-icon"/></Link>
            <Link to="/feed/anon"><img className="nav-icon" src={feed} alt="feed-icon"/></Link>
            <img className="nav-logo-bottom" src={logo} alt="nav-logo"/>
            <Link to="/chat"><img className="nav-icon" src={chat} alt="chat-icon"/></Link>
            <Link to="/profile/anon"><img className="nav-icon" src={profile} alt="profile-icon"/></Link>
        </div>
    )
}

export default Nav;
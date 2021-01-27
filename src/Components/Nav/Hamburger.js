import React, {useState} from 'react';
import styles from './Hamburger.module.css';
import {menuContent, links} from "../Context/Context";

import {
    Link
  } from "react-router-dom";

function Hamburger(props) {

    const [ active, setActive ] = useState(false);
    const [ dropActive, setDropActive ] = useState(false);

    const handleDrop = () => {
        setDropActive(false);
        setActive(!active);
    }

    return (
        <div className={styles.wrapper}>
        <div className={active ? styles.expandHamburger : styles.hamburger}>
            <span className={styles.closeIcon} onClick={handleDrop}>{active 
            ? <i className="fas fa-times"></i> 
            : <i className="fas fa-bars"></i> }
            </span>
        {active ? 
            
            <div className={styles.mainMenu}>
                <ul>
                {links.map((link, index) => {
                    return (
                    <li key={index}>
                        <i className={link.icon}></i>
                        <Link onClick={handleDrop} to={link.router}>{link.title}</Link>
                    </li>)})}
                    <li onClick={() => setDropActive(!dropActive)}>
                        <i className="fas fa-angle-down"></i>
                        <Link to="/utbildning">Utbildning & Föreläsningar</Link>
                    </li>  
                </ul>
            </div> : null }
                { dropActive ? 
                <div className={styles.secondMenu}>
                    <ul>
                        {menuContent.map((content, index) => { return <li key={index}><Link onClick={handleDrop} to={content.router} >{content.title}</Link></li>})}
                    </ul>
                </div> : null }
        </div>  
        </div>
    );
}

export default Hamburger;
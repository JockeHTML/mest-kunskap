import React, { useState, useContext } from 'react';
import styles from './Nav.module.css';
import {menuContent, links} from "../Data/Data";
import Social from "./Social";
import Grid from '@material-ui/core/Grid';
import {HeadingContext} from "../Context/Context";

import {
    Link
  } from "react-router-dom";

function Nav() {

    /* useState hook used for showing data on hover or not */
    const [ onHover, setOnHover ] = useState();
    const { defaultHeading } = useContext(HeadingContext);

    return (
    <Grid container item xs={11} md={11} lg={11} id={styles.header}>
        <div className={styles.title}>
            <img src="" alt="apple"/>
            <h1>{defaultHeading}</h1>
        </div>

        <div className={styles.links}>
            <div className={styles.menu}>
                <ul>
                    {links.map((link, index) => {
                    return (
                    <li key={index}>
                        <Link to={link.src}>{link.title}</Link>
                    </li>)})}
                    <li onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
                        <i className="fas fa-angle-down"></i>
                        <Link to="/utbildning">Utbildning & Föreläsningar</Link>
                    <div className={onHover ? styles.hoverWrapper : null}
                        onMouseEnter={() => setOnHover(true)}
                        onMouseLeave={() => setOnHover(false)}>
                    <div className={ onHover ? styles.dropDown : null}>
                        { onHover ? 
                        <ul>
                            {menuContent.map((content, index) => { return <li key={index}><Link to={`${content.router}`} >{content.title}</Link></li>})}
                        </ul> : null }
                    </div>
                    </div>
                    </li>
                </ul>  
            </div>
            <Social/>
        </div>
        </Grid>
    );
}

export default Nav;
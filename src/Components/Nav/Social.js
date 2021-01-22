import React from 'react';
import styles from './Social.module.css';

function Social(props) {
    return (
        <div className={styles.social}>
                <li><a href="https://www.instagram.com"><i class="fab fa-instagram-square"></i></a></li>
                <li><a href="https://www.linkedin.com"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com"><i className="fab fa-facebook-square"></i></a></li>
            </div> 
    );
}

export default Social;
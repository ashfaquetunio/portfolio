import React from 'react'
import styles from './social.module.scss'
import {FiGithub, FiInstagram, FiLinkedin, FiTwitter} from 'react-icons/fi'


const Social = () => {
  return <>
    <ul className={styles.social}>
        <li><a href="#"><FiGithub className="link_icon"/></a></li>
        <li><a href="#"><FiInstagram className='link_icon'/></a></li>
        <li><a href="#"><FiTwitter className='link_icon'/></a></li>
        <li><a href="#"><FiLinkedin className='link_icon' /></a></li>
    </ul>
  </>
}

export default Social
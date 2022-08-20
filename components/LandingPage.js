import Nav from './Nav';
import MainBody from './MainBody';
import Footer from './Footer';

import styles from '../styles/LandingPage.module.css'

import React, { useEffect, useState } from 'react'

function landingPage() {
    return (
        <div className={styles.login_page_container}>
      <div className={styles.nav}>
        <Nav />
      </div>
      <div className={styles.main_body}>
        <MainBody />
      </div>
      <div>
        {/* <Footer /> */}
      </div>
    </div>
  )
}
export default landingPage

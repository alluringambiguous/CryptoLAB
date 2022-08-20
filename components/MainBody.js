import React from 'react'
import styles from '../styles/MainBody.module.css'

import Image from 'next/image'
import IMAGE from './Images/hero-ilustration.svg'

function MainBody() {
  return (
    <div className={styles.main_body_container}>
      <div className={styles.text}>
        <div className={styles.text_line}>Revolutionising the finance</div>
        <div className={styles.text_line}>market with the help of</div>
        <div className={styles.text_line}>NFT community</div>
        <button className={styles.sign_up_button}>
          Sign Up
        </button>
      </div>
      <div>
        <Image src={IMAGE} />
      </div>
    </div>
  )
}

export default MainBody

import React, { useState, useEffect } from 'react'
import UAuth from '@uauth/js'
import styles from '../styles/Nav.module.css'

//icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'
import { faRightFromBracket, faWallet } from '@fortawesome/free-solid-svg-icons'

import { faCode, faHighlighter } from '@fortawesome/free-solid-svg-icons'

const uauth = new UAuth({
  clientID: '2d1c3334-fe0f-48b4-a635-af406cf595f2',
  redirectUri: 'https://elegant-lolly-a1c0d3.netlify.app/',
  scope: 'openid wallet',
})

function Nav() {
  const [userWallet, setUserWallet] = useState(null)
  const [hover, setHover] = useState(0)

  //useEffect model
  useEffect(() => {
    // setUserWallet("Login With Unstoppable")
    uauth
      .user()
      .then((user) => {
        setUserWallet(user.sub)
        // user exists
        console.log('User information:', user)
      })
      .catch((err) => {
        console.log(err)
        // user does not exist
      })
  }, [])
  //login button
  const handleHover = () => {
    if (hover) {
      setHover(0)
    } else {
      setHover(1)
    }
  }
  const login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
      uauth.user().then((user) => {
        setUserWallet(user.sub)
        // user exist
        console.log('User information:', user)
      })
      console.log(authorization)
    } catch (err) {
      console.error(err)
    }
  }

  const logout = async () => {
    try {
      await uauth.logout()
      setUserWallet(null)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className={styles.nav_container}>
      <div className={styles.logo}>CryptoLAB </div>
      <div className={styles.login}>
        {userWallet ? (
          <div className={styles.signed_in}>
            <div  className={styles.signed_in_wallet}>
              
                <div className={styles.wallet_address}>{userWallet}</div>
              
            </div>
            <div className={styles.sign_out}>
              <div
                onClick={() => {
                  logout()
                }}
                className={styles.sign_out_button}
              >
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  size={{ width: '48px' }}
                />
              </div>
            </div>
          </div>
        ) : (
          <button onClick={() => login()} className={styles.login_button}>
            Login with Unstoppable
          </button>
        )}
      </div>
    </div>
  )
}

export default Nav

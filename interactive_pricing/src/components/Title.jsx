import React from 'react'
import styles from '../components/Title.module.css'
import circles from '../assets/pattern-circles.svg'

const Title = () => {
  return (
    <div className={styles.title}>
      <div className={styles.wording}>
        <h1>Simple, traffic-based pricing</h1>
        <p>Sign-up for our 30-day trial. No credit card required.</p>
      </div>
      <img className={styles.img} src={circles} alt='circles'/>
    </div>
  )
}

export default Title
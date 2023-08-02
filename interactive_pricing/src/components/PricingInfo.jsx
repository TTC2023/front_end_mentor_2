import React from 'react'
import styles from '../components/PricingInfo.module.css'
import slider from '../assets/icon-slider.svg'

const PricingInfo = () => {
  return (
    <div className={styles.pricingInfo}>
      <div>
        <p>100k Pageviews</p>
        <div>
          <h1>16</h1>
          <p>/ month</p>
        </div>
      </div>
      <img src={slider} alt="slider" />
    </div>
  )
}

export default PricingInfo
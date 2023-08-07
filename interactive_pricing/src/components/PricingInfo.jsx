import React, { useState, useEffect } from 'react'
import styles from '../components/PricingInfo.module.css'
import slider from '../assets/icon-slider.svg'

const PricingInfo = () => {
  const [sliderPosition, setSliderPosition] = useState(50); // Starts at 50% (middle)
  const [price, setPrice] = useState(16); // Starts at $16


  const handleSliderClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element
    const width = rect.right - rect.left; // total width of the element
    const positionPercent = (x / width) * 100;

    // Detecting which side of the slider was clicked
    if (positionPercent < 50 && sliderPosition > 0) {
      setSliderPosition(sliderPosition - 10);
      setPrice(price - 2);
    } else if (positionPercent >= 50 && sliderPosition < 100) {
      setSliderPosition(sliderPosition + 10);
      setPrice(price + 2);
    }
  }

  return (
    <div className={styles.pricingInfo}>
      <div className={styles.headline}>
        <p>100k Pageviews</p>
        <div className={styles.price}>
          <h1 className={styles.bold}>${price}</h1>
          <p>/ month</p>
        </div>
      </div>
      <div className={styles.priceLine} onClick={handleSliderClick}>
        <hr className={styles.leftLine} style={{width: `${sliderPosition}%`}}/>
        <hr className={styles.rightLine} style={{width: `${100-sliderPosition}%`}}/>
        <img className={styles.slider} src={slider} alt="slider" style={{left: `${sliderPosition}%`}} />
      </div>
      <div>

      </div>
    </div>
  )
}

export default PricingInfo






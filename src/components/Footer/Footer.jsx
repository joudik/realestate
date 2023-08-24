import React from 'react'
import './Footer.css'
export const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left */}
        <div className="flexColStart f-left">
          <img src="./logo2.png " alt="" width={120} />
          <span className="secondaryText">
            our vision is to make all people <br />
            find the best place for them
          </span>
        </div>
        {/* right*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 NEW YORK</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  )
}

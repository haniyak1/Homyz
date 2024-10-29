import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
// import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";

import r1 from '../../Images/r1.png';
import r2 from '../../Images/r2.png';
import r3 from '../../Images/r3.png';


const data = [
  { name: "Green Valley Park", price: "55,200", detail: "Green Valley Street No.5, Kebayoran, Jakarta Selatan, DKI Jakarta", image: r3 },
  { name: "Bukit Permata Indah", price: "72,450", detail: "Jalan Raya Bogor No.12, Cibinong, Bogor, Jawa Barat", image: r3 },
  { name: "Emerald Lake Residence", price: "45,900", detail: "Emerald Lake Blvd, Serpong, Tangerang, Banten", image: r2 },
  { name: "The Royal Grove", price: "68,300", detail: "Sunset Street No.9, Seminyak, Bali", image: r3 },
  { name: "Maha Karya City", price: "53,750", detail: "Main Boulevard No.7, Cimahi, Bandung, Jawa Barat", image: r2 },
  { name: "Grand Sagara Bay", price: "60,500", detail: "Ocean Drive, Benoa, Denpasar, Bali", image: r2 }
];




const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={()=> swiper.slidePrev()}>&lt;</button>
      <button onClick={()=> swiper.slideNext()}>&gt;</button>
    </div>
  );
};
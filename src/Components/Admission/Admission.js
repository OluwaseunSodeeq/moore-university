import React from "react";
import Wrapper from "../Ui/Wrapper";
import HeroSectioncard from "../Ui/HeroSectionCard";
import styles from "./Admission.module.css";
// import { Fade, Zoom, Slide } from "react-slideshow-image";
import { useState, useEffect } from "react";
const Admission = () => {
  const data = [
    {
      title: "Admissions are now open One!",
      content: "images/admission1.png",
      message: "Your pathway to success begins now! Embrace new possibilities",
    },
    {
      title: "Admissions are now open Two!",
      content: "images/admission1.png",
      message: "Your pathway to success begins now! Embrace new possibilities",
    },
    {
      title: "Admissions are now open Three!",
      content: "images/admission1.png",
      message: "Your pathway to success begins now! Embrace new possibilities",
    },
    {
      title: "Admissions are now open Four!",
      content: "images/admission1.png",
      message: "Your pathway to success begins now! Embrace new possibilities",
    },
  ];
  return (
    <Wrapper classes={styles.admission}>
      <Slider data={data} />
    </Wrapper>
  );
};
function Slider({ data }) {
  // let slideInterval;
  // const [currentSlide, SetCurrentSlide] = useState(0);
  // // const [slideInterval, SetSlideInterval] = useState(null);
  // const [autoScroll, SetAutoScroll] = useState(false);
  // const slidersLength = data.length;

  // // const autoScroll = true;
  // // let slideInterval;
  // const intervalTime = 3000;

  // // const prevSlide = () => {
  // //   SetCurrentSlide(currentSlide < 0 ? slidersLength - 1 : currentSlide - 1);
  // // };
  // const nextSlide = () => {
  //   SetCurrentSlide(currentSlide === slidersLength - 1 ? 0 : currentSlide + 1);
  // };

  // const autoSliding = () => {
  //   slideInterval = setInterval(nextSlide, intervalTime);
  // };
  // useEffect(() => {
  //   SetAutoScroll(true);
  //   SetCurrentSlide(0);
  // }, []);

  // useEffect(() => {
  //   if (autoScroll) {
  //     autoSliding();
  //   }
  //   // return () => clearInterval(slideInterval);
  // }, [currentSlide, slideInterval, autoScroll]);
  // Start
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [slideInterval, setSlideInterval] = useState(null);

  // const autoScroll = true;
  // const slideLength = data.length;

  // let slideInterval;

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  //   console.log("prev");
  // };
  /*
  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    let intervalTime = 5000;

    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
    function auto() {
      // slideInterval = setInterval(nextSlide, intervalTime);
      setSlideInterval(setInterval(nextSlide, intervalTime));
    }

    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoScroll, slideInterval, slideLength]);
*/
  // end
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = data.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    // console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    // console.log("prev");
  };
  console.log(prevSlide);

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    // <Slide>
    <div className={styles.slidersContainer}>
      {data.map((slider, index) => (
        <div
          className={
            currentSlide === index ? styles.currentSlide : styles.slide
          }
          key={index}
        >
          <HeroSectioncard title={slider.title} message={slider.message} />
          <div className={styles.imgBody}>
            <img src={slider.content} alt={slider.content.slice(7, -4)} />
          </div>
        </div>
      ))}
    </div>
  );
}
export default Admission;

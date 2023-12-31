import React from 'react';
import Slider from 'react-slick';
import { MouseParallaxContainer,MouseParallaxChild,} from 'react-parallax-mouse'
import Image from "next/legacy/image";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pg1 from "../public/pg1.png"
import login from "../public/login.png"
import site from "../public/site.png"
import art from "../public/art.png"


const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000, // ajuste o intervalo de tempo desejado em milissegundos
  };

  return (
    <div >
        <Slider {...settings}>
                <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave>
                <MouseParallaxChild factorX={0.2} factorY={0.3}>
        <div className=" shadow-lg p-2 rounded-xl m-4 bg-white dark:bg-white ">
            <Image src={pg1} alt="Imagem 1" />
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

                <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave>
                <MouseParallaxChild factorX={0.2} factorY={0.3}>
        <div className=" shadow-lg p-2 rounded-xl m-4 bg-white dark:bg-white ">
        <Image src={login} alt="Imagem 2" />
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

                <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave >
                <MouseParallaxChild factorX={0.2} factorY={0.3}>
        <div className=" shadow-lg p-2 rounded-xl m-4 bg-white dark:bg-white ">
        <Image src={art} alt="Imagem 2" />
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

                <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave>
                <MouseParallaxChild factorX={0.2} factorY={0.3}>
        <div className=" shadow-lg p-2 rounded-xl m-4 bg-white dark:bg-white ">
        <Image src={site} alt="Imagem 2" />
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

        </Slider>
    </div>
  );
};

export default Carousel;

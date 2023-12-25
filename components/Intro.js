import React from 'react';
import Slider from 'react-slick';
import { MouseParallaxContainer,MouseParallaxChild,} from 'react-parallax-mouse'
import Image from "next/image";


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import landing from "../public/landing.png"
import projetos from "../public/projetos.png"
import de from "../public/de.png"
import contato from "../public/contato.png"



const Intro = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
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
        <div className="font-sans backdrop-blur-mdbackdrop-opacity-25 shadow-lg p-6 rounded-3xl m-4 w-30 h-20 bg-white dark:bg-white  "> <span>LANDING PAGE </span>
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

                <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave>
                <MouseParallaxChild factorX={0.2} factorY={0.3}>
        <div className="font-sans backdrop-blur-mdbackdrop-opacity-25 shadow-lg p-6 rounded-3xl m-4 w-30 h-20 bg-white dark:bg-white "> <span classname> PROJETOS </span>
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

                <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave >
                <MouseParallaxChild factorX={0.2} factorY={0.3}>
        <div className="font-sans backdrop-opacity-25 shadow-lg p-6 rounded-3xl m-4 w-30 h-20 bg-white dark:bg-white "> <span classname> DESIGN </span>
        
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

                <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave>
                <MouseParallaxChild factorX={0.2} factorY={0.3}>
        <div className="font-sans backdrop-opacity-25 shadow-lg p-6 rounded-3xl m-4 w-30 h-20 bg-white dark:bg-white "> <span classname> CONTATO </span>
        
        </div>
                </MouseParallaxChild>
                </MouseParallaxContainer>

        </Slider>
    </div>
  );
};

export default Intro;

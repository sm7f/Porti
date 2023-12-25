import React from 'react';
import { MouseParallaxContainer,MouseParallaxChild,} from 'react-parallax-mouse'
import Image from "next/image";
import next from "../public/next.webp";
import react from "../public/react.png";
import python from "../public/python.png";
import postgre from "../public/postgre.png";
import aws from "../public/aws.png";
import ps from "../public/ps.png";
import figma from "../public/figma.png";
import qt from "../public/qt.png";
import { fadeIn } from '../variants'


const Habilidades = () => {
  return (
    <section>
    <div className=" shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-white ">
      <h3 className="text-3xl py-1 dark:text-gray-800 ">Sobre</h3>
          <MouseParallaxContainer globalFactorX={0.5} globalFactorY={0.4} resetOnLeave className="flex-1">
          <MouseParallaxChild factorX={0.1} factorY={0.1}>
      <p className="text-xl py-2 leading-8  dark:text-gray-800">
         Desde o início da minha trajetória como desenvolvedor e designer, tenho investido meu tempo em projetos para aprimorar habilidades em desenvolvimento, design gráfico e edição de vídeos. As atividades não apenas atendem às minhas demandas do dia a dia e desafios profissionais, mas também proporcionam momentos de entretenimento.
      </p>
          </MouseParallaxChild>
          </MouseParallaxContainer>
    </div>
    <div className="flex">
      {/*Coluna 1*/}
          <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave className="flex-1">
          <MouseParallaxChild factorX={0.2} factorY={0.3}>
          <div className=" m-4 text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-white ">
            <h3 className="text-lg font-medium pt-8 pb-2  ">
            Web Site
            </h3>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2"></div>
            <h4 className="py-4 text-teal-600">Ferramentas</h4>
            <Image src={next} width={100} height={100} className="inline-block align-baseline p-4"/>
            <Image src={react} width={100} height={100} className="inline-block align-baseline p-4"/>
            
          </div> 
          </MouseParallaxChild>
          </MouseParallaxContainer>
      {/*Coluna 2*/}
          <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave className="flex-1">
          <MouseParallaxChild factorX={0.2} factorY={0.3}>
          <div className="flex-1 m-4 text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-white">
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Desenvolvimento
            </h3>
            <div 
                variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'
                className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            </div>
            <h4 className="py-4 text-teal-600">Ferramentas</h4>
            <Image src={python} width={100} height={100} className="inline-block align-baseline p-4"/>
            <Image src={postgre} width={100} height={100} className="inline-block align-baseline p-4"/>
            <Image src={aws} width={100} height={100} className="inline-block align-baseline p-4"/>
          </div>
          </MouseParallaxChild>
          </MouseParallaxContainer>

      {/*Coluna 3*/}
          <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave className="flex-1">
          <MouseParallaxChild factorX={0.2} factorY={0.3}>
          <div className="flex-1 m-4 text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-white">
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Design Grafico
            </h3>
            <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
            </div>
            <h4 className="py-4 text-teal-600">Ferramentas</h4>
            <Image src={ps} width={100} height={100} className="inline-block align-baseline p-4"/>
            <Image src={figma} width={100} height={100} className="inline-block align-baseline p-4"/>
            <Image src={qt} width={100} height={100} className="inline-block align-baseline p-4"/>
          </div>
          </MouseParallaxChild>
          </MouseParallaxContainer>
        </div>    
  </section>

  );
};

export default Habilidades;

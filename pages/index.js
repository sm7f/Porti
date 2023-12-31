import Head from "next/head";
import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine, RiLinkedinLine, RiGithubFill} from 'react-icons/ri'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import { motion} from 'framer-motion'
import { fadeIn } from '../variants'
import Intro from "../components/Intro"
import Carousel from "../components/Carousel";
import Habilidades from "../components/Habilidades";
import deved from "../public/portfoto.png";
import Image from "next/image";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Herberth Amorim</title>
        <meta name="description" content="Meu Portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-slate-200 px-10 dark:bg-gray-900 md:px-20 lg:px-40 scroll-smooth md:scroll-auto">
        <section className="min-h-screen">
          <nav className="py-3 mb-8 flex justify-between dark:text-white">
            <h1 className="font-Roboto_Mono text-xl bg-red-500 text-white py-3 px-4 rounded cursor-pointer">
              <Link  href={'https://www.youtube.com/channel/UCpKC6cfaRhoKr2k966yCf1w'}>
                <RiYoutubeLine className="shadow-lg"/>
              </Link>
            </h1>
            <ul className="flex items-center">
              <li><span>Modo Noturno</span>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-xl"
                />
              </li>
              <li>
                <a href="#">
                </a>
              </li>
            </ul>
          </nav>
          <motion.div 
              variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden'
              className="text-center p-10 py-2 bg-cover">

            <h2 className="text-5xl py-2  text-cyan-500 font-medium dark:text-teal-400 md:text-6xl">
              Herberth Amorim
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer FullStack e Designer
            </h3>
            <p className=" text-center text-md py-2 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Developer, Design Gráfico & Editor de Videos. Sinta-se à vontade para entrar em contato.</p>
            <p className=" text-center text-md py-1 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl" >
              </p>
            <div className=" cursor-pointer text-5xl flex justify-center gap-16 py-3 text-white-100 dark:text-gray-400">
              <Link href={'https://www.instagram.com/heberthamorim/'}>
                <RiInstagramLine />
              </Link>
              <Link href={'https://www.linkedin.com/in/herberth-amorim-6883321a0/'}>
                <RiLinkedinLine />
              </Link>
              <Link href={'https://github.com/sm7f'}>
                <RiGithubFill />
              </Link>
            </div>
            <div 
              className="mx-auto rounded-full w-80 h-80 relative overflow-hidden mt-30 md:h-50 md:w-50">
              <Image
                src={deved}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover"
                }} />     
            </div>

             {/* Carousel */}    
            <Intro></Intro>
          </motion.div>
        </section>
        <Habilidades></Habilidades>
        <section className="py-10 ">
          <div className="shadow-lg p-10 rounded-xl my-10  bg-white dark:bg-white">
            <h3 className="text-3xl py-1  dark: text-gray-800  ">Projetos</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-800">

              Meus projetos podem ser explorados em detalhes em meu perfil no <span className="text-teal-500"> GitHub. </span>
            </p>
            <Carousel></Carousel>
          </div>
        </section>
      </main>
    </div>
  );
}
import {Particles} from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React, {useCallback} from 'react'



const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => { await loadFull(engine);
  }, []);

  const particulesLoaded = useCallback(async () => {}, []);




  return ( 
  <Particles 
    className='inset-x-0 bottom-0 h-80 max-h-full'
    id='tsparticles' 
    init={particlesInit} 
    loaded={particulesLoaded}
    options={{
      fullScreen:{enable: false},
      background: {
        color: {
          value: '',
        },
      },
      fps_limit:120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push',
          },
          onHover:{
            enable:true,
            mode:'repulse'
          },
          resize:true,
        },
        modes: {
          push: {
            quantity:100
          },
          repulse: {
            distance:200,
            duration: 0.4,
          }
        }
      },
      particles: {
        color:{
          value: '#90ddfe'
        },
        links:{
          color: '#90ddfe',
          distance:150,
          enable:true,
          opacity: 0.5,
          with: 5
        },
        collisions:{
          enable:true,
        },
        move: {
          direction: 'none',
          enable:true,
          outModes: {
            default:'bounce'
          },
          random: false,
          speed:1,
          straight:false
        },
        number:{
          density:{
            enable:true,
            area:800
          },
          value:80
        },
        opacity:{
          value:0.9,
        },
        shape: {
          type:'circle'
        },
        size: {
          value: {min: 1, max: 5},
        },
      },
      detectRetina: true,
    }}  
    /> 
  ); 
};

export default ParticlesContainer;

import React from 'react';
import rf from '../images/Robot-framework.png';
import gcp from '../images/GCP.png';
import python from '../images/Python.png';
import k8s from '../images/K8s.png';
import jm from '../images/JMeter-Logo.png';
import kafka from '../images/Kafka.png';
import selenium from '../images/selenium-logo.png';
import testng from '../images/TestNG.png';
import Particles from 'react-particles-js';
import particlesConfig from './particlesConfig2';
const Content = () => {
  return (
    <>
      <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw" params={particlesConfig} />
        </div>
        <div className='h-screen'>
        <div className='center-content'>
          <h2 className='text-2xl mb-2 font-mono text-xl underline text-center'>Tech Stack most experienced with</h2>
          {/* <p className='mb-2'>Cripsy, delicious, and nutritious</p>
          <span>$16</span> */}
        </div>
      <div className='h-auto w-auto menu-card flex-wrap flex flex-grow container mx-auto space-y-2 lg:space-y-0 space-x-2 lg:space-x-0 lg:gap-2 lg:grid lg:grid-cols-4 col-auto lg:grid-rows-2'>
        <img src={python} alt='python' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-purple-400 transition duration-300 ease-in-out flex items-center animate-pulse " />
        <img src={rf} alt='rf' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-red-300 transition duration-300 ease-in-out flex items-center animate-pulse" />
        <img src={kafka} alt='kafka' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-purple-400 transition duration-300 ease-in-out flex items-center animate-pulse" />
        <img src={k8s} alt='Kubernetes' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-red-300 transition duration-300 ease-in-out flex items-center animate-pulse" />
        <img src={gcp} alt='GCP' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-purple-400 transition duration-300 ease-in-out flex items-center animate-pulse" />
        <img src={jm} alt='JMeter' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-red-300 transition duration-300 ease-in-out flex items-center animate-pulse" />
        <img src={selenium} alt='Selenium' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-purple-400 transition duration-300 ease-in-out flex items-center animate-pulse" />
        <img src={testng} alt='testNG' class="w-20 h-20 shadow rounded-full max-w-full h-auto align-middle border-none hover:bg-red-300 transition duration-300 ease-in-out flex items-center animate-pulse" />

      </div>
      </div>
      
    </>
  );
};

export default Content;
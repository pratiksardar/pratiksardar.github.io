import React from 'react'
import {Link} from 'react-router-dom'


const Hero = () => {
    return (
        <div className="bg-white h-screen flex flex-col justify-center items-center">
            <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14 transition duration-1500 ease-in-out animate-ping'>
                Hello...
            </h1>
            <Link className = 'py-5 px-10 bg-purple-200 rounded-full text-3xl  hover:bg-purple-400 transition duration-300 ease-in-out flex items-center animate-pulse'>                
                🐱 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" ml-4>
            <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
            </svg>
            </Link>
        </div>
    )
}

export default Hero;
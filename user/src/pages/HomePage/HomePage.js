import React from 'react'
import Hero from './HomeSection/Hero'
import About from './HomeSection/About/About'
import Contact from './HomeSection/Contact/Contact'

export default function HomePage() {
    
    return (
        <div
        id="top"
        className=" bg-white dark:bg-[#242424] dark:text-white transition ease-in-out font-poppins">
            <Hero/>
            <About/>
            <Contact/>
        </div>
    )
}

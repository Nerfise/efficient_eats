import React from 'react'
import { useNavigate } from 'react-router-dom'


const Hero = () => {
  const navigate = useNavigate();

  return (
    <div
    id="home"
    className="
      verflow-hidden transition ease-in-out w-full max-h-fit md:h-screen py-16 px-4 flex flex-row items-center"
    style={{
      backgroundImage: `url("https://i.pinimg.com/originals/dc/fa/9c/dcfa9caf66f799a789ba2b2bf1b9f420.gif")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 grid-reverse p-2 md:mt-[-80px]">
      <div
        initial="hidden"
        transition={{ duration: 1 }}
      >
        
      </div>
      <div
        initial="hidden"
        transition={{ duration: 1 }}
        className="flex flex-col justify-start items-start" 
      >
        <div className="text-6xl font-semibold text-bold mb-4"> {/* Added text-bold class */}
          <h1
            initial={{ x: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="gradient-text"
          >
            EFFICIENT EATS
          </h1>
        </div>
        <div className="text-lg font-semibold text-left text-white dark:text-gray-300 mb-6">
          Restaurant Booking Website
        </div>

        <p className="py-7 text-lg text-white dark:text-gray-300 text-left">
          <span

            className="relative inline-block"
          >
            <span
              className="block font-bold" 
            >
              Efficient Eats is a formal restaurant that aims to 
              provide and improve operational efficiency while also 
              improving the overall customer experience. 
              This all-inclusive system provides a complete approach 
              to managing numerous elements of restaurant operations, 
              such as ordering, inventory management, scheduling, and 
              customer relationship management.
            </span>
            <br />
    <br />
    <br /><br />
    <br />
    
            
          </span>
        </p>
        <div className="flex flex-row gap-4 mb-9 justify-start items-start"> 
            <div
              className="hover:scale-125 text-gray-800 dark:text-gray-200 transition ease-in-out"
              onClick={() => navigate("/home/reservation")}
              style={{
                background: "#E63946",
                color: "white",
                padding: "10px 20px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Reserve Now!
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero
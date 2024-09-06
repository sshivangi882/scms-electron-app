import React from 'react'
import startImg from '../assets/startingPage.png'
import './output.css'

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 md:flex-row ">
      {/* Image Container */}
      <div className="flex justify-center mb-6 md:justify-start md:mr-8 md:mb-0">
        <img
          className="w-full md:w-[710px] max-w-full h-auto object-cover rounded-lg"
          src={startImg}
          alt="logo"
        />
      </div>

      {/* Button Container Centered */}
      <div className="flex flex-col justify-center flex-grow space-y-4 md:space-y-5 ">
        <button className="px-8 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600">
          Administration
        </button>
        <button className="px-8 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600">
          Teacher
        </button>
        <button className="px-8 py-2 text-white transition duration-300 ease-in-out bg-blue-500 rounded-lg hover:bg-blue-600">
          Student
        </button>
      </div>
    </div>
  )
}

export default Index

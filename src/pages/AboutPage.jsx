import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          My Name is Hesam Shahmoradi OR DRACLYR
          <br />
          I have been a front-end developer for 7 years I was born in Tehran and I am skilled in my profession. My goal is unique and rare design in the web field
        </p>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage
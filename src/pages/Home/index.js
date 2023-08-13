import React from "react"
import "./index.scss"
import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import { AnimatedLetters } from "../../components/Animation"
import { useEffect, useState } from "react"
import { Logo } from "../../components/Logo"
import Loader from "react-loaders"
const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["i", "s", "h", "c", "h", "a", "y"]
  const jobArray = [
    "F",
    "u",
    "l",
    "l",
    " ",
    "S",
    "t",
    "a",
    "c",
    "k",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
  ]
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i </span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>{"'m "} </span>
            <span className={`${letterClass} _15`}> </span>
            <img src={LogoTitle} alt="Developer" />
            <AnimatedLetters
              letterclass={letterClass}
              strArray={nameArray}
              indx={15}
            />
            <br />
            <AnimatedLetters
              letterclass={letterClass}
              strArray={jobArray}
              indx={22}
            />
          </h1>
          <h2>Fullstack Developer / Rust Developer / App Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home

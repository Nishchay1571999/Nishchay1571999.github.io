import React, { useEffect, useState } from "react"
import { AnimatedLetters } from "../../components/Animation"
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faJava,
  faJsSquare,
  faNodeJs,
  faReact,
  faRust,
} from "@fortawesome/free-brands-svg-icons"
import { faC } from "@fortawesome/free-solid-svg-icons"
import Loader from "react-loaders"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterclass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "M", "e"]}
              indx={22}
            />
          </h1>
          <p>
            I'm a very ambitious Full-Stack Developer looking for a role in
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>

          <p>
            I'm quietly confident, naturally curious and perpetually working on
            improving my chops one task at a time.
          </p>
          <p>
            If I have to define myself in one sentence that would be family
            person, a son, a sports enthusiast and tech-obsessed.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="blue" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faNodeJs} color="#ffd700" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faRust} color="#DD0020" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#ffd700" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faC} color="#fff" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faJava} color="#ff0000" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About

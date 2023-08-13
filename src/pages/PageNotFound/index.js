import React, { useEffect, useState } from "react"
import { AnimatedLetters } from "../../components/Animation"
import "./index.scss"

const PageNotFound = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])
  return (
    <div className="container page-not-found">
      <span className="title">
        <AnimatedLetters
          letterclass={letterClass}
          strArray={[
            "P",
            "a",
            "g",
            "e",
            " ",
            "N",
            "o",
            "t",
            " ",
            "F",
            "o",
            "u",
            "n",
            "d",
          ]}
          indx={15}
        />
      </span>
    </div>
  )
}

export default PageNotFound

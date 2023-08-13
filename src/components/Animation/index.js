import React from "react"
import "./index.scss"

const AnimatedLetters = ({ letterclass, strArray, indx }) => {
  return (
    <span>
      {strArray.map((char, i) => {
        return (
          <span key={char + i} className={`${letterclass} _${i + indx}`}>
            {char}
          </span>
        )
      })}
    </span>
  )
}

export { AnimatedLetters }

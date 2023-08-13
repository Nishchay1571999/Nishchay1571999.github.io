import Loader from "react-loaders"
import "./index.scss"
import { AnimatedLetters } from "../../components/Animation"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        "service_117lxug",
        "template_11dij8r",
        refForm.current,
        "ZLXcAE4s_tTe5dpYm"
      )
      .then(() => {
        alert("Message Successfully sent")
        window.location.reload(false)
      })
      .catch((err) => {
        console.log(err)
        alert("Error sending email Please try again")
      })
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterclass={letterClass}
              indx={15}
              strArray={["C", "o", "n", "t", "a", "c", "t", " ", "M", "e"]}
            />
          </h1>
          <p>
            I'm intrested in freelancing opportunities and full time
            opportunities in Web Development or Mobile App Development -
            Especially ambitious for large projects. However, If you have other
            request or questions, do not hesitate to contact me using below form
            either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name..."
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message..."
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact

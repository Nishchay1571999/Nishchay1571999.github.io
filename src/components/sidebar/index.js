import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoN from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faHome,
  faProjectDiagram,
  faSuitcase,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoN} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Nishchay Bhatt" />
      </Link>
      <nav>
        <NavLink extract="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink
          extract="true"
          activeclassname="active"
          to="/about"
          className={"about-name"}
        >
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink
          extract="true"
          activeclassname="active"
          to="/contact"
          className={"contact-form"}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
        <NavLink
          extract="true"
          activeclassname="active"
          to="/blogs"
          className={"blogs-page"}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#fff" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            className="linkedin-icon"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nishchay-bhatt-676b95159/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            className="github-icon"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Nishchay1571999"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            className="leetcode-icon"
            target="_blank"
            rel="noreferrer"
            href="https://leetcode.com/nishchayBhatt/"
          >
            <FontAwesomeIcon icon={faProjectDiagram} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar

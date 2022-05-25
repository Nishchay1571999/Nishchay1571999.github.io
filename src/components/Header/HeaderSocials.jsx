import React from 'react'
import {BsLinkedin,BsTwitter,BsGithub} from 'react-icons/bs'
import {AiOutlineDribbbleSquare} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className="header_social">
        <a 
        href="https://www.linkedin.com/in/nishchay-bhatt-676b95159/"
        target="_blank">
            <BsLinkedin/>
        </a>
        <a 
        href="https://github.com/Nishchay1571999"
        target="_blank">
            <BsGithub/>
        </a>
        <a 
        href="https://twitter.com/basement_wolfe"
        target="_blank">
            <BsTwitter/>
        </a>
    </div>
  )
}

export default HeaderSocials
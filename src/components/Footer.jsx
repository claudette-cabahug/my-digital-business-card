import React from "react"
import { 
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub
 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer>
      <li><FontAwesomeIcon icon={faLinkedin} size="lg"/></li>
      <li><FontAwesomeIcon icon={faFacebook} size="lg"/></li>
      <li><FontAwesomeIcon icon={faInstagram} size="lg"/></li>
      <li><FontAwesomeIcon icon={faGithub} size="lg"/></li>
    </footer>
  )
}

// icons to add:
// facebook / instagram / linkedin / github
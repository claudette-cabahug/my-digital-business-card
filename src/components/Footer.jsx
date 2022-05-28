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
      <FontAwesomeIcon icon={faLinkedin} />
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faInstagram} />
      <FontAwesomeIcon icon={faGithub} />
    </footer>
  )
}

// icons to add:
// facebook / instagram / linkedin / github
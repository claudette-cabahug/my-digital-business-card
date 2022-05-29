import React from "react"
import { 
  faLinkedin,
  faFacebook,
  faInstagram,
  faGithub
 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  let urlLinkedIn = "https://www.linkedin.com/in/claudettecabahug/"
  let urlFacebook = "https://www.facebook.com/cmontescabahug"
  let urlInstagram = "https://www.instagram.com/onclaude9/?hl=en"
  let urlGithub = "https://github.com/claudette-cabahug"

  return (
    <footer>
      <li>
        <a href={urlLinkedIn}>
          <FontAwesomeIcon icon={faLinkedin} size="lg"/>
        </a>
      </li>
      <li>
        <a href={urlFacebook}>
          <FontAwesomeIcon icon={faFacebook} size="lg"/>
        </a>
      </li>
      <li>
        <a href={urlInstagram}>
          <FontAwesomeIcon icon={faInstagram} size="lg"/>
        </a>
      </li>
      <li>
        <a href={urlGithub}>
          <FontAwesomeIcon icon={faGithub} size="lg"/>
        </a>
      </li>
    </footer>
  )
}

// icons to add:
// facebook / instagram / linkedin / github
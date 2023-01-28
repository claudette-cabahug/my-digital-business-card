import React from "react"
import photo from "../images/claudette.jpg"
import About from './About'
import Interests from './Interests'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  let url ="https://beforeforty.hashnode.dev/"
  return (
    <>
      {/* eslint-disable-next-line */}
      <img src={photo} alt="cover photo" />
      <div className="details--outer_container">
        <h1 className="details--name">Claudette Cabahug</h1>
        <h3 className="details--job_title">Fullstack Web Developer</h3>
        <a className="url--blogsite" href={url}>beforeforty.hashnode.dev</a>
        <div className="button-div">
          <button className="email--text">
              <a href="mailto:claudette.cabahug@outlook.com?subject=Hello Claudette">
                <FontAwesomeIcon icon={faEnvelope} size="lg"/>
              </a>
          </button>
          <button>
              <a href="tel:+64211443593">
                <FontAwesomeIcon icon={faPhone} size="lg"/>
              </a>
          </button>
        </div>
        <div className="details--inner_container">
          <About />
          <Interests />
        </div>
      </div>     
    </>
  )
}

// https://beforeforty.hashnode.dev/
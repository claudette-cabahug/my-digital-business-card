import React from "react"
import photo from "../images/claudette.jpg"
import About from './About'
import Interests from './Interests'

export default function Info() {
  let url ="https://beforeforty.hashnode.dev/"
  return (
    <>
      {/* eslint-disable-next-line */}
      <img src={photo} alt="cover photo" />
      <div className="details--outer_container">
        <h1 className="details--name">Claudette Cabahug</h1>
        <h3 className="details--job_title">Fullstack Web Developer</h3>
        <a href={url}>beforeforty.hashnode.dev</a>
        <button className="email--text">Email</button>
        <div className="details--inner_container">
          <About />
          <Interests />
        </div>
      </div>     
    </>
  )
}

// https://beforeforty.hashnode.dev/
import React from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faWolfPackBattalion,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', '', 'M', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hello my name is Filip and I enjoy creating things that live on the
          internet. My interest in web development started back in 2022 when I
          decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <p>
          Fast-forward to today, and I’ve had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React. Here are a
          few technologies I’ve been working with recently.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face2">
            <FontAwesomeIcon icon={faWolfPackBattalion} color="#1d1d1d" />
          </div>
          <div className="face1">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faGitAlt} />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faJsSquare} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

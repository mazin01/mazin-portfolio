import React from 'react'
import { Link } from 'react-router-dom'
import enveloperegular from '../imges/enveloperegular.svg'
import githubbrands from '../imges/githubbrands.svg'
import linkedinbrands from '../imges/linkedinbrands.svg'

export const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="content">
                    <h1>Hello There</h1>
                    <p>My name is mazin, front-end web developer with medium experience, currently I'm using ReactJS as a framework.</p>
                    <p>and ...</p>
                </div>
                <div className="contact">
                    <h1>Contact me</h1>
                    <div className="links">
                        <Link to="/send_email"><img src={enveloperegular} alt="" /></Link>
                        <a href="https://github.com/mazin01/"><img src={githubbrands} alt="" /></a>
                        <a href="https://www.linkedin.com/in/mazin-esam"><img src={linkedinbrands} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

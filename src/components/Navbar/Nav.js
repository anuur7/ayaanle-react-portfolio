import './Nav.css'
import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className="nav">
            <ul>
                <li> <a href="/about">About</a></li>
                <li> <a href="/projects">Projects</a></li>
                <li> <a href="/form">Contact</a></li>
                <li> <a target="_blank" href="/images/May2022CV.pdf">CV 📄</a></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav

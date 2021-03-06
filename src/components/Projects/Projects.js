import './Projects.css'
import React from 'react'
import Cards from '../Cards/Cards'
import Project1 from '../../images/Project1.png'
import WeatherApp from '../../images/weatherapp.png'
import Calender from '../../images/calender.png'
import Generator from '../../images/generator.png'
import Horiseon from '../../images/horiseon.png'
import Project2 from '../../images/project2.png'
import Notes from '../../images/notes.png'

const Projects = () => {
    const cards = [
        {
          id: 1,
          title: <h3>Project 1</h3>,
          github: <h4><a href="https://github.com/anuur7/AHA-5-Food-">Github</a></h4>,
          image: <a class="link-image" href="https://anuur7.github.io/AHA-5-Food-/" target="_blank"><img src={Project1} alt="Project 1 web page"/></a>,
        },
        {
          id: 2,
          title: <h3>Weather App</h3>,
          github: <h4><a href="https://github.com/anuur7/Weather-Dashboard-Project">Github</a></h4>,
          image: <a class="link-image2" href="https://anuur7.github.io/Weather-Dashboard-Project/" target="_blank"><img src={WeatherApp} alt="Weather App web page"/></a>,
        },
        {
          id: 3,
          title: <h3>Work Scheduler</h3>,
          github: <h4><a href="https://github.com/anuur7/Work-Day-Scheduler-Project">Github</a></h4>,
          image: <a class="link-image2" href="https://anuur7.github.io/Work-Day-Scheduler-Project/" target="_blank"><img src={Calender} alt="Work-Day Scheduler web page"/></a>,
        },
        {
          id: 4,
          title: <h3>Password Generator</h3>,
          github: <h4><a href="https://github.com/anuur7/password-generator-project">Github</a></h4>,
          image: <a class="link-image2" href="https://anuur7.github.io/password-generator-project/" target="_blank"><img src={Generator} alt="Password Generator web page"/></a>,
        },
        {
          id: 5,
          title: <h3>Horiseon</h3>,
          github: <h4><a href="https://github.com/anuur7/Adjust-horiseon-website">Github</a></h4>,
          image: <a class="link-image2" href="https://anuur7.github.io/Adjust-horiseon-website/" target="_blank"><img src={Horiseon} alt="Horiseon web page"/></a>,
        },
        {
          id: 6,
          title: <h3>Project 2</h3>,
          github: <h4><a href="https://github.com/anuur7/charity-directory">Github</a></h4>,
          image: <a class="link-image2" href="https://aqueous-brook-09754.herokuapp.com/" target="_blank"><img src={Project2} alt="Charity web page"/></a>,
        },
        {
          id: 7,
          title: <h3>Notes App</h3>,
          github: <h4><a href="https://github.com/anuur7/Notes-App-Express">Github</a></h4>,
          image: <a class="link-image2" href="https://secure-woodland-21895.herokuapp.com/notes" target="_blank"><img src={Notes} alt="Notes web page"/></a>,
        },
        ]

    return (
        <div id="projects" className="projects">
            <div className="sub-projects">
            <h2>Projects</h2>
        </div>
          <Cards cards={cards}/>
        </div>
    )
}

export default Projects

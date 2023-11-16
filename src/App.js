import React, { useState, useRef } from 'react';
import ReactToPrint from 'react-to-print';
import image from './img/imgHelper';
import './App.css';

// Fancy three color line
const FancyLine = ({ color1, color2, color3, size }) => {
  return (
    <div style={{ display: 'flex', marginTop: '0.5em' }}>
      <div style={{ backgroundColor: color1, width: '33.33%', height: size, borderTopLeftRadius: '2px', borderBottomLeftRadius: '2px' }}></div>
      <div style={{ backgroundColor: color2, width: '33.33%', height: size, borderTopLeftRadius: '1px', borderBottomLeftRadius: '1px' }}></div>
      <div style={{ backgroundColor: color3, width: '33.33%', height: size, borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}></div>
    </div>
  )
}

// Contact Section
const ContactBox = () => {
  return (
    <div className='contacts'>
      <div className='row'><img src={image.email} height={25} style={{ marginRight: '0.75em' }} alt=''></img>damann1072@gmail.com</div>
      <div className='row'><img src={image.phone} height={25} style={{ marginRight: '0.75em' }} alt=''></img>(205) 936-3366</div>
      <div className='row'><img src={image.location} height={25} style={{ marginRight: '0.75em' }} alt=''></img>Birmingham, AL</div>
      <div className='row'><img src={image.linkedIn} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
        <a href='https://www.linkedin.com/in/mann-dan' target='_blank' rel='noreferrer'>linkedin.com/in/mann-dan</a>
      </div>
      <div className='row'><img src={image.github} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
        <a href='https://github.com/ZnMind' target='_blank' rel='noreferrer'>github.com/ZnMind</a>
      </div>
      <div className='row'><img src={image.site} height={25} style={{ marginRight: '0.75em' }} alt=''></img>
        <a href='https://dmann.netlify.app' target='_blank' rel='noreferrer'>dmann.netlify.app</a>
      </div>
    </div>
  )
}

// Skills Section
const SkillBox = () => {
  const skillset = [
    'JavaScript (ES6)', 'Express.js', 'MySQL', 'HTML5', 'Bootstrap',
    'React', 'Next.js', 'MongoDB', 'CSS', 'WordPress',
    'Node.js', 'Redux', 'Firebase', 'UI Design', 'Agile Methodologies'
  ];

  return (
    <div className='skills'>
      <div className='header'>
        <img src={image.skills} alt='' height={25} style={{ marginRight: '0.5em' }}></img>
        <h3 style={{ width: '100%', marginTop: '0', marginBottom: '0', color: '#373a41', marginLeft: '-0' }}>SKILLS</h3>
      </div>
      {skillset.map((data, index) => (
        <p key={index} style={{ width: '20%' }}>{data}</p>
      ))}
    </div>
  )
}

// Experience Section
const WorkBox = () => {
  const titles = ['Web Developer (Contract)', 'Web Developer (Contract)', 'Full Stack Web Developer'];
  const companies = ['Relay', 'Innov8tive Strategies, LLC', 'Innovate Birmingham'];
  const dates = ['06/2023 - Present', '07/2022 - 06/2023', '12/2021 - 05/2022'];
  const bullets = [
    [
      <small>
        Enhancing data monitoring efficiency by integrating the <b>Front-End</b> website with the <b>Back-End</b> CRM system, and
        administering seamless data synchronization, resulting in a marked increase in data tracking and accuracy
      </small>,
      <small>Increasing <b>WordPress</b> site indexability by a significant margin through plugins such as <b>YoastSEO</b></small>,
      <small>
        Designing and implementing a webscraping software tool using <b>Node.js</b>, <b>Express</b>, and <b>Cheerio</b> to effectively
        scrape and give reports on site structure and ensure all <b>SEO</b> best practices are met
      </small>,
      <small>Elevating <b>UX/UI</b> attractiveness and performance through utilizing <b>jQuery</b> and unique <b>CSS</b> stylings</small>
    ],
    [
      <small>Collaborated with the CEO to improve company website <b>UI/UX design</b>, performance, and reliability</small>,
      <small>Designed and implemented an <b>API</b> using <b>RESTful</b> services to enable real-time integration of a live Instagram feed</small>,
      <small>Improved website traffic through identifying and applying <b>SEO</b> best practices</small>,
      <small>Consulted with non-profit clients to grow their own web presence and, through that, their impact in the community</small>
    ],
    [
      <small><b>Web development</b> boot camp to improve my <b>JavaScript</b> proficiency and challenge my <b>coding</b> ability</small>,
      <small>Actively developed <b>Front-End</b> applications using <b>React</b> with features such as <b>React Hooks</b> and <b>React Router</b></small>,
      <small>
        Built <b>API</b> and <b>Back-End</b> architecture with <b>Node.js</b> and <b>Express</b>,
        as well as designed a relational database with <b>MySQL</b> to handle robust data sets
      </small>
    ]
  ];

  return (
    <>
      <div className='header'>
        <img src={image.work} alt='' height={25} style={{ marginRight: '0.5em' }}></img>
        <h3 style={{ width: '100%', marginTop: '0', marginBottom: '0', color: '#373a41' }}>EXPERIENCE</h3>
      </div>

      <div style={{ display: 'flex' }}>
        <div>
          {titles.map((title, index) => (
            <div key={index} style={{ marginLeft: 'calc(25px / 2 - 4px)' }}>
              {index > 0 ? <div className='new-listing'></div> : ''}
              <div style={{ display: 'flex', alignItems: 'center' }}><div className='circle'></div><h4 className='job'>{title}</h4></div>

              <div style={{ display: 'flex' }}>
                <div style={{ borderLeft: '2px solid #373a41', width: '0px', marginLeft: '3px', marginRight: '5px' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <h4 className='company'>{companies[index]}</h4>
                  <small className='date'>{dates[index]}</small>

                  {bullets[index].map((bullet, i) => (
                    <div key={i} className='bullet-row'>
                      <div className='bullet-box'><div className='bullet'></div></div>
                      {bullet}
                    </div>
                  ))}

                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </>
  )
}

// Education Section
const EducationBox = () => {
  const bullets = [
    <small>Project based learning through coursework with a strong emphasis on <b>leadership</b> and <b>teamwork</b> in a group setting</small>,
    <small>Relevant coursework: Information systems design, Object-Oriented Programming, Data Structures and Algorithms,
      Software Development, Computer Science, Database Management Systems, CI/CD, Git, Responsive Web Design</small>
  ];

  return (
    <>
      <div className='header'>
        <img src={image.school} alt='' height={30} style={{ marginRight: '0.5em' }}></img>
        <h3 style={{ width: '100%', marginTop: '0', marginBottom: '0', color: '#373a41', marginLeft: '-0.1em' }}>EDUCATION</h3>
      </div>

      <div style={{ display: 'flex', marginLeft: 'calc(30px / 2 - 4px)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center' }}><div className='circle'></div><h4 className='job'>University of Alabama at Birmingham</h4></div>
          <div style={{ display: 'flex' }}>
            <div style={{ borderLeft: '2px solid #373a41', width: '0px', marginLeft: '3px', marginRight: '5px' }}></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 className='company'>Bachelor of Science in Information Systems</h4>

            {bullets.map((bullet, index) => (
              <div key={index} className='bullet-row'>
                <div className='bullet-box'><div className='bullet'></div></div>
                {bullet}
              </div>
            ))}
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

/*  
  Not Implemented.
  Potential list of key words/phrases hidden behind the resume to attempt to get past ATS and have a real person see the resume.
  Seems unethical so won't be included. Fun to experiment, though.
 */
const ATSKeywords = () => {
  let keys = [];

  return (
    <div className='ats'>
      {keys.map((data, index) => (
        <div key={index} style={{ marginRight: '0.5em' }}>{data}</div>
      ))}
    </div>
  )
}

/* 
  Not Implemented.
  Just a test to see what would happen
*/
const Hover = () => {
  const [hover, setHover] = useState(false);

  return (
    <div className='hover' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      <b style={{ fontSize: 'large', color: 'white' }}>ⓘ</b>
      {
        hover
          ? <div className='hover-box'>
            <p>I wrote and designed this resume entirely from scratch in React!</p>
            <p><a href='https://github.com/ZnMind/Resume' target='_blank' rel='noreferrer' style={{ color: 'steelblue' }}>Link</a></p>
          </div>
          : ""
      }
    </div>
  )
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className='container'>
          <h1 className='name' style={{ marginTop: '0.25em' }}>Daniel Mann</h1>
          <h3 className='title'>Software Developer</h3>
          <p className='description'>
            Innovative and results-driven software developer with an enthusiasm for tackling complex challenges and crafting elegant solutions.
            With a passion for continuous learning,
            I'm eager to embrace the newest technologies and industry best practices to continue personal growth and deliver high-quality code.
            Leveraging a strong foundation in problem-solving and a creative mindset,
            I thrive in collaborative environments and excel at developing user-centric applications.
          </p>

          <ContactBox />

          <SkillBox />

          <FancyLine
            color1='#373a41'
            color2='steelblue'
            color3='lightblue'
            size='5px'
          />

          <WorkBox />

          <FancyLine
            color1='#373a41'
            color2='steelblue'
            color3='lightblue'
            size='5px'
          />

          <EducationBox />

          {/* <Hover /> */}
        </div>

        {/* <ATSKeywords /> */}
      </div>
    );
  }
}

const AppToPrint = () => {
  let componentRef = useRef();

  return (
    <div>
      <App ref={el => (componentRef = el)} />

      <ReactToPrint
        trigger={() => <button style={{ marginTop: '1em' }}>{`Print as PDF :)`}</button>}
        content={() => componentRef}
      />
    </div>
  )
}

export default AppToPrint;
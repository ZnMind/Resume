import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import image from './img/imgHelper';
import './App.css';

const FancyLine = ({ color1, color2, color3, size }) => {
  return (
    <div style={{ display: 'flex', marginTop: '1em' }}>
      <div style={{ backgroundColor: color1, width: '33.33%', height: size, borderTopLeftRadius: '2px', borderBottomLeftRadius: '2px' }}></div>
      <div style={{ backgroundColor: color2, width: '33.33%', height: size, borderTopLeftRadius: '1px', borderBottomLeftRadius: '1px' }}></div>
      <div style={{ backgroundColor: color3, width: '33.33%', height: size, borderTopRightRadius: '2px', borderBottomRightRadius: '2px' }}></div>
    </div>
  )
}

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

const SkillBox = () => {
  const skillset = [
    'JavaScript', 'HTML5', 'CSS', 'React.js',
    'Node.js', 'Express', 'MySQL', 'MongoDB',
    'GIT', 'Google Apps Script', 'Next.js', 'UI Design',
    'Bootstrap', 'Agile Methodologies', 'Problem Solving', 'Communication'
  ];

  return (
    <div className='skills'>
      <div className='header'>
        <img src={image.skills} alt='' height={25} style={{ marginRight: '0.5em' }}></img>
        <h3 style={{ width: '100%', marginTop: '0', marginBottom: '0', color: '#373a41', marginLeft: '-0' }}>SKILLS</h3>
      </div>
      {skillset.map((data, index) => (
        <p key={index} style={{ width: '25%' }}>{data}</p>
      ))}
    </div>
  )
}

const WorkBox = () => {
  return (
    <>
      <div className='header'>
        <img src={image.work} alt='' height={25} style={{ marginRight: '0.5em' }}></img>
        <h3 style={{ width: '100%', marginTop: '0', marginBottom: '0', color: '#373a41' }}>EXPERIENCE</h3>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0.55em', marginTop: '0.5em' }}>
          <div className='circle' style={{ marginTop: '0' }}></div>
          <div className='vert'></div>
          <div className='circle'></div>
          <div className='vert'></div>
          <div className='circle'></div>
        </div>

        <div>
          <h4 className='job'>Web Developer</h4>
          <h4 className='company'>Innov8tive Strategies, LLC</h4>
          <small className='date'>07/2022 - Present</small>
          <br></br>

          <div className='bullet-row'>
            <div className='bullet'></div>
            <small>Coordinating with CEO to improve company website <b>UI/UX design</b></small>
          </div>

          <div className='bullet-row'>
            <div className='bullet'></div>
            <small>Implemented <b>RESTful API</b> for live Instagram feed</small>
          </div>

          <div className='bullet-row'>
            <div className='bullet'></div>
            <small>Driving greater traffic to website through <b>SEO</b> best practices</small>
          </div>

          <div className='bullet-row'>
            <div className='bullet'></div>
            <small>Consulting with non-profit clients to grow their website and, through that, their impact in their community</small>
          </div>

          <div className='new-listing'>
            <h4 className='job'>Full Stack Web Developer</h4>
            <h4 className='company'>Innovate Birmingham</h4>
            <small className='date'>12/2021 - 05/2022</small>
            <br></br>

            <div className='bullet-row'>
              <div className='bullet'></div>
              <small>Web development boot camp to continue growth and challenge myself as a software developer</small>
            </div>

            <div className='bullet-row'>
              <div className='bullet'></div>
              <small>Actively developing <b>Front-End</b> applications using <b>React.js</b></small>
            </div>

            <div className='bullet-row'>
              <div className='bullet'></div>
              <small>Building <b>API</b> and <b>Back-End</b> architecture with <b>Node.js</b> and <b>Express</b></small>
            </div>

            <div className='bullet-row'>
              <div className='bullet'></div>
              <small>Designing relational databases with <b>MySQL</b> to handle robust data sets</small>
            </div>
          </div>

          <div className='new-listing'>
            <h4 className='job'>Annuities Account Representative</h4>
            <h4 className='company'>Tata Consultancy Services</h4>
            <small className='date'>10/2020 - 12/2021</small>
            <br></br>

            <div className='bullet-row'>
              {/* For some reason 2 liners distort the bullets. Have to manually adjust the width */}
              <div className='bullet' style={{ width: '6px' }}></div>
              <small>Third Party Administrator to a multi-billion dollar company providing in-depth knowledge on our retirement products and investment offerings</small>
            </div>

            <div className='bullet-row'>
              <div className='bullet'></div>
              <small>Updated and oversaw client information across several departments and ensured its accuracy in our <b>CRM</b> software</small>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

const EducationBox = () => {
  return (
    <>
      <div className='header'>
        <img src={image.school} alt='' height={30} style={{ marginRight: '0.5em' }}></img>
        <h3 style={{ width: '100%', marginTop: '0', marginBottom: '0', color: '#373a41', marginLeft: '-0.1em' }}>EDUCATION</h3>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '0.6em' }}>
          <div className='circle' style={{ marginTop: '0.5em' }}></div>
        </div>

        <div>
          <h4 className='job'>University of Alabama at Birmingham</h4>
          <h4 className='company'>Bachelor of Science in Information Systems</h4>

          <div className='bullet-row'>
            <div className='bullet'></div>
            <small>Project based learning through coursework with a strong emphasis on <b>leadership</b> and <b>teamwork</b> in a group setting</small>
          </div>

          <div className='bullet-row'>
            <div className='bullet' style={{ width: '9px' }}></div>
            <small>Relevant coursework: Information systems design, Object-Oriented Programming, Data Structures and Algorithms,
              Software Development, Computer Science, Database Management Systems</small>
          </div>
        </div>
      </div>
    </>
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
            I am a motivated individual with a passion for software development,
            specifically the challenge it provides and the reward of solving complex problems.
            I enjoy thinking outside the box and creating unique solutions that align with my strengths,
            while constantly learning something new every day.
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

        </div>
      </div>
    );
  }
}

const AppToPrint = () => {
  let componentRef = useRef();

  return (
    <div>
      <ReactToPrint
        trigger={() => <button>{`Print as PDF :)`}</button>}
        content={() => componentRef}
      />

      <App ref={el => (componentRef = el)} />
    </div>
  )
}

export default AppToPrint;


// App.js
import React, { useState } from 'react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';
import ParticlesComponent from './particles';
import {AppBar, Tab, Tabs, Toolbar, Button} from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import hi from '../Say hi.jpg'
import resume from '../images/Arun_Balaji_Resume.pdf';
import "./About.css";
import arrow from '../arrow.jpg';
function About (){
  
  const [value,setValue]=useState();
  const nav=useNavigate();
  return (
    
 
  <div>
    <div className='App'>
    <ParticlesComponent id="particles"/>
    <div>
      <AppBar sx={{background:"black"}}>
        <Toolbar>
        <Tabs sx={{marginLeft:5}}
            textColor="white" 
            value={value}
                onChange={(e, value) => setValue(value)}
             indicatorColor="secondary"
             >
                <Tab variant="contained" label='ABOUT' onClick={(e)=>nav('/About')}></Tab>
                
                <Tab label="PROJECTS" onClick={(e)=>nav('/Project')}/>
                <Tab label="SKILLS" onClick={(e)=>nav('/Skill')}/>
                <Tab label="FEATS" onClick={(e)=>nav('/Feats')}/>

            </Tabs>
            <a href={resume} download="Resume">
                <Button sx={{marginLeft:'auto', backgroundColor:'black' ,color:'secondary','&:hover': {
          backgroundColor: 'black', // Optional, hover effect
        },}} variant="contained" className='resumebutton'>RESUME</Button></a>
        </Toolbar>
      </AppBar>
      </div>
    <div className='p1'>
    <p>A software engineer is a skilled architect of the digital world, adept at crafting intricate systems from lines of code. They're the architects of virtual realms, translating concepts into tangible, functional solutions. With a blend of creativity and precision, they design, develop, and maintain software applications that power our modern lives. Melding analytical prowess with creative problem-solving, they navigate complex algorithms and frameworks, weaving together the fabric of our digital existence. Beyond mere code, they're innovators, constantly pushing boundaries to create software that enhances efficiency, enables connectivity, and enriches user experiences. A software engineer is not just a builder of programs, but a visionary shaping the future of technology.</p>
    </div>

    <div className='p2'>
        <h1>ABOUT</h1>
    </div>
    
    <div className='b1'>
      <a href="https://www.linkedin.com/in/arunbalaji1/" target="_blank">
      <img src="https://static.vecteezy.com/system/resources/previews/023/986/900/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png"  height={50} alt="Linkedin"/>
      </a>
      <br/>
      <a href="https://github.com/arunba1" target="_blank">
      <img src="https://pngimg.com/d/github_PNG32.png" height={50} alt="GitHub"/>
      </a>
      <br/>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arunbalaji211@gmail.com" target="_blank">
      <img src="https://cdn.icon-icons.com/icons2/652/PNG/512/gmail_icon-icons.com_59877.png" height={50} alt="Mail"/>
      </a>
      </div>
      <div class="logo-container">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif" alt="Fixed Logo"/>
      </div>
    
    <div class="arrow">
        <a href="/">
        <img src={arrow} height="30" alt="arrow"/></a>
    </div>
    </div>
  </div>
);

}

export default About;


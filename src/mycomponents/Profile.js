import React from 'react'
import {AppBar, Tab, Tabs, Toolbar, Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import resume from '../images/Arun_Balaji_Resume.pdf';
import { useState } from "react";
import NeuralNetworkCanvas from './NeuralNetworkCanvas';
import image from "../image.png"
import "./Profile.css";
import arrow from "../arrow.jpg";
function About() {
    const [value,setValue]=useState();
    const nav=useNavigate();
  return (
    <div >
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
                <Tab label="PROJECTS"/>
                <Tab label="SKILLS" />
                <Tab label="FEATS"/>

            </Tabs>
            <a href={resume} download="Resume">
                <Button sx={{marginLeft:'auto', backgroundColor:'black' ,color:'secondary','&:hover': {
          backgroundColor: 'black', // Optional, hover effect
        },}} variant="contained">RESUME</Button></a>
        </Toolbar>
      </AppBar>
      </div>
      <div className='spin'>
      <div className='s1'>
      <div class="content">
      <p>INNOVATIVE SOFTWARE ENGINEER WITH A STRONG FOUNDATION IN PROGRAMMING AND PROBLEM-SOLVING. PROFICIENT IN MULTIPLE PROGRAMMING LANGUAGES AND DEVELOPMENT TOOLS. EXPERIENCED IN FULL-STACK DEVELOPMENT, AGILE METHODOLOGIES, AND SOFTWARE TESTING. PROVEN ABILITY TO DESIGN AND IMPLEMENT SCALABLE, EFFICIENT, AND MAINTAINABLE SOFTWARE SOLUTIONS. PASSIONATE ABOUT STAYING UP-TO-DATE WITH EMERGING TECHNOLOGIES AND COLLABORATING WITH CROSS-FUNCTIONAL TEAMS TO DELIVER CUTTING-EDGE PRODUCTS.</p>
      <img src={image} alt="Image Description"/>
    </div>
    </div>
  </div>
      <div className='box'>
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
    <a href="/"><img src={arrow} height="30" alt="arrow"/></a>
  </div>
    </div>
  )
}

export default About

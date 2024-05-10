import React, { useState } from 'react';
import {AppBar, Tab, Tabs, Toolbar, Button} from "@mui/material";
import "./main.css";
import { Link, useNavigate } from 'react-router-dom';
import hi from '../Say hi.jpg'
import resume from '../images/Arun_Balaji_Resume.pdf';
import Project from './Projects';

function Main() {
    const [value,setValue]=useState();
    const nav=useNavigate();
  return (
    <div>
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
        },}} variant="contained">RESUME</Button></a>
        </Toolbar>
      </AppBar>
      </div>
      <div className='spin'>
        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b6e0b072897469.5bf6e79950d23.gif' alt='spinner'/>
      </div>
      <div class="click-here">
    <a href="/Profile"><p>Click here</p></a>
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
    </div>
  )
}

export default Main

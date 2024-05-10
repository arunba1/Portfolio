import React from 'react'
import {AppBar, Tab, Tabs, Toolbar, Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import resume from '../images/Arun_Balaji_Resume.pdf';
import { useState } from "react";
import NeuralNetworkCanvas from './NeuralNetworkCanvas';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../image.png"
import "./Projects.css";
import arrow from "../arrow.jpg";
function Project() {
    const [value,setValue]=useState();
    const nav=useNavigate();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
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
      <div className='spin'></div>
      <div className="w-3/4 m-40">
    <div className="mt-40">
    <Slider {...settings}>
      {data.map((d)=>(
        <div className="bg-white h-[480px] text-black rounded-xl ">

        <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
          <img src={d.img} alt='' className="h-44 w-44 rounded-full"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-4">
          <p className="text-l font-semibold">{d.name}</p>
          <p>{d.review}</p>
          <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">Visit</button>
          
          {/* <img src="https://pngimg.com/d/github_PNG32.png" alt='' className="h-12 w-14"/> */}
        </div>
        
        </div>
      ))}
      </Slider>
    </div>

</div>
<div className='p7'>
        <h1>PROJECTS</h1>
    </div>
    </div>
  )
}
const data=[
    {
      name:'Fitness App',
      img:'/student/Fitness.jpg',
      review:'Engineered a user-centric Fitness App enabling personalized diet plans.Incorporated a range of exercise tutorials and instructional videos to guide users through their fitness journeys,ensuring safe and effective workouts.'
    },
    {
      name:'Flipkart Clone',
      img:'/student/flipkart.png',
      review:'Developed a replica of the Flipkart online shopping platform using the MERN stack.Seamlessly integrated the Paytm gateway for secure payments & deployed the application on the Heroku platform.'
    },
    {
      name:'Line Following & Obstacle Avoidance Robot',
      img:'/student/Line.jpg',
      review:'Engineered an automated robotic system integrating sensors for line tracking and obstacle detection, triggering an alarm upon impediment identification and resuming operation post-clearance.'
    },
    {
      name:'Conference Portal',
      img:'/student/Conference.png',
      review:'Developed a full-stack application utilizing React JS, Node JS, and MongoDB, ensuring robust user and admin functionalities including secure login, document upload, and assignment grading.'
    },
    {
      name:'Medical Emergency App',
      img:'/student/Health.jpg',
      review:'Developed an Android application providing detailed information on hospitals, ambulance services, and clinical labs in your area. Users can quickly access contact details and directly initiate calls to the desired facility or service.'
    },
    {
      name:'Shopping App',
      img:'/student/Shop.jpg',
      review:'Developed an Android application to revolutionize the e-commerce experience with user-friendly registration processes and an intuitive Home screen.This app focuses on effective way to browse and shop.'
    }
  ]
export default Project;

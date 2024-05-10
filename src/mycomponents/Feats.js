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
function Feats() {
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
        <div className="bg-white h-[360px] text-black rounded-xl ">

        <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
          <img src={d.img} alt='' className="h-44 w-44 rounded-full"/>
        </div>
        <div className="flex flex-col justify-center items-center gap-0 p-4">
          <p className="text-l font-semibold">{d.name}</p>
          <p className="font-semibold">{d.comp}</p>
          {/* <img src="https://pngimg.com/d/github_PNG32.png" alt='' className="h-12 w-14"/> */}
        </div>
        
        </div>
      ))}
      </Slider>
    </div>

</div>
<div className='p7'>
        <h1>FEATS</h1>
    </div>
    </div>
  )
}
const data=[
    {
        name:'Flutter Developer Intern',
        comp:'Yali Aerospace Pvt Ltd',
        img:'/student/Intern1.jpg',
      },
      {
        name:'Research Engineer Intern',
        comp:'Yali Aerospace Pvt Ltd',
        img:'/student/Intern2.jpg',
      },
      {
        name:'Recognition by Zoho CEO',
        img:'/student/reco.jpg',
        comp:'Application Demonstration'
      },
    {
      name:'Certification on Python',
      img:'/student/Python.jpg',
    },
    {
        name:'Certification on .NET',
        img:'/student/Dotnet.jpg',
      },
      {
        name:'Certification on Java',
        img:'/student/Java.jpg',
      },
    
  ]
export default Feats;

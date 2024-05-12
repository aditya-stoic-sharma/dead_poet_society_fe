import React, { useState } from 'react';
import Navbar from './Navbar';
import Slider_p from './Slider_p';
import Email from './Email';
import Footer from './Footer';
import Book_slide from './Book_slide';
import Slider from 'react-slick';
import DPS from './DPS';

export default function Homepage({toggle , mode}) {

  const [dps , setdps]= useState(false);
  const mody =()=>{
    setdps(!dps);
    console.log(dps);

    if(dps===false)
    document.body.classList.add('overflow-hidden');

    else
    document.body.classList.remove('overflow-hidden');
  }
  
  return (
    <div>
      <Navbar toggle={toggle} mody={mody} mode={mode}/>
      <Slider_p/>
      <Book_slide/>
      <Email/>
      <Footer mode={mode}/>
      {dps && <DPS mody={mody}/>}     

      
    </div>
  );
}

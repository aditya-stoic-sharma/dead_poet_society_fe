import React from 'react';
import Navbar from './Navbar';
import Slider_p from './Slider_p';
import Email from './Email';
import Footer from './Footer';
import Book_slide from './Book_slide';
import Slider from 'react-slick';

export default function Homepage({toggle , mode}) {
  return (
    <div>
      <Navbar toggle={toggle} mode={mode}/>
      <Slider_p/>
      <Book_slide/>
      <Email/>
      <Footer mode={mode}/>
    </div>
  );
}

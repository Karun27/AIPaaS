import React, { Component }from 'react';
import { Slide } from 'react-slideshow-image';
 
const slideImages = [
  'src/images/1.jpg',
  'images/2.jpg',
  './src/images/3.png',
  'C:/Users/Karun/app/src/images/4.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 100,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Background = () => {
    return (
      <div class="container-fluid">
      <div className="slide-container">
        <Slide >
          <div className="each-slide">
            <div> <img src={require('./images/1.jpg')} />
            
            </div>
          </div>
          <div className="each-slide">
            <div> <img src={require('./images/2.jpg')} />
            
            </div>
          </div>
          <div className="each-slide">
            <div> <img src={require('./images/3.png')} />
            </div>
          </div>
          <div className="each-slide">
            <div> <img src={require('./images/4.jpg')} />
            </div>
          </div>
        </Slide>
      </div>
      </div>
    )
}
export default Background;
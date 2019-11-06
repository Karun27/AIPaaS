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
        <div class="col-md-120">
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
        <div class="table-responsive">
          <table class="grid" cellsSpacing="1">
          <tbody>
          <tr id ="one">
         <td>
      <img src={require('./images/a.png')} alt="spark" width="100" />
      </td>
      <td>
              <img src={require('./images/b.png')} alt="spark" width="100" />
              </td>
              <td>       
              <img src={require('./images/c.png')} alt="spark" width="100" />
              </td>
              </tr><tr id="two">
              <td>
              <img src={require('./images/d.png')} alt="spark" width="100" />
              </td>
              <td>
              <img src={require('./images/e.png')} alt="spark" width="100" />
              </td>
              <td>
                  <img src={require('./images/6.png')} alt="spark" width="100" />
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>  
                  </div>

    )
}
export default Background;
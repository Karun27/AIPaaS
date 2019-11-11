import React, { useState, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import RBCarousel from "react-bootstrap-carousel";
import { Row, Col, Button, ButtonGroup } from "reactstrap";
import './App.css';

const styles = { height: 400, width: "100%" };


function Background() {
  const [autoplay, setAutoplay] = useState(true);
  const [icon, setIcon] = useState({});
  const slider_ref = useRef(null);
  const _autoplay = useCallback(() => setAutoplay(autoplay => !autoplay), []);
  const _visiableOnSelect = useCallback(active => {
    console.log(`visiable onSelect active=${active}`);
  }, []);
  const _onSelect = useCallback((active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  }, []); 
  return (
    <div className="container" id="bye">
     
          <RBCarousel
            animation={true}
            autoplay={autoplay}
            slideshowSpeed={2000}
            defaultActiveIndex={0}
            leftIcon={icon.leftIcon}
            rightIcon={icon.rightIcon}
            onSelect={_onSelect}
            ref={slider_ref}
            version={4}
          >
             
            <div style={{ ...styles, backgroundColor: "#7d90e3", height: 950 }}>
              <img
                style={{ width: "75%", height: "250", marginLeft: 120, marginTop: 150 }}
                src={require('./images/1.jpg')}
              />
              <div className="carousel-caption">Big Data </div>
            </div>
            <div style={{ ...styles, backgroundColor: "#fa996b", height: 950 }}>
              <img
                style={{ width: "75%", height: "250", marginLeft: 120, marginTop: 150 }}
                src={require('./images/2.jpg')}
              />
              <div className="carousel-caption">AI</div>
            </div>
            <div style={{ ...styles, backgroundColor: "#e88e8e", height: 950 }}>
              <img
                style={{ width: "75%", height: "250", marginLeft: 120, marginTop: 150 }}
                src={require('./images/3.png')}
              />
              <div className="carousel-caption">Paas</div>
            </div>
            <div style={{ ...styles, backgroundColor: "#4db6ac", height: 950 }}>
            
              <img
                style={{ width: "75%", height: "250", marginLeft: 120, marginTop: 150 }}
                src={require('./images/4.jpg')}
              />
              <div className="carousel-caption">Artificial Intelligence</div>
            </div>
            
            
          </RBCarousel>

    </div>
  );
}

export default Background;
import React, { Component } from 'react';
import './App.css';
import Navbar from './Nav.js'
import Background from './Background';
import {Button, Input, Card, CardText, CardTitle, Col, Row, Container} from 'reactstrap';
import Data from './axios/Data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  render() {
    return (
      
      <div>
        
      <Navbar />
      <p class="text-center">
          <h1>AI PaaS Services</h1></p>
     <Container>
      <div class="row">   
            <div class="circle">
                <p>Data Gathering</p>
            </div>
            <div class="circle">
                <p>Feature Engineering</p>
            </div>
            <div class="circle">
                <p>Model Training</p>
            </div>
            <div class="circle">
                <p>Deployment</p>
            </div>
            <div class="circle">
                <p>Visualization</p>
            </div>
            </div>
            <div class="row">   
            <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-9">
      <Button color="secondary">New Project</Button>
    </div>
    </div>
    <div class="row"></div>
    <div class="row">
        <div class="col-sm-9">
    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card>
      </div>
    </div>
    
    </Container>
      
      </div>

    );
  }
}

export default HomePage;
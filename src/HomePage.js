import React, { Component } from 'react';
import './App.css';
import Navbar from './Nav.js'
import Background from './Background';
import {Button, Input, Card, CardText, CardTitle, Col, Row, Container,
 Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import Data from './axios/Data';
import Test from './Test';



class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal : false,
      name: '',
      type: '',
      owner: ''
    };
    this.ac = this.ac.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  ac() {
    this.setState({
       modal: !this.state.modal
    });
   }
   handleChange(key) {
    return function (e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
    
  }
  handleSubmit(event) {
    var data = {
	    	name: this.state.name,
        type: this.state.type,
	    	owner: this.state.owner
	  }
   
  }

  render() {

    return (
      
      <div>
        
      <Navbar />
      <p class="text-center">
      <img src={require('./images/logo.jpg')} alt="spark" width="250" /></p>    
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
            <div class="col-sm-12">
                <Test />
      {/* <Button color="secondary" onClick={this.ac}>New Project</Button>
      <Modal isOpen={this.state.modal} toggle={this.ac}>
          <ModalHeader>Project Information</ModalHeader>
          <ModalBody>
          <form onSubmit={this.handleSubmit}>
            Name: <Input type="text" name="name" value={this.state.name} onChange={this.handleChange('name')}/>
            Type: <Input type="text" name="type" value={this.state.type} onChange={this.handleChange('type')}/>
            Owner: <Input type="text" name="owner" value={this.state.owner} onChange={this.handleChange('owner')}/>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type="submit" onClick={this.handleSubmit} value="submit">Add Project</Button>{' '}
            <Button color="secondary" onClick={this.ac}>Cancel</Button>
          </ModalFooter>
        </Modal> */}
    </div>
    </div>
    
    </Container>
      
      </div>

    );
  }
}

export default HomePage;
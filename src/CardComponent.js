import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Modal, ModalBody, Button, ModalHeader, Input} from "reactstrap";


class CardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {   
    };

  }
render() {

    return (
      
      <div>
        <Link to="/Project">
              <Button color="light">
              <div className="card mb-1" id="car">
        <div className="card-body">
                <h4 className="card-title text-center">Name{this.props.name}</h4>
                <div className="row justify-content-center mb-1">
                  <p className="card-text">
                    <span className="badge badge-light py-2 mr-2">Type</span>
                    <span>{this.props.type}</span>
                  
                  </p>
                  </div> <div className="row justify-content-center mb-1">
                  <p class="card-text ">
                    <span class="badge badge-light py-2 mr-2">Owner</span>
                    <span>{this.props.owner}</span>
                  </p>
                </div>
                </div></div>
                
              </Button>
              </Link>
      
      </div>

    );
  }
}

export default CardComponent;
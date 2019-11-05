import React, { Component } from 'react';
import './App.css';
import Nav1 from './Nav';
import Background from './Background';
import {Button, Input, Card, CardText, CardTitle, Col, Row, Container,
 Modal, ModalHeader, ModalBody, ModalFooter, Dropdown} from 'reactstrap';
import Data from './axios/Data';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Test from './Test';



class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);

    this.state = {
      dropdownOpen: false,
      dropdownOpen1: false,
      dropdownOpen2: false
    };
}
toggle(e) {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  toggle1(e) {
    this.setState(prevState => ({
      dropdownOpen1: !prevState.dropdownOpen1
    }));
  }
  toggle2(e) {
    this.setState(prevState => ({
      dropdownOpen2: !prevState.dropdownOpen2
    }));
  }



  render() {

    return (
        <div>
            <Nav1 />
 <div id="contain">
     
     <div class="row">
     <Col sm={{ size: 'auto', offset: 1 }}>
    	
<Navbar color="dark">
<Nav vertical>
        <div ref={this.dropdown}>
        <Dropdown direction="right" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Connections
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
        <br></br>
        <div ref={this.dropdown}>
        <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen1} toggle={this.toggle1}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Data Sources
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
        <div ref={this.dropdown}>
         <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen2} toggle={this.toggle2}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Data Pipelines
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
    </Dropdown>
     {/* <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Feature Engineering
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Models
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            API's
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown> <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Data Dictionary
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Visualization
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown> <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            AI Flow
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown direction="right" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle tag="button" type="button" className="form-control" caret>
            Deploy
          </DropdownToggle>
          <DropdownMenu>
          <DropdownItem>New</DropdownItem>
            <DropdownItem>Existing</DropdownItem>
            <DropdownItem>Permission</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </div>
               
                
      </Nav>
      </Navbar>
      </Col></div>
      </div>
      
      </div>


    );
  }
}

export default ProjectInfo;
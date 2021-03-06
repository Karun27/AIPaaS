import React, { Component } from 'react';
import Nav from './Nav';
import {Button, Input, Card, CardText, CardTitle, } from 'reactstrap';
import './App.css';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
this.routeChange = this.routeChange.bind(this);
  } 
  routeChange() {
    let path = `/`;
   this.props.history.push(path);
   }
  render() {
    
      return (
        <div>
        <Nav />
          <div class="hello">
        {/* <div className="col-sm-4"> */}
        <div class="col-md-6 offset-md-3">
            <small>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>AI PaaS Login Portal </CardTitle>    
        <form>
        First Name:
        <Input type="text" name="firstname" required />
        <label>Last Name:</label>
        <Input type="text" name="lastname" required/>
        <label>Email:</label>
        <Input type="text" name="email" required />
        <label>Username:</label>
        <Input type="text" name="username" required />
        <label>Password</label>
        <Input type="password" name="pwd" required />
        <label>Confirm Password</label>
        <Input type="password" name="pwd1"  required/>
        <br></br>
        <div className="text-center">
        <Button color="primary" type="submit" size="sm">Register</Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button color="danger" type="submit" size="sm" onClick={this.routeChange}>Login</Button>
        </div>
        </form>  
        </Card>
        </small> 
        </div>
        </div> 
        </div>
    
      );
    }

}

export default Home;
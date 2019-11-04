import React, { Component } from 'react';
import './App.css';
import Navbar from './Nav.js'
import Background from './Background';
import {Button, Input, Card, CardText, CardTitle} from 'reactstrap';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Your Username is missing. Please try again.' });
    }

    return this.setState({ error: 'Your Password is missing. Please try again.' });
      if (!this.state.password) {
    }

    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };
  routeChange() {
        let path = `Register`;
       this.props.history.push(path);
       }

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div>
      <Navbar />
      <div class="container">
        <br></br>
        <div class="row">
        <div class="col-md-3">
      {/* <Card body outline color="secondary"> */}
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>AI PaaS Login Portal </CardTitle>  
        <small>
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <p color="danger" data-test="error" onClick={this.dismissError}>
              {this.state.error}
            </p>
          }
          
          <label>User Name</label>
          <Input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <Input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
<br></br>
<div className="text-center">
          <Button color="primary" size="sm" type="submit" value="Log In" data-test="submit">Login</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="secondary" size="sm" type="submit" onClick={this.routeChange}>Register</Button>
          
          </div>
         
        </form>
        </small>
        </Card>
        </div>
    
      <div className="col-md-9">
      <Background />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={require('./images/a.png')} width="75"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={require('./images/b.png')} width="75"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={require('./images/c.png')} width="75"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={require('./images/d.png')} width="75"/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <img src={require('./images/e.png')} width="75"/>
      </div>

      </div>
      </div>
      
      </div>

    );
  }
}

export default LoginPage;
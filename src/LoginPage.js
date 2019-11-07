import React, { Component } from 'react';
import './App.css';
import Navbar from './Nav.js'
import Background from './Background';
import { Button, Input, Card, CardText, CardTitle } from 'reactstrap';
import Data from './axios/Data';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'abc',
      password: 'abc',

    };

    // this.handlePassChange = this.handlePassChange.bind(this);
    // this.handleUserChange = this.handleUserChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.dismissError = this.dismissError.bind(this);
    this.routeChange = this.routeChange.bind(this);

    // this.authorize = this.authorize.bind(this);
    this.route = this.route.bind(this);

  }
  // authorize(e) {
  //   const username = e.target.querySelector(
  //     'input[type="username"]').value;
  //   const password = e.target.querySelector(
  //     'input[type="password"]').value;
  //       const auth1 = username == this.state.username;
  //   const auth = password == this.state.password;
  //   this.setState({
  //     authorized: auth,
  //     authorized:auth1
  //   });
  // }


  // dismissError() {
  //   this.setState({ error: '' });
  // }

  // handleSubmit(evt) {
  //   evt.preventDefault();

  //   if (!this.state.username) {
  //     return this.setState({ error: 'Your Username is missing. Please try again.' });
  //   }

  //   return this.setState({ error: 'Your Password is missing. Please try again.' });
  //     if (!this.state.password) {
  //   }

  //   return this.setState({ error: '' });
  // }

  // handleUserChange(evt) {
  //   this.setState({
  //     username: evt.target.value,
  //   });
  // };

  routeChange() {
    let path = `Register`;
    this.props.history.push(path);
  }

  route() {
    if (this.state.username == "abc" && this.state.password == "abc") {
      let path = `Home`;
      this.props.history.push(path);
    }
    else {
      let path1 = `/`;
      this.props.history.push(path1);
    }
  }
  // handlePassChange(evt) {
  //   this.setState({
  //     password: evt.target.value,
  //   });
  // }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)
    // const login= (

    // );
    //     const contact = (
    // < a href="/Data"></a>
    //     );
    return (

      <div>
      
      <Navbar />
      <div id="change"class="container-fluid">
      
      <div class="row">
      <div class="col-md-3">
      <Card id="inc" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
      <CardTitle>AI PaaS Login Portal </CardTitle>
      
      <form onSubmit={this.route}>
      {/* {
      this.state.error &&
      <p color="danger" data-test="error" onClick={this.dismissError}>
      {this.state.error}
      </p>
      } */}
      
      <label>User Name </label>
      <Input type="text"required />
      
      <label>Password</label>
      <Input type="password" required />
      <br></br>
      <Button color="primary" size="md" block type="submit"  >Login</Button>
      
      </form>
      </Card>
      <br></br>
      <h5 class= "d-flex justify-content-center"> New to AI PaaS?</h5>
      <br></br>
      
      <Button id="ind" color="secondary" size="md" block type="submit" onClick={this.routeChange}>Register</Button>
      
      
      
      {/* {
      this.state.authorized ? contact : login
      } */}
      
      </div>
      
      <div className="col-md-9">
      <Background />
      
      </div>
      
      </div>
      </div>
      
      </div>
      
      );
      }
      }
      
      export default LoginPage;
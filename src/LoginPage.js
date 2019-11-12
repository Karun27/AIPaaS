import React, { Component } from 'react';
import './App.css';
import Background from './Background';
import { Button, Input, Card, CardText, CardTitle } from 'reactstrap';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'abc',
      password: 'abc',
    };
    this.routeChange = this.routeChange.bind(this);
    this.route = this.route.bind(this);
  }
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
  render() {
    return (
      <div>
        <div class="d-md-flex h-md-100 align-items-center">
          <div class="col-md-6 ">
            <div class="lign-items-center h-100 p-5">
              <img src={require('./images/mcle.jpg')} alt="spark" width="150" />
              <img src={require('./images/logo.jpg')} alt="spark" width="170" />

              <Card id="inc" body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                <CardTitle>AI PaaS Login Portal </CardTitle>
                <form onSubmit={this.route}>
                  <label>User Name </label>
                  <Input type="text" required />
                  <label>Password</label>
                  <Input type="password" required />
                  <br></br>
                  <Button color="primary" size="md" block type="submit" >Login</Button>
                  <br></br>
                  <h6 class="d-flex justify-content-center"> New to AI PaaS?</h6>
                  <Button color="secondary" size="md" block type="submit" onClick={this.routeChange}>Register</Button>
                </form>
              </Card>
              <div class="d-flex justify-content-around">
                <table id="india">
                  <tr>
                    <td>
                      <tr>
                        <td>
                          <img src={require('./images/a.png')} alt="spark" width="100" />
                          &ensp; &ensp;&ensp;&ensp;
             <img src={require('./images/b.png')} alt="spark" width="100" />
                          &ensp;&ensp;&ensp;
              <img src={require('./images/c.png')} alt="spark" width="100" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img src={require('./images/d.png')} alt="spark" width="100" />
                          &ensp; &ensp;&ensp;&ensp;
                <img src={require('./images/e.png')} alt="spark" width="100" />
                          &ensp;&ensp;&ensp;&ensp;
                <img src={require('./images/6.png')} alt="spark" width="100" />
                        </td>
                      </tr>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div class="col-md-6 p-0 bg-white h-md-100 loginarea" id="hie">
            <Background />
          </div>
        </div>
      </div>
    );
  }
}
export default LoginPage;
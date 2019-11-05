import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage';  // or whatever the location is
import Result from './Result'; // or whatever the location is
import Register from './Register';
import Data from './axios/Data';
import HomePage from'./HomePage';
import ProjectInfo from './ProjectInfo';
class App extends Component {
  render() {
    return (      
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} exact/>
      <Route path="/Register" component={Register}/>
      <Route path="/Data" component={Data}/>
      <Route path="/Home" component={HomePage}/>
      <Route path="/Project" component={ProjectInfo}/>
    </Switch>
</BrowserRouter>
    )};  
}
export default App;

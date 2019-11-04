import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LoginPage from './LoginPage';  // or whatever the location is
import Result from './Result'; // or whatever the location is
import Register from './Register';

class App extends Component {
  render() {
    return (      
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} exact/>
      <Route path="/Register" component={Register}/>
    </Switch>
</BrowserRouter>
    )};  
}
export default App;

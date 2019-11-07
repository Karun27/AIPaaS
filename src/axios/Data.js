import React from 'react';
import axios from 'axios';


export default class PersonList extends React.Component {
    constructor(props) {
        		super(props);
            this.state = {topics: [],
              modal: false
            };
        		this.headers = [
        			{ key: 'id', label: 'id'},
        			{ key: 'name', label: 'name' },
        			{ key: 'description', label: 'description' }
            ];
            this.toggle = this.toggle.bind(this);
            
          }

  componentDidMount() {
  axios.defaults.baseURL = 'http://172.16.1.70/topics';
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(`http://172.16.1.70:8090/topics`)
      .then(res => {
        const topics = res.data;
        console.log(res);
        this.setState({ topics });  
      })
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div class="container">
        <div class="row">
      

<ul>
        { this.state.topics.map(topic => <li>{topic.name}</li>)}
      </ul>
        </div>
      </div>
      
    )
  }
}
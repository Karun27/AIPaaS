import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    constructor(props) {
        		super(props);
        		this.state = {topics: []};
        		this.headers = [
        			{ key: 'id', label: 'id'},
        			{ key: 'name', label: 'name' },
        			{ key: 'description', label: 'description' }
            ];
            
          }

  componentDidMount() {
  axios.defaults.baseURL = 'http://192.168.2.49:9674/api';
  axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(`http://192.168.2.49:9674/api`)
      .then(res => {
        const topics = res.data;
        console.log(res);
        this.setState({ topics });  
      })
  }

  render() {
    return (
      <ul>
        {/* { this.state.topics.map(topic => <li>{topic.name}</li>)} */}
      </ul>
    )
  }
}
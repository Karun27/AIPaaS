// import React, { Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Result from './Result';
// import Background from './Background';


// class Topic extends Component {
//   constructor(props) {
// 		super(props);
// 		this.state = {topics: []};
// 		this.headers = [
// 			{ key: 'id', label: 'id'},
// 			{ key: 'name', label: 'name' },
// 			{ key: 'description', label: 'description' }
//     ];
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.routeChange = this.routeChange.bind(this);
//   }
//   routeChange() {
//     let path = `Result`;
//     this.props.history.push(path);
//   }
//   handleSubmit(event){ 
//     event.preventDefault();
//     fetch('http://localhost:8090/topics', {
//      method: 'post',
//      headers: {'Content-Type':'application/json'},
//      body:JSON.stringify( {
//       "id": this.id.value,
//       "name":this.name.value,
//       "description": this.description.value
//      })
//     });
//    };

//   componentDidMount() {
   
// 		fetch('http://localhost:8090/topics')
// 			.then(response => {
// 				return response.json();
// 			}).then(result => {
// 				console.log(result);
// 				this.setState({
// 					topics:result
// 				});
// 			});
//   }

//   render() {    
   
//     return (
//       <div className="App">
//       <header className="App-header">
     
//         <h1>Course Registration</h1>
//         <Background />
//            <form onSubmit={this.handleSubmit}>
//         <input ref={(ref) => {this.id = ref}} placeholder="id" type="text" name="id"/><br />
//         <input ref={(ref) => {this.name = ref}} placeholder="name" type="text" name="name"/><br />
//         <input ref={(ref) => {this.description = ref}} placeholder="description" type="text" name="description"/><br />
//        <button type="Submit">Submit</button>&ensp;&ensp;&ensp;&ensp;&ensp;&nbsp;
//        <button type="Submit" onClick={this.routeChange}>Result</button>
//     </form>
  
//       </header>
//       </div>
// 		)
// }
//   }

// export default Topic;
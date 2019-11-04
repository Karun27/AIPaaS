// import React, { Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import paginate from 'paginate-array';
// import { Button } from 'reactstrap';


// class Result extends Component {
//     constructor(props) {
// 		super(props);
//         this.state={topics: [],
//             size: 2,
//       page: 1,
//       currPage: null
//     }; 
// 		this.headers = [
// 			{ key: 'id', label: 'id'},
// 			{ key: 'name', label: 'name' },
// 			{ key: 'description', label: 'description' }
//     ];
//     this.handleClick= this.handleClick.bind(this);
//     this.previousPage = this.previousPage.bind(this);
//     this.nextPage = this.nextPage.bind(this);
//     this.routeChange = this.routeChange.bind(this);

//   }
//   routeChange() {
//     let path = `/`;
//     this.props.history.push(path);
//   }
//   handleClick(event) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }
//   componentDidMount(){
//     fetch('http://localhost:8090/topics')
//         .then(response => {
//             return response.json();
//         }).then(topics => {
//             console.log(topics);
//             const {page,size} = this.state;
//             const currPage = paginate (topics,page,size);
//             this.setState({
//                 ...this.state,
//                 topics,
//                 currPage
//             });
//         });
// }
// previousPage() {
//     const { currPage, page, size, topics } = this.state;

//     if (page > 1) {
//       const newPage = page - 1;
//       const newCurrPage = paginate(topics, newPage, size);

//       this.setState({
//         ...this.state,
//         page: newPage,
//         currPage: newCurrPage
//       });
//     }
//   }
//   nextPage() {
//     const { currPage, page, size, topics } = this.state;

//     if (page < currPage.totalPages) {

//       const newPage = page + 1;
//       const newCurrPage = paginate(topics, newPage, size);
//       this.setState({ ...this.state, page: newPage, currPage: newCurrPage });
//     }
//   }
//     render(){
//         const { page, size, currPage } = this.state;
//         return(
//             <div className="App">
                  
//             <header className="App-header">
//               <h1>Course Info</h1>
//               <p>obj => Count: {this.props.karun.topics}</p>
//               <button type="Submit" onClick={this.routeChange}>Main Page</button>
//               Page: {page}&ensp;&ensp;
//         Size: {size}
//               <table>
//               <tr>
//     <td>
//         <b>ID</b>&ensp;&ensp;&ensp;&ensp;&ensp;
//     </td>   
//     <td>
//         <b>Name</b>&ensp;&ensp;
//         </td> 
//         <td>
//           <b>Description</b>   
//             </td> &ensp;&ensp;&ensp;
         
   
           
//             </tr>
            
            
//               </table>
             
//         {currPage &&
//         <table>
//                 {currPage.data.map((topic) =>
//            (
                
//           	<div>
//               {/* <table>
//             <tr>
//   <td>{topic.id}</td>&ensp;&ensp;&ensp;
//   <td>{topic.name}</td>&ensp;&ensp;&ensp;
//   <td>{topic.description}</td>&ensp;&ensp;&ensp;
//   </tr>  
//   </table> */}
//  <tr>
//   <td>{topic.id}</td>&ensp;&ensp;&ensp;
//   <td>{topic.name}</td>&ensp;&ensp;&ensp;
//   <td>{topic.description}</td>&ensp;&ensp;&ensp;
//   </tr>
// </div>

//                  ))}
//                  </table>
//                  }
//                  <br></br>
//                  <div className="row">
//                  <button color="primary"onClick={this.previousPage}>Previous Page</button> &ensp;&ensp;
//         <button onClick={this.nextPage}>Next Page</button>
//         </div>
//             </header>   
//             </div>
//         )
//     }
// }
// export default Result;
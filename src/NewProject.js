import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Modal, ModalBody, Button, ModalHeader, Input} from "reactstrap";
import CardComponent from "./CardComponent";
import {Link} from 'react-router-dom';



class NewProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],

    };
    this.headers = [
      { key: 'name', label: 'name'},
      { key: 'owner', label: 'owner' },
      { key: 'description', label: 'description' }
    ];
    this.toggle= this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);

    
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal,
      people:[]
    });
  }
  handleClick (){
    if (this.nameTextInput !== null) {
      this.setState({
        people: this.state.people.concat( this.nameTextInput.value, this.typeTextInput.value, this.ownerTextInput.value),
        modal:false
      });
      

    }

  }


 
  
  // componentDidUpdate (){
  //   this.nameTextInput.value = '';
  //   this.typeTextInput.value = '';
  //   this.ownerTextInput.value = '';

  // }


  modalOpen() {
    this.setState({ modal: true });
  }

  // modalClose() {
  //   this.setState({
  //     nameTextInput: "",
  //     modalInputType: "",
  //     modalInputOwner: "",
  //     modal: false
  //   });
  // }

  render() {
    let names = this.state.people.map(name => {
      return(  
      <li>{name}</li>
      )   
    });
let hi= console.log(names);
    return (
      <div className="App">
       
        <Button color="primary" onClick={this.toggle}>
          Create new Project
        </Button>
        <Modal  isOpen={this.state.modal}  toggle={this.toggleModal} show={this.state.modal} handleClose={e => this.modalClose(e)}>
          
          <ModalHeader>
              Create a New Project
          </ModalHeader>
          <ModalBody>
          <div className="form-group" >
            Enter Name:
            <input type="text" placeholder="Enter a new name" ref={(ref) => this.nameTextInput = ref} className="form-control" />
            Enter Member:
                        <input type="text" placeholder="Enter a new name" ref={(ref) => this.typeTextInput = ref} className="form-control" />
                        Enter Description:
            <input type="text" placeholder="Enter a new name" ref={(ref) => this.ownerTextInput = ref} className="form-control" />
            </div>
            <div className="form-group" >
          
            <Button color="success" onClick={this.handleClick}  type="button">
              Create new Project
            </Button>
            
            </div>
          </ModalBody>
        </Modal>
        {/* <CardComponent name={hi[0]} type= {hi[1]} owner={hi[2]} /> */}
        <div className="row">
            <div className="col-md-4 col-md-offset-2">
  {names}
            </div>
          </div>
      </div>
    );
  }
}

export default NewProject;

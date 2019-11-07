import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Modal, ModalBody, Button, ModalHeader, Input} from "reactstrap";



class NewProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      modalInputName: "",
      modalInputType: "",
      modalInputOwner: "",
      change: '',
      items:[]
    };
    this.toggle= this.toggle.bind(this);
    
  }
  
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  addItem = event => {
    event.preventDefault();
    const {modalInputName, modalInputType, modalInputOwner} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {
          id,
          modalInputName,
          modalInputType,
          modalInputOwner
        })
      ],
      modalInputName: "",
      modalInputType: "",
      modalInputOwner:""
    })
  };



  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const type = target.type;
    const owner = target.owner;
    const value = target.value;

    this.setState({
      [name]: value,
      [type]: value,
      [owner]: value
    });
  }

  handleSubmit(e) {

    this.setState({
      name: this.state.modalInputName,
      type: this.state.modalInputType,
      owner: this.state.modalInputOwner,
    
    });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({
      modalInputName: "",
      modalInputType: "",
      modalInputOwner: "",
      modal: false
    });
  }

  render() {
    return (
      <div className="App">
        <h1>
         {this.state.name}
          {this.state.type}
          {this.state.owner}
          {this.state.items}
        </h1>
        <Button color="primary" onClick={this.toggle}>
          Create new Project
        </Button>
        <Modal  isOpen={this.state.modal}  toggle={this.toggleModal} show={this.state.modal} handleClose={e => this.modalClose(e)}>
          
          <ModalHeader>
              Create a New Project
          </ModalHeader>
          <ModalBody>
          <div className="form-group" >
            <label>Enter Name:</label>
            <Input
              type="text"
              value={this.state.modalInputName}
              name="modalInputName"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
            <label>Type:</label>
            <Input
              type="text"
              value={this.state.modalInputType}
              name="modalInputType"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
            <label>Owner</label>
            <Input
              type="text"
              value={this.state.modalInputOwner}
              name="modalInputOwner"
              onChange={e => this.handleChange(e)}
              className="form-control"
            />
         </div>
          <div className="form-group">
            <Button color="success" onClick={e => this.handleSubmit(e)} type="button">
              Save
            </Button>
            
          </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default NewProject;

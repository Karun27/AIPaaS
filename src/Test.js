import React, {Component} from 'react';
import {ItemCard} from "./ItemCard";
import {AddItem} from "./AddItem";
import NewProject from './NewProject';

class Test extends Component {

  state = {
    name: "",
    type: "",
    owner:"",
    items: [
    ]
    
  };
  // this.toggle= this.toggle.bind(this);


  /**
   * Handle input changes in the AddItem component.
   * @param event
   */

  
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  /**
   * Add an item to state.
   * @param event
   */
  addItem = event => {
    event.preventDefault();
    const {name, type, owner} = this.state;
    const itemsInState = this.state.items;
    const itemsArrayLength = itemsInState.length;
    const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
    this.setState({
      items: [
        ...itemsInState,
        Object.assign({}, {
          id,
          name,
          type,
          owner
        })
      ],
      name: "",
      type: "",
      owner:""
    })
  };

  /**
   * Toggle the isEditing property of an item when the Edit button
   * within ItemCard is clicked.
   * @param index
   */
  toggleItemEditing = index => {
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isEditing: !item.isEditing
          }
        }
        return item;
      })
    });
  };


  /**
   * Update the Name and/or Price of an item.
   * @param event
   * @param index
   */
  handleItemUpdate = (event, index) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      items: this.state.items.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            [name]: value
          }
        }
        return item;
      })
    });
  };

  /**
   * Delete an item from state
   * @param index Index of the item to be deleted.
   */
  onDelete = index => {
    this.setState({
      items: [
        ...this.state.items.slice(0, index),
        ...this.state.items.slice(index + 1)
      ]
    });
  };

  render() {
    const {name, type, owner} = this.state;
    return <div>
      <div className="container pt-4">
      <NewProject />
     
        {/* <AddItem
            name={name}
            type={type}
            owner={owner}
            onChange={this.handleInputChange}
            onSubmit={this.addItem}
            
        /> */}
        

        <h1 className="display-4 my-4 text-center text-muted">Ongoing Projects</h1>
        <hr/>

        <div className="row">
          {
            this.state.items.map((item, index) =>
                <ItemCard
                    key={item.id}
                    index={index}
                    item={item}
                    toggleEditing={() => this.toggleItemEditing(index)}
                    onChange={this.handleItemUpdate}
                    onDelete={() => this.onDelete(index)}
                />
            )
          }
        </div>
      </div>
    </div>;
  }
}

export default Test;

import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import './App.css'

export const ItemCard = ({toggleEditing, item, onChange, index, onDelete}) => (
    <div className="col-md-6 col-lg-3">
      
          {item.isEditing
              ?
              <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-2 mr-sm-2"
                    placeholder="Name"
                    value={item.name}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="text"
                    name="type"
                    className="form-control"
                    placeholder="Type"
                    value={item.type}
                    onChange={event => onChange(event, index)}
                    required
                />
                <input
                    type="text"
                    name="owner"
                    className="form-control"
                    placeholder="Owner"
                    value={item.owner}
                    onChange={event => onChange(event, index)}
                    required
                />
              </div>
              :
              <Link to="/Project">
              <Button color="light">
                <div class= "d-flex justify-content-center">
              <div className="card mb-1">
        <div className="card-body">
                <h4 className="card-title text-center">{item.name}</h4>
                <div className="row justify-content-center mb-1">
                  <p className="card-text">
                    <span className="badge badge-light py-2 mr-2">Type</span>
                    <span>{item.type}</span>
                  
                  </p>
                  </div> <div className="row justify-content-center mb-1">
                  <p class="card-text ">
                    <span class="badge badge-light py-2 mr-2">Owner</span>
                    <span>{item.owner}</span>
                  </p>
                </div>
                </div></div>
                </div>
              </Button>
              </Link>
          }
  <div>
              <Button
              color="secondary"
                  type="button"
                  className="btn btn-primary mr-2"
                  onClick={toggleEditing}>
                {item.isEditing ? "Save" : "Edit"}
              </Button>
              <Button
                color="danger"
                  type="button"
                  className="btn btn-primary"
                  onClick={onDelete}>
                Delete
              </Button>
            </div>
           
      
    
   </div>
);

ItemCard.propTypes = {  
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired
  }),
  toggleEditing: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
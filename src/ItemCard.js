import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

export const ItemCard = ({toggleEditing, item, onChange, index, onDelete}) => (
    <div className="col-md-6 col-lg-3">
      {/* <div className="card mb-3">
        <div className="card-body"> */}
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
              <Button color="info">
                <h4 className="card-title text-center">{item.name}</h4>
                <div className="row justify-content-center mb-4">
                  <p className="card-text">
                    <span className="badge badge-light py-2 mr-5">Type</span>
                    <span>{item.type}</span>
                  </p>
                  <p className="card-text">
                    <span className="badge badge-light py-2 mr-5">Owner</span>
                    <span>{item.owner}</span>
                  </p>
                </div>
                
              </Button>
          }

          <div className="row justify-content-center">
            <div>
                <br></br>
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
        </div>
    //   </div>
    // </div>
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
};
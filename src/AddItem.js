import React from 'react';
import PropTypes from 'prop-types';


export const AddItem = ({name, type, owner, onChange, onSubmit}) => (
    <div className="row justify-content-center">
          <h1 className="display-4 my-4 text-center text-muted">Create a New Project</h1>
      
      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Name"
            value={name}
            name="name"
            onChange={onChange}
        />

        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="Type"
              value={type}
              name="type"
              onChange={onChange}
          />
        </div>
        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="Owner"
              value={owner}
              name="owner"
              onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 pxy-4">Save</button>
      </form>

    </div>
);

AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
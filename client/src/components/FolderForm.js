import React, {Component} from "react";
import shortId from 'shortid'
import ValidationError from "./ValidationError";
import PropTypes from "prop-types";

const style = {
  form: {
    margin: '0 auto',
    width: '400px',
  },
  saveButton: {
    marginLeft: '10px',
  }
}

class FolderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
    };
  }

  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();
    const {name} = this.state;
    this.props.onSubmit({name: name.value, id: shortId.generate()})
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  render() {
    const nameError = this.validateName();
    return (
      <form style={style.form} onSubmit={e => this.handleSubmit(e)}>
        <h2>{this.props.title}</h2>
        <div className="form-group">
          <label htmlFor="name">Folder Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e => this.updateName(e.target.value)}
          />
          {this.state.name.touched && <ValidationError message={nameError}/>}
        </div>
        <div>
          <button type="reset" className="waves-effect waves-light btn">
            Cancel
          </button>
          <button
            style={style.saveButton}
            type="submit"
            className="waves-light btn"
            disabled={this.validateName()}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

FolderForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default FolderForm;

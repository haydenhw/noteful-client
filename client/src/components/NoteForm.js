import React, {Component} from "react";
import shortId from 'shortid';
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

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: "",
        touched: false
      },
      content: {
        value: "",
        touched: false
      },
      folder: {
        value: "",
        touched: false
      },
    };
  }

  componentDidMount() {
    if (this.props.folders && this.props.folders.length) {
      this.setState({folder:{ value: this.props.folders[0].id, touched: false}})
    }
  }

  updateName(name) {
    this.setState({name: {value: name, touched: true}});
  }

  updateContent(content) {
    this.setState({content: {value: content, touched: true}});
  }

  updateFolder(folder) {
    this.setState({folder: {value: folder, touched: true}});
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.validateContent() && !this.validateName()) {
      const {name, content, folder} = this.state;
      const newFolder = {
        name: name.value,
        content: content.value,
        modified: new Date(),
        folderId: folder.value,
        id: shortId.generate()
      }

      this.props.onSubmit(newFolder)
    }
  }

  validateName() {
    const name = this.state.name.value.trim();
    if (name.length === 0) {
      return "Name is required";
    } else if (name.length < 3) {
      return "Name must be at least 3 characters long";
    }
  }

  validateContent() {
    const content = this.state.content.value.trim();
    if (content.length === 0) {
      return "Content is required";
    } else if (content.length < 3) {
      return "Content must be at least 3 characters long";
    }
  }


  render() {
    const nameError = this.validateName();
    const contentError = this.validateContent();

    const folderSelectOptions = this.props.folders.map((folder) => (
      <option key={folder.id}  value={folder.id}>{folder.name}</option>
    ))

    return (
      <form className="registration" style={style.form} onSubmit={e => this.handleSubmit(e)}>
        <h2>{this.props.title}</h2>
        <div className="form-group">
          <label htmlFor="name">Note Name *</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={e => this.updateName(e.target.value)}
          />
          {this.state.name.touched && <ValidationError message={nameError}/>}
        </div>
        <div className="form-group">
          <label htmlFor="content">Content *</label>
          <input
            type="text"
            name="content"
            id="content"
            onChange={e => this.updateContent(e.target.value)}
          />
          {this.state.content.touched && <ValidationError message={contentError}/>}
        </div>
        <div className="form-group">
          <label htmlFor="content">Folder
            <select onChange={e => this.updateFolder(e.target.value)} style={{display: 'block'}} name="folder-select" id="folder-select">
              {folderSelectOptions}
            </select>
          </label>
          {this.state.content.touched && <ValidationError message={contentError}/>}
        </div>
        <div>
          <button type="reset" className="waves-effect waves-light btn">
            Cancel
          </button>
          <button
            style={style.saveButton}
            type="submit"
            className="waves-light btn"
            disabled={this.validateName() || this.validateContent()}
          >
            Save
          </button>
        </div>
      </form>
    );
  }
}

NoteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  title: PropTypes.string,
}
export default NoteForm;

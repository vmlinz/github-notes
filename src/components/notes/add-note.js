import React, {PropTypes} from 'react';

export default class AddNote extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state={
      note: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnChange(e) {
    console.log(e);
    this.setState({
      note: e.target.value,
    });
  }

  handleOnClick() {
    console.log(this.state);
    this.props.addNote(this.state.note);
    this.setState({ note: "" });
  }

  render() {
    return (<div className="input-group">
      <input
        className="form-control"
        type="text"
        value={this.state.note}
        onChange={this.handleOnChange}
        placeholder="new note"/>
      <span className="input-group-btn">
        <button
          className="btn btn-default"
          type="button"
          onClick={this.handleOnClick}>
          Commit
        </button>
      </span>
    </div>);
  }
}

AddNote.propTypes = {
  addNote: React.PropTypes.func.isRequired,
};

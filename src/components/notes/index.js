import React, {PropTypes} from 'react';
import { connect } from 'react-firebase';

import NotesList from './notes-list';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (this.props.notes?
      <div>
        <button onClick={() => this.props.addNote('fuck')}>add a note</button>
        <h2>Name: {this.props.username}</h2>
        <NotesList notes={this.props.notes}/>
      </div>:
      <div>
        <h2>Notes(loading)</h2>
      </div>);
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.object,
};

const mapFirebaseToProps = ({ username }, ref) => {
  return {
    notes: `${username}`,
    addNote: note => ref(username).push(note),
  };
};

export default connect(mapFirebaseToProps)(Notes);

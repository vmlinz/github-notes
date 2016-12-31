import React, {PropTypes} from 'react';
import { connect } from 'react-firebase';

import NotesList from './notes-list';
import AddNote from './add-note';
import Header from './header';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (this.props.notes?
      <div>
        <Header username={this.props.username}/>
        <AddNote addNote={this.props.addNote}/>
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
  addNote: React.PropTypes.func,
};

const mapFirebaseToProps = ({ username }, ref) => {
  return {
    notes: `${username}`,
    addNote: note => ref(username).push(note),
  };
};

export default connect(mapFirebaseToProps)(Notes);

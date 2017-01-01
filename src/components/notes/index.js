import React, {PropTypes} from 'react';
import { connect } from 'react-firebase';

import NotesList from './notes-list';
import AddNote from './add-note';
import Header from './header';

const Notes = (props) => {
  return (<div>
    {props.notes?
    <div>
      <Header username={props.username}/>
      <AddNote addNote={props.addNote}/>
      <NotesList notes={props.notes}/>
    </div>:
    <div>
      <h2>Notes(loading)</h2>
    </div>}
  </div>);
};

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

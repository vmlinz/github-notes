import React, {PropTypes} from 'react';
import { connect } from 'react-firebase';

import NotesList from './notes-list';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.notes) {
      return (<div>
        <h2>Notes for {this.props.username}</h2>
        <NotesList notes={this.props.notes}/>
      </div>);
    } else {
      return (<div>
        <h2>Notes(loading)</h2>
      </div>);
    }
  }
}

Notes.propTypes = {
  notes: React.PropTypes.object,
};

const mapFirebaseToProps = ({ username }, ref) => {
  return { notes: `${username}` };
};

export default connect(mapFirebaseToProps)(Notes);

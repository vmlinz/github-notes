import React, {PropTypes} from 'react';
import entries from 'lodash/entries';

export default class NotesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="list-group">
      {entries(this.props.notes).map((note) => (
        <div key={note[0]} className="list-group-item">
          {note[1]}
        </div>
      ))}
    </div>);
  }
}

NotesList.propTypes = {
  notes: React.PropTypes.object.isRequired,
};

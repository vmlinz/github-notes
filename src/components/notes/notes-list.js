import React, {PropTypes} from 'react';
import entries from 'lodash/entries';

const NotesList = ({ notes }) => {
  return (<div className="list-group">
    {entries(notes).map((note) => (
      <div key={note[0]} className="list-group-item">
        {note[1]}
      </div>
    ))}
  </div>);
}

NotesList.propTypes = {
  notes: React.PropTypes.object.isRequired,
};

export default NotesList;

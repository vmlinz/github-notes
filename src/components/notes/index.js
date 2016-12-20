import React, {PropTypes} from 'react';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Notes: {JSON.stringify(this.props.notes)}</h2>
    </div>);
  }
}

Notes.propTypes = {
};

export default Notes;

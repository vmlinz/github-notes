import React, {PropTypes} from 'react';
import { connect } from 'react-firebase';

class Notes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (<div>
      <h2>Notes: {JSON.stringify(this.props.notes)}</h2>
    </div>);
  }
}

Notes.propTypes = {
  notes: React.PropTypes.object,
};

const mapFirebaseToProps = ({ username }, ref) => {
  return { notes: `${username}` };
};

export default connect(mapFirebaseToProps)(Notes);

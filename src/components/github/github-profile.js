import React, {PropTypes} from 'react';

class GithubProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Name: {this.props.username}</h2>
      <p>Bio: {JSON.stringify(this.props.bio)}</p>
    </div>);
  }
}

GithubProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired,
};

export default GithubProfile;

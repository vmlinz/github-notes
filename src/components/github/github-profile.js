import React, {PropTypes} from 'react';

class GithubProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Name: {this.props.name}</h2>
      <p>Bio: {JSON.stringify(this.props.bio)}</p>
    </div>);
  }
}

GithubProfile.propTypes = {
};

export default GithubProfile;

import React, {PropTypes} from 'react';

class Repos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Name: {this.props.username}</h2>
      <h2>Repos: {JSON.stringify(this.props.repos)}</h2>
    </div>);
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired,
};

export default Repos;

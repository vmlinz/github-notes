import React, {PropTypes} from 'react';

class Repos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h2>Repos: {JSON.stringify(this.props.repos)}</h2>
    </div>);
  }
}

Repos.propTypes = {
};

export default Repos;

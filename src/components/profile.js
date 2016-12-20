import React, {PropTypes} from 'react';

import GithubProfile from './github/github-profile';
import Repos from './github/repos';
import Notes from './notes';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: {name: 'vmlinz'},
      repos: [{name: 'git'}],
      notes: [{name: 'help'}],
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <GithubProfile name={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes} />
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
};

export default Profile;

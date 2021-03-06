import React, { PropTypes } from 'react';

import { getUserInfoAndRepos } from '../utils/github';

import GithubProfile from './github/github-profile';
import Repos from './github/repos';
import Notes from './notes';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bio: {name: 'vmlinz'},
      repos: [{name: 'git'}],
      notes: [],
    };
  }

  componentWillMount() {
    getUserInfoAndRepos(this.props.params.username)
      .then(({ bio, repos }) => {
        return this.setState({...this.state, bio, repos})
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="row">
        <div className="col-md-4">
          <GithubProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} />
        </div>
      </div>
    );
  }
};

export default Profile;

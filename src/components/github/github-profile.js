import React, {PropTypes} from 'react';

const Header = ({ username }) => {
  return (<h2>
    Profile
  </h2>);
};

const Bio = ({ bio }) => {
  return (<div>
    {bio.avatar_url && <li className="list-group-item"><img className="img-responsive" src={bio.avatar_url} alt={bio.avatar_url} /></li>}
    {bio.name && <li className="list-group-item">Name: {bio.name}</li>}
    {bio.login && <li className="list-group-item">Login: {bio.login}</li>}
  </div>);
};

class GithubProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <Header username={this.props.username} />
      {this.props.bio && <Bio bio={this.props.bio} />}
    </div>);
  }
}

GithubProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired,
};

export default GithubProfile;

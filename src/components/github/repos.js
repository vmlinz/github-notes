import React, {PropTypes} from 'react';

const RepoItem = ({ repo }) => {
  return (<li className="list-group-item">
    {repo.html_url && <h4><a href={repo.html_url}>{repo.html_url}</a></h4>}
    {repo.description && <p>{repo.description}</p>}
  </li>);
};

const ReposList = ({ repos }) => {
  console.log(repos);
  return (<ul className="list-group">
    {repos.map((repo, index) => {
      return <RepoItem repo={repo} key={index} />;
    })}
  </ul>);
}

class Repos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.repos);
    return (<div>
      <h2>Repos</h2>
      {this.props.repos && <ReposList repos={this.props.repos} />}
    </div>);
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired,
};

export default Repos;

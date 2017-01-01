import React, {PropTypes} from 'react';

const RepoItem = ({ repo }) => {
  return (<li className="list-group-item">
    {repo.html_url && <h4><a href={repo.html_url}>{repo.name}</a></h4>}
    {repo.description && <p>{repo.description}</p>}
  </li>);
};

RepoItem.propTypes = {
  repo: React.PropTypes.object.isRequired,
};

const ReposList = ({ repos }) => {
  console.log(repos);
  return (<ul className="list-group">
    {repos.map((repo, index) => {
      return <RepoItem repo={repo} key={index} />;
    })}
  </ul>);
}

ReposList.propTypes = {
  repos: React.PropTypes.array.isRequired,
};

const Repos = (props) => {
  return (<div>
    <h2>Repos</h2>
    {props.repos ?
    <ReposList repos={props.repos} /> :
    <h2>Loading</h2>}
  </div>);
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired,
};

export default Repos;

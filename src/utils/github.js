import axios from 'axios';

export const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

export const getUserInfo = (username) => {
  return axios.get(`https://api.github.com/users/${username}`);
}

export const getUserInfoAndRepos = (username) => {
  return axios.all([getUserInfo(username), getRepos(username)])
    .then((responses) => ({
      bio: responses[0].data,
      repos: responses[1].data,
    }));
}

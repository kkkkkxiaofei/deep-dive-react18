const _fetch = require("node-fetch");

const BASE_URL = "https://api.github.com";

const baseRequest = (path) => {
  const url = `${BASE_URL}/${path}`;
  return new Promise((resolve) => setTimeout(resolve, 0)).then(() => {
    return _fetch(url, {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw `Error: ${res.status}`;
        }
        return res.json();
      })
      .then((data) => data)
      .catch(console.error);
  });
};

const getRepos = () =>
  baseRequest("orgs/reactjs/repos").then((repos) => {
    return repos.map(({ id, name }) => ({ id, name }));
  });

const getRepo = (repo) => baseRequest(`repos/reactjs/${repo}`);


const getMetrics = () => {
  return getRepos().then((repos) => {
    return Promise.all(repos.map(({ name }) => getRepo(name))).then(
      (repoDetails) => {
        const metrics = repoDetails.filter(Boolean).reduce(
          (result, current) => ({
            watchers: current.watchers + result.watchers,
            forks: current.forks + result.forks,
            issues: current.open_issues + result.open_issues,
          }),
          {
            watchers: 0,
            forks: 0,
            open_issues: 0,
          }
        );
        return metrics;
      }
    );
  });
};

module.exports = {
  getRepo,
  getRepos,
  getMetrics,
};

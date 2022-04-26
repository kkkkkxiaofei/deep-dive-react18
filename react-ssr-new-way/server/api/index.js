import _fetch from "node-fetch";

const BASE_URL = "https://api.github.com";

const baseRequest = (path) => {
  const url = `${BASE_URL}/${path}`;
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
};

export const getRepos = () =>
  baseRequest("orgs/reactjs/repos").then((repos) => {
    console.log("=====repos======", repos.length);
    return repos.map(({ id, name }) => ({ id, name }));
  });

export const getRepo = (repo) => baseRequest(`repos/reactjs/${repo}`);

export const getMetrics = async () => {
  const repos = await getRepos();
  return Promise.all(repos.map(({ name }) => getRepo(name))).then(
    (repoDetails) => {
      const metrics = repoDetails.filter(Boolean).reduce(
        (result, current) => ({
          ...result,
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
};

import _fetch from "node-fetch";

const BASE_URL = "https://api.github.com";

const baseRequest = (path) =>
  _fetch(`${BASE_URL}/${path}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
  }).then((res) => res.json());

export const getRepos = () =>
  baseRequest("orgs/reactjs/repos").then((repos) => {
    return repos.map(({ id, name }) => ({ id, name }));
  });

export const getRepo = (repo) => baseRequest(`repos/reactjs/${repo}`);

export const getMetrics = async () => {
  const repos = await getRepos();
  console.log(repos, '------------');
  return Promise.all(repos.map(({ name }) => getRepo(name))).then(
    (repoDetails) => {
      console.log(repoDetails[0], '------------');
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

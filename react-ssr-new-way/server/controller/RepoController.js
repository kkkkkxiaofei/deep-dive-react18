import RepoService from "../service/RepoService";

export const getRepo = async (req, res) => {
  const repoName = req.params.name;
  const repo = await RepoService.getRepo(repoName);
  res.send(repo);
};

export const getRepos = async (req, res) => {
  const repos = await RepoService.getRepos();
  res.send(repos);
};

export const getMetrics = async (req, res) => {
  const metrics = await RepoService.getMetrics();
  res.send(metrics);
};

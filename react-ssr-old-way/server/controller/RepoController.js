import RepoService from "../service/RepoService";

export const getRepos = async (req, res) => {
  const repos = await RepoService.getRepos();
  res.send(repos);
}
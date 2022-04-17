import * as API from "../api";

export default class RepoService {
  static async getRepo(repo) {
    return API.getRepo(repo);
  }

  static async getRepos() {
    return API.getRepos();
  }

  static async getMetrics() {
    return API.getMetrics();
  }
}

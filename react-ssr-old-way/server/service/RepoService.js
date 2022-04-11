import * as API from "../api";

export default class RepoService {
  static async getRepos() {
    return API.getRepos();
  }
}

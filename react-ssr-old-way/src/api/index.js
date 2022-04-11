export const getRepos = () => fetch("/api/repos").then((res) => res.json());

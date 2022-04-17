export const getRepo = (name) => fetch(`/api/repo/${name}`).then((res) => res.json());

export const getRepos = () => fetch("/api/repos").then((res) => res.json());

export const getMetrics = () => fetch("/api/metrics").then((res) => res.json());

const fakeRepos = [
  {
    name: 'react',
  },
  {
    name: 'react-dom',
  }
]

export const getRepos = async () => {
  return new Promise((resolve) => setTimeout(() => {
    resolve(fakeRepos);
  }, 0));
};


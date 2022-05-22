const getRandomChars = () => {
  const len = parseInt(Math.random() * 30);
  return [...new Array(len)].map(() => {
    const code = Math.round(Math.random() * (90 - 65)) + 65;
    const randomLetter = String.fromCharCode(code);
    return randomLetter.toLowerCase();
  });
};

export const fakeSearch = (query) => {
  const randomDuration = parseInt(Math.random() * 1000);
  return new Promise((resolve) => {
    setTimeout(() => {
      const resultList = [...new Array(500)].map(() => {
        const result = getRandomChars();
        const randomIndex = parseInt(Math.random() * result.length);
        result.splice(randomIndex, 0, query);
        return result.join("");
      });
      resolve(resultList);
    }, randomDuration);
  });
};

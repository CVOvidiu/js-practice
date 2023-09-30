export const capitalize = (text) => {
  let res = "";
  const words = text.split(" ");

  words.forEach((word) => {
    const wordAux = word.replace(word[0], word[0].toUpperCase());
    res = res.concat(wordAux, " ");
  });
  res = res.trimEnd();
  return res;
};

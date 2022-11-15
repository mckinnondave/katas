const findShort = (string) => {
  const convertToArray = string.split(" ");
  let shortest = convertToArray[0].length;
  for (const word of convertToArray) {
    if (word.length < shortest) {
      shortest = word.length;
    }
  }
  return shortest;
};


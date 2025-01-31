
function getRandomName() {
  const names = ["John", "Jane", "Alice", "Bob", "Charlie"];
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = {
  getRandomName,
  getRandomNumber,
};

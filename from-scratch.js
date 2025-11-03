// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

/* -------------------------------------------- */
/* --------------STRING PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleWords = ['dog', 'blueberry', 'alabama', 'earth', 'football'];

// Problem 1
const printEveryWord = (words) => {
  words.forEach((word)=>console.log(word));
};
printEveryWord(sampleWords);

// Problem 2
const getStringLengths = (strings) => {
  return strings.map((string)=>string.length);
};
console.log(getStringLengths(sampleWords));

// Problem 3
const sortWordsZtoA = (words) => {
  words.sort().reverse()
};
sortWordsZtoA(sampleWords);
console.log(sampleWords);
/* -------------------------------------------- */
/* --------------NUMBER PROBLEMS--------------- */
/* -------------------------------------------- */

const sampleNumbers = [7, 3, 9, 1, 4, 8, 2, 10, 5, 6];

// Problem 4
const getEvenNumbers = (nums) => {
  return nums.filter((num) => num%2===0);
};
console.log(getEvenNumbers(sampleNumbers));

// Problem 5
const getLargestNumber = (numbers) => {
  return numbers.reduce((acc, num) => {return Math.max(acc,num)}, numbers[0]);
};
console.log(getLargestNumber(sampleNumbers));

/* -------------------------------------------------- */
/* --------------OBJECT ARRAY PROBLEMS--------------- */
/* -------------------------------------------------- */

const sampleUsers = [
  { name: 'Charlie', isActive: true, age: 18, score: 80 },
  { name: 'Edward', isActive: true, age: 30, score: 60 },
  { name: 'Bob', isActive: true, age: 25, score: 90 },
  { name: 'Diana', isActive: false, age: 35, score: 70 },
  { name: 'Alice', isActive: false, age: 28, score: 100 },
];

// Problem 6
const printUserNamesAndScores = (users) => {
  users.forEach((user) => console.log(`${user.name} scored ${user.score} points.`))
};
printUserNamesAndScores(sampleUsers);

// Problem 7
const getUserNames = (users) => {
  return users.map((user) => user.name);
};
console.log(getUserNames(sampleUsers));

// Problem 8
const getActiveUsersUnder30 = (users) => {
  return users.filter((user) => user.age < 30 && user.isActive);
};
console.log(getActiveUsersUnder30(sampleUsers));

// Problem 9
const getTotalScore = (users) => {
  return users.reduce((acc, user) => acc+user.score,0);
};
console.log(getTotalScore(sampleUsers));

// Problem 10
const sortUsersByScoreDescending = (users) => {
  users.sort((a,b) => b.score-a.score);
};
sortUsersByScoreDescending(sampleUsers);
console.log(sampleUsers);

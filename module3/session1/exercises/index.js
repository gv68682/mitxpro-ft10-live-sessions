//Exercise 1- Find the longest word

const words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
]

const findLongestWord = () => {
  //Our code
  let otherSize = 0
  let word = ''

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > otherSize) {
      otherSize = words[i].length
      word = words[i]
    }
  }
  return word
}

console.log(findLongestWord())

//Exercise 2- Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]

function sumNumbers(array) {
  return numbers.reduce((prev, curr) => {return prev + curr})
}

sumNumbers(numbers)

//Exercise 3

/* Let's create a new function sum() that calculates the sum for array filled with (almost) any type of data. 
  Note that strings should have their length added to the total, 
  and boolean values should be coerced into their corresponding numeric values*/

const mixedArr = [6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]

function sum(array) {
  let len = array.length
  let sumOfArr =0;
    for(let i =0; i<len; i++){
        if(typeof(array[i]) === 'string'){
            let strLen = array[i].length
            sumOfArr += strLen
        }
        else if(typeof(array[i]) === Boolean){
                if(array[i] === true){sumOfArr += 1}
                else{ sumOfArr += 0}
        }
        else{ sumOfArr += array[i]}
    }
    console.log(sumOfArr , 'sumOfArr')
    return sumOfArr
}
sum(mixedArr)

//Exercise 4
//Filter
let objArr= [
  {foodId: 1, hasCheese: false}, 
  {foodId: 2, hasCheese: false},
  {foodId: 3, hasCheese: true},
  {foodId: 4, hasCheese: true}]

let filterArr = objArr.filter(function(item){ return !item.hasCheese})
console.log(filterArr)

//-----------------
//ForEach

let studentMarks= [
  {subject: "math", score: 100}, 
  {subject: "science", score: 98},
  {subject: "language", score: 95},
  {subject: "socialStudies" , score: 90},
  {subject: "pe", score: 100}
  ]

let avgScore = 0;
let totalScore=0;
function getAvgScore(subject, counter, array){
  totalScore += subject.score;
  avgScore = totalScore/array.length
}

studentMarks.forEach(getAvgScore)
console.log(avgScore);

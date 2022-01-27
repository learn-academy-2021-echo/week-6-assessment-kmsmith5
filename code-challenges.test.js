// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("personInfo", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(personInfo(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.
//create a result variable, empty array
//iterate through input array
//capitalize each name by splitting the sentence into a words array, capitalizing the words, then joining
//use string interpolation and insert the string at name and the sting at occupation with 'is' in the middle and a period at the end.
//push the current string into result array
//return result
//refactored to cut down the amouunt of variables

const personInfo = (array) => {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let nameArray = array[i].name.split(" ")
  for (let i = 0; i < nameArray.length; i++) {
      nameArray[i] = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1);
  }
    result.push(`${nameArray.join(" ")} is ${array[i].occupation}.`)
  }
  return result
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("remainders", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

//iterate over array and return only numbers (using .filter)
//iterate over numbers array and return the remainder when divided by 3 by using modulo.

const remainders = (array) => {
  return array.filter(value => {return typeof value === 'number'}).map(number => {return number % 3})
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("cubeAndSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]
    expect(cubeAndSum(cubeAndSum1)).toEqual(99)
    expect(cubeAndSum(cubeAndSum2)).toEqual(1125)
  })
})

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
//iterate over input array
//use .map to iterate and cube each value
//use .reduce to sum the cubed values
const cubeAndSum = (array) => {
  return array.map(num => num ** 3).reduce((a, b) =>  a + b, 0);
}

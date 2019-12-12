const makeParagraph = (arr) => {
  let newStr = ''
  for (let i=0;i<arr.length;i++) {
    if (i<arr.length-1) {
      newStr = newStr +  arr[i] + ' '
    } else {
      newStr = newStr +  arr[i]
    }
  }
  return newStr
}


const averageDogAge = (pets) => {
  let newArr = []
  const blahs = pets.filter((pet) => pet.species === 'dog')
  for (const blah of blahs) {

    blah.forEach((blah) => newArr.push(blah.age))
  }
  return newArr
}


const addToDigits = (str,num) => {
str = str.toString()
let newStr = ''
for (let i=0; i<str.length; i++) {
  newStr += `${str[i] + num}`
}
return newStr  
}

console.log(addToDigits(111,1))


const nightOwls = (nights) => {
  return nights.filter((night) => night.localTime >= 100 && night.localTime <= 400 && night.asleep === false )

}

const nap = (nights) => {
  // const blah = nights.filter((night) => night.localTime >= 100 && night.localTime <= 400 && !night.asleep)
  // !blah.asleep === blah.asleep
  // return blah
  // const blah = nights.map((night) => nightOwls(night))
  // return blah = blah.map((night) => night.asleep === true )
  // const blah = nights.filter((night) => night.localTime >= 100 && night.localTime <= 400 && night.asleep === false )
  return nights.filter((night) => night.localTime >= 100 && night.localTime <= 400).map((night)=> night.asleep===false ? night.asleep=== true : night.asleep=== true)

}

const findIndices = (arr,func) => {
  let newArr = []
  for (let i=0; i< arr.length; i++) {
    if (func(arr[i])) {
      newArr.push(i)
    }
  }
  return newArr
}

const Faqtory = () => {
  return {
    questions: [],
    length: 0, 

    addQuestion: function (question) {
      this.questions.push(this.question.text)
      this.questions.length++
    },

    answerQuestion: function () {

    },

  } 

}


class Dog {
  constructor(name,breed,color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
  }

  makeNoise () {
    return 'Woof.'
  }
}

class GreatDane extends Dog {
  constructor(name, color) {
    super(name,'Great Dane', color) 
  }

  makeNoise() {
    return 'WOOF.'
  }

}

class Beagle extends Dog {
  constructor(name) {
    super(name, 'Beagle', 'white/black/brown')
  }

  makeNoise () {
    return 'Awooooooooo.'
  }

}

class Pointer extends Dog {
  constructor(name, color, points) {
    super(name, 'Pointer', color)
  }
  points() {
  if (points) {
    return 'Over there!'
  } else {
    return 'Woof.'
  }
  }
}


module.exports = {
  makeParagraph,
  averageDogAge,
  addToDigits,
  nightOwls,
  nap,
  findIndices,
  Faqtory,
  Dog,
  GreatDane,
  Beagle,
  Pointer,
}
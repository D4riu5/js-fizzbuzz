

for (let i = 1; i <= 100; i++) {
  
  // if i can be divided by 5 AND divided by 3, print fizz buzz
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz")
  }

  // but if i can be divided 5 Only, print buzz
  else if (i % 5 == 0) {
    console.log("Buzz")
  }

  // but if i can be divided 3 Only, print buzz
  else if (i % 3 == 0) {
    console.log("Fizz")
  }

  //otherwise just print i number
  else{
    console.log("numero " + i)
  }
}






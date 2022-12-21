const myDiv = document.querySelector(".my_div")

for (let i = 1; i <= 100; i++) {
  
  // if i can be divided by 5 AND divided by 3, print fizz buzz
  if (i % 5 == 0 && i % 3 == 0) {
    // added element using create element and append
    let newElement = document.createElement('p');
    newElement.innerHTML = 'FizzBuzz';
    myDiv.append(newElement);
    console.log("FizzBuzz")
  }

  // but if i can be divided 5 Only, print buzz
  else if (i % 5 == 0) {
    // added element directly to variable and added it to myDiv using innerHTML
    let newElement = `<p> Buzz </p>`
    myDiv.innerHTML += newElement
    console.log("Buzz")
  }

  // but if i can be divided 3 Only, print buzz
  else if (i % 3 == 0) {
    let newElement = `<p> Fizz </p>`
    myDiv.innerHTML += newElement
    console.log("Fizz")
  }

  //otherwise just print i number
  else{
    let newElement = `<p> ${i} </p>`
    myDiv.innerHTML += newElement
    console.log("numero " + i)
  }
}






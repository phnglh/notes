const array = [10, 20, 30, 40, 50];

console.log(array)

console.log(array[1]);

console.log(array.push(10))

// console.log(array.pop())

console.log(array.unshift(35))

console.log(array.map(x => x*2))
for (let index = 0; index <array.length; index++){
  console.log(`index: ${index}: value: ${array[index]}`)
}


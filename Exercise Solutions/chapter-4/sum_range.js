/* Write a range function that takes two arguments, start and end, and returns an array containing all the numbers
 from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
Run the previous program and see whether it does indeed return 55.

modify your range function to take an optional third argument that indicates the “step” value used to build up the array.
If no step is given, the array elements go up by increments of one, corresponding to the old behavior.
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1)
produces [5, 4, 3, 2].
*/

function range (start, end, step) {
  let arr = []
  if (arguments.length !== 3) {
    step = 1
  }
  if (start > end) {
    for (let i = start; i >= end; i = i + step) {
      arr.push(i)
    }
  } else {
    for (let i = start; i <= end; i = i + step) {
      arr.push(i)
    }
  }

  return arr
}
console.log(range(1, 10, 2))
console.log(range(1, 10))
console.log(range(5, 2, -1))

function sum (arr) {
  let totalSum = 0
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i]
  }
  return totalSum
}
console.log(sum(range(1, 10)))

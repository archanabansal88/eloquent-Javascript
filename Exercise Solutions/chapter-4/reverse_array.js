/* Reversing an array...write two functions, reverseArray and reverseArrayInPlace.
The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.
 The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.
 Neither may use the standard reverse method.
 */

function reverseArray (arr) {
  let nwArray = []
  for (let i = arr.length - 1; i >= 0; i--) {
    nwArray.push(arr[i])
  }
  return nwArray
}

console.log(reverseArray(['A', 'B', 'C']))
console.log(reverseArray([1, 2, 3, 4, 5]))

function reverseArrayInPlace (arr) {
  let i = 0
  let j = arr.length - 1
  let length = parseInt(arr.length / 2)

  while (i < length) {
    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]

    i++
    j--
  }
  console.log(arr)
}

var arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue)
console.log(arrayValue)

/* Write a function countBs that takes a string as its only argument
and returns a number that indicates how many uppercase “B” characters are in the string. */

function countBs (str) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === 'B') {
      count++
    }
  }
  return count
}

console.log(countBs('BBCBB'))

/* write a function called countChar that behaves like countBs,
  except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters).
  */

function countChar (str, n) {
  var count = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] === n) {
      count++
    }
  }
  return count
}

console.log(countChar('kakkerkklak', 'k'))

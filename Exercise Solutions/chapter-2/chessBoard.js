/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #

When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/

function pattern (m, n) {
  var count = ''

  for (var i = 0; i < m; i++) {
    count = ''

    for (var j = 0; j < n; j++) {
      if ((i % 2 !== 0 && j % 2 !== 0) || (i % 2 === 0 && j % 2 === 0)) {
        count += ' '
      } else {
        count += '#'
      }
    }
    console.log(count)
  }
}

// pattern(8,8);

// other method--
var size = 8
var board = ''

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 === 0) { board += ' ' } else { board += '#' }
  }
  board += '\n'
}

// console.log(board);

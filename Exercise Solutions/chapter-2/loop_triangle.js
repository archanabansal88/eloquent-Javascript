
/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

function seven (n) {
  var count = ''
  for (var i = 1; i <= n; i++) {
    count = count + '#'
    console.log(count)
  }
}
// seven(7);

// other method
/*
for (var line = "#"; line.length < 8; line += "#")
  console.log(line);
*/

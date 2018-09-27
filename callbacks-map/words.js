

var words = ["ground", "control", "to", "major", "tom"];

var results = []

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map (arr, action) {
  // go through every item in the array
  for (var i=0; i< arr.length; i++) {
      results.push(action(arr[i]));
    } return results
  }


console.log(results)
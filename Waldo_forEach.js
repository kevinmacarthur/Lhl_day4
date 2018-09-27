// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
    arr.forEach(function(person) {
    if (person === "Waldo") {
      found(arr);   // execute callback
    }
  })
}
function actionWhenFound(arr) {
  var location = arr.indexOf("Waldo")
  console.log(`Found him at index ` + location);
}

findWaldo(["Alice", "Bob", "Wis", "Waldo"], actionWhenFound);
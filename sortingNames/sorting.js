var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 17 }
];

var sortByName = students.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }
      if(nameA === nameB) {
        return a.age - b.age
      }
    }
  )
console.log(students)

// function sortAge (){
// for (i =0; i < students.length; i++) {
//   if (students[i].name = students.name) {
//     var result = sortName.sort(function(a,b) {
//     return a.age - b.age
//     console.log(result)
//     })
//   }
//   }
// }
//  sortAge()

// this sorts by age
// var result = sortName.sort(function(a,b) {
//   return a.age - b.age

// console.log(result)
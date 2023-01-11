let grades = ['FAIL', 'FAIL', 'B']

// the long way
// let newGrades = grades.filter( (grade) => {
//     if(grade !== 'FAIL') {
//         return true
//     }
// })


// the short way
let newGrades = grades.filter (grade => grade !== 'FAIL')

console.log(newGrades)
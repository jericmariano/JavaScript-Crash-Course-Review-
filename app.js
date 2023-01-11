let grades = ['A+', 'A', 'FAIL']


// way 1
for (let i = 0; i < grades.length; i++) 
    if (grades[i] !== 'FAIL') {
        console.log(grades[i])
    }

// way 2 (Create a new array)

let goodGrades = []

for (let i = 0; i < grades.length; i++) {
    if (grades[i] !== 'FAIL') {
        goodGrades.push(grades[i])
    }
}

console.log(goodGrades)

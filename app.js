let dollars = [1, 5, 10, 3]

// long way

let cents = dollars.map( (elem) => {
    return elem * 100
})


// // short way
// let cents = dollars.map(elem => elem * 100)

console.log(cents)
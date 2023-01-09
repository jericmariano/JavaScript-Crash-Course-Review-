let cash = 30
let price = 40

if (cash > price) {
    console.log(`you paid extra, here's ${cash - price} change`)
}
else if (cash === price) {
    console.log("you paid the exact amount")
}
else {
    console.log(`not enough money, you still owe ${price - cash} `)
}
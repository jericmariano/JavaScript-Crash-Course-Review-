// let userFirstName = 'Jeric'
// let userLastName = 'Mariano'
// let userDiscordId = 'jmar08'
// let userSubscriptionStatus = 'VIP'

let users = [{
    username: 'Jeric',
    email: 'jericmariano08@gmail.com',
    password: 'test123',
    subscriptionStatus: 'VIP',
    discordId: 'jmar08',
    lessonsCompleted: [0, 1]
},
{
    username: 'Jae',
    email: 'Jae08@gmail.com',
    password: 'jae123',
    subscriptionStatus: 'VIP',
    discordId: 'Jae08',
    lessonsCompleted: [0, 1, 2, 3]
},
{
    username: 'Ze',
    email: 'Ze08@gmail.com',
    password: 'Ze123',
    subscriptionStatus: 'VIP',
    discordId: 'Ze08',
    lessonsCompleted: [0, 1, 2, 3]
}
]

// function logIn(email, password) {
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].email === email) {
//             console.log(users[i])
//             if(users[i].password === password) {
//                 console.log('log the user in --- the details are correct')
//             }
//             else {
//                 console.log('password is incorrect')
//             }
//             return;
//         }
//     }
//     console.log('could not find email')
// }

// logIn('jericmariano08@gmail.com', 'test123')

// console.log(users[0].lessonsCompleted.map(elem => elem * 2))

// console.log(user.username[0])

// console.log(user.subscriptionStatus)

// console.log(user.lessonsCompleted.map(elem => elem * 2))

function register (user) {
    users.push(user)
}

register({
    username: 'Mark', 
    email: 'mark@gmail.com',
    password: 'mark123', 
    subscriptionStatus: 'VIP', 
    discordId: 'Mark08', 
    lessonsCompleted: [0, 1, 2, 3, 4]})

console.log(users)
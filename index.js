const guests = ['Guadalupe', 'Ollie', 'Aki'];
const messages = [];

function writeCards(guests) {
    for (let i = 0; i < guests.length; i++) {
        messages.push(`Thank you, ${guests[i]}, for the wonderful surprise gift!`)
        //console.log(`Thank you, ${guests[i]}, for the wonderful surprise gift!`)
    }
    return messages
}

function countDown () {
    for (let i = 10; i > -1; i--) {
        console.log(i)
    }
}

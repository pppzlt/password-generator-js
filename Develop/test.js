var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numbers = '0123456789'
var symbols = '~`!@#$%^&*()-_=+{[}]|;:,<.>/?'
const array = [lowercase, uppercase, numbers, symbols];
var pLength;
var pLower = false;
var pUpper = false;
var pNumber = false;
var pSymbol = false;
const type = [pLower, pUpper, pNumber, pSymbol]
var poll = '';
var actualPassword = '';
const p = document.querySelector('p')

function input() {
    pLength = window.prompt('How long do you want this password to be? (between 8 and 128)')
    if (pLength !== undefined) {
        while (pLength < 8 || pLength > 128) {
            window.alert('Invalid password length')
            pLength = window.prompt('How long do you want this password to be? (between 8 and 128)')
        }
    }
    else {
        while (pLength === undefined) {
            pLength = window.prompt('How long do you want this password to be? (between 8 and 128)')
        }
    }

    while (!type[0] && !type[1] && !type[2] && !type[3]) {
        type[0] = window.confirm('Do you want lowercase letters in the password?')
        type[1] = window.confirm('Do you want uppercase letters in the password?')
        type[2] = window.confirm('Do you want numbers in the password?')
        type[3] = window.confirm('Do you want symbols in the password?')
        if (!type[0] && !type[1] && !type[2] && !type[3]) {
            alert('Invalid input, at least one character')
        }
    }
}

function randomPassword() {
    for (let i = 0; i < 4; i++) {
        if (type[i]) {
            poll += array[i]
        }
    }
    for (let i = 0; i < pLength; i++) {
        actualPassword += poll.charAt(Math.floor(Math.random() * poll.length))
    }



}

document.querySelector('button').onclick = () => {

    actualPassword = ''
    console.log('Hello!')
    input()
    randomPassword()
    p.innerHTML = actualPassword
}




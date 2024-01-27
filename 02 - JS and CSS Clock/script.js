let current_date = new Date()
const HAND_SIZE = 150
const hour_hand = document.getElementsByClassName('hour-hand').item(0)
const minute_hand = document.querySelector('.min-hand')
const second_hand = document.getElementsByClassName('second-hand').item(0)
let seconds = current_date.getSeconds()
let minutes = current_date.getMinutes()
let hours = current_date.getHours()

let deg = 90 + (6 * seconds)
let deg_minutes = 90 + (6 * minutes)
let deg_hours = 100 + (30 * hours)

second_hand.style.rotate = deg + 'deg'
minute_hand.style.rotate = deg_minutes + 'deg'
hour_hand.style.rotate = deg_hours + 'deg'

setInterval(() => {
    seconds++;
    deg += 6;
    if ((seconds + 1) === 61) {
        seconds = 0
        deg_minutes += 7
        minute_hand.style.rotate = deg_minutes + 'deg'
    };

    if ((minutes + 1) === 61) {
        minutes = 0
    }

    if ((hours + 1) === 24) {
        hours = 0
    }
    if ((deg + 1) === 361) { deg = 0 };
    second_hand.style.rotate = deg + 'deg';
}, 1000);


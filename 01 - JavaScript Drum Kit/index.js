const keys_numbers = { 'A': 0, 'S': 1, 'D': 2, 'F': 3, 'G': 4, 'H': 5, 'J': 6, 'K': 7, 'L': 8 }
const elements = Array.from(document.getElementsByClassName('keys').item(0).children)
let sons = {}

function load_sound(key, path) {
    const audio = new Audio(path)
    sons[key] = audio
}

function play_sound(key, sound_element) {
    const som = sons[key].cloneNode()
    som.onloadedmetadata = function () {
        som.play()
        sound_element.className = 'key ' + 'playing'
        setTimeout(() => {
            sound_element.className = 'key'
        }, som.duration + 100)
    }

}

document.addEventListener('keydown', (value) => {
    const key_pressed = value.key.toUpperCase()
    if ('ASDFGHJKL'.includes(key_pressed)) {
        let sound_element = elements[keys_numbers[key_pressed]]
        let sound_name = elements[keys_numbers[key_pressed]].children.item(1).innerHTML
        const path = `./sounds/${sound_name}.wav`
        sound_element.className = 'key ' + 'playing'
        load_sound(key_pressed, path)
        play_sound(key_pressed, sound_element)
    } 
})
import './style.css'
import { script } from './script.js'

document.querySelector('#app').innerHTML = `
    <button id="one">1</button>
    <button id="two">2</button>
    <button id="three">3</button>
    <button id="four">4</button>
`

script(document.querySelector('#app'))

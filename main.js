import './style.css'
import { script } from './script.js'

document.querySelector('#app').innerHTML = `
    <div id=answerScreen>
        <h1 id="answer">Abloot</h1>
        <p id="subans">Wow du vet verkligen mycket om herr Abl</p>
        <button id="nextQuestion">Starta quiz</button>
    </div>
    <h2 id="questionText"></h2>
    <h3 id="score"></h3>
    <h3 id="timer"></h3>
    <button id="one">1</button>
    <button id="two">2</button>
    <button id="three">3</button>
    <button id="four">4</button>
`

script(document.querySelector('#app'))

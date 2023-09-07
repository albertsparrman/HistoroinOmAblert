export function script(element) {
    const ans1 = element.querySelector('#one')
    const ans2 = element.querySelector('#two')
    const ans3 = element.querySelector('#three')
    const ans4 = element.querySelector('#four')

    const answerScreen = element.querySelector('#answerScreen')

    let answers = ['beda','jod']
    let potAns = ['fred','greger','fortnite','among us']
    
    let score = 0
    let newQuestion = true
    

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex > 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
    
    answerScreen.style.display = "none";
    function correct() {
        answerScreen.style.display = "flex";
        answerScreen.style.backgroundColor = "rgb(31, 172, 62)";
        answer.textContent = 'Korrekt'
        subans.textContent = 'Wow du vet verkligen mycket om herr Abl'
    } 
    
    function wrong() {
        answerScreen.style.display = "flex";
        answerScreen.style.backgroundColor = "rgb(231, 10, 30)";
        answer.textContent = 'Du har fel'
        subans.textContent = 'Hur kunde du missa denna viktiga fakta om Ablet'
    }
      
    shuffle(potAns)

    ans1.innerHTML = potAns[0]
    ans2.innerHTML = potAns[1]
    ans3.innerHTML = potAns[2]
    ans4.innerHTML = potAns[3]
    

    ans1.addEventListener('click', (e)=> {
        e.preventDefault()
        if(answers.some(r=> potAns[0].includes(r)) == true){
            console.log(answers.some(r=> potAns[0].includes(r)))
            correct()
            score += 10
        }
        else {
            wrong()
            console.log(answers.some(r=> potAns[0].includes(r)))
        }
    })

    ans2.addEventListener('click', (e)=> {
        e.preventDefault()
        if(answers.some(r=> potAns[1].includes(r)) == true){
            console.log(answers.some(r=> potAns[1].includes(r)))
            correct()
            score += 10
        }
        else {
            console.log(answers.some(r=> potAns[1].includes(r)))
        }
    })

    ans3.addEventListener('click', (e)=> {
        e.preventDefault()
        if(answers.some(r=> potAns[2].includes(r)) == true){
            console.log(answers.some(r=> potAns[2].includes(r)))
            correct()
            score += 10
        }
        else {
            console.log(answers.some(r=> potAns[2].includes(r)))
        }
    })

    ans4.addEventListener('click', (e)=> {
        e.preventDefault()
        if(answers.some(r=> potAns[3].includes(r)) == true){
            console.log(answers.some(r=> potAns[3].includes(r)))
            correct()
            score += 10
        }
        else {
            console.log(answers.some(r=> potAns[3].includes(r)))
        }
    })
    
}
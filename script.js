export function script(element) {
    const ans1 = element.querySelector('#one')
    const ans2 = element.querySelector('#two')
    const ans3 = element.querySelector('#three')
    const ans4 = element.querySelector('#four')

    const answerScreen = element.querySelector('#answerScreen')
    const nextQuestion = element.querySelector('#nextQuestion')
    


    let answers = ['beda','jod']
    let potAns = ['fred','beda','fortnite','among us']
    
    let score = 0

    
    function correct() {
        answerScreen.style.display = "flex";
        answerScreen.style.backgroundColor = "rgb(31, 172, 62)";
        answer.textContent = 'Du har rätt'
        subans.textContent = 'Wow du vet verkligen mycket om herr Abl'
    } 
    
    function wrong() {
        answerScreen.style.display = "flex";
        answerScreen.style.backgroundColor = "rgb(231, 10, 30)";
        answer.textContent = 'Du har fel'
        subans.textContent = 'Hur kunde du missa denna viktiga fakta om Ablet'
    }


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

      
      function newQuestion(){
            let timeLeft = 9
            timer.textContent = 10
             
  
            let timerId = setInterval(countdown, 1000);

            function countdown() {
                if (timeLeft == 0) {
                    clearInterval(timerId);
                    wrong()
                } else {
                    timer.textContent = timeLeft
                    timeLeft--;
                    console.log(timeLeft)
                }
                
              }
            
      
            answerScreen.style.display = "none";
            
            potAns[1] = 'bert'

            shuffle(potAns)

            ans1.innerHTML = potAns[0]
            ans2.innerHTML = potAns[1]
            ans3.innerHTML = potAns[2]
            ans4.innerHTML = potAns[3]
            
        
            ans1.addEventListener('click', (e)=> {
                e.preventDefault()
                if(answers.some(r=> potAns[0].includes(r)) == true){
                    clearInterval(timerId);
                    correct()
                    score += 10
                }
                else {
                    clearInterval(timerId);
                    wrong()
                }
            })
        
            ans2.addEventListener('click', (e)=> {
                e.preventDefault()
                if(answers.some(r=> potAns[1].includes(r)) == true){
                    clearInterval(timerId);
                    correct()
                    score += 10
                }
                else {
                    clearInterval(timerId);
                    wrong()
                }
            })
        
            ans3.addEventListener('click', (e)=> {
                e.preventDefault()
                if(answers.some(r=> potAns[2].includes(r)) == true){
                    clearInterval(timerId);
                    correct()
                    score += 10
                }
                else {
                    clearInterval(timerId);
                    wrong()
                    console.log(answers.some(r=> potAns[2].includes(r)))
                }
            })
        
            ans4.addEventListener('click', (e)=> {
                e.preventDefault()
                if(answers.some(r=> potAns[3].includes(r)) == true){
                    clearInterval(timerId);
                    correct()
                    score += 10
                }
                else {
                    clearInterval(timerId);
                    wrong()
                }
            })  
        }

        nextQuestion.addEventListener('click', (e)=> {
            e.preventDefault()
            newQuestion()
            
        })
        
            
}
import options from './answer.json'

export function script(element) {
    const ans1 = element.querySelector('#one')
    const ans2 = element.querySelector('#two')
    const ans3 = element.querySelector('#three')
    const ans4 = element.querySelector('#four')

    const answerScreen = element.querySelector('#answerScreen')
    const nextQuestion = element.querySelector('#nextQuestion')    
    

    let scoreMultiplier = 1
    let Score = 0
    let currentScore = 0

    
    function correct() {
        Score = 10
        console.log(Score)
        answerScreen.style.display = "flex";
        answerScreen.style.backgroundColor = "rgb(31, 172, 62)";
        answer.textContent = 'Du har rätt'
        subans.textContent = 'Wow du vet verkligen mycket om herr Abl'
    } 
    
    function wrong() {
        Score = 0
        console.log(Score)
        answerScreen.style.display = "flex";
        answerScreen.style.backgroundColor = "rgb(231, 10, 30)";
        answer.textContent = 'Du har fel'
        subans.textContent = 'Hur kunde du missa denna viktiga fakta om Ablet'
    }

    function end() {
        answerScreen.style.display = "flex";
        answerScreen.style.backgroundColor = "rgb(35, 21, 97)";
        answer.textContent = 'slut'
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

      let b = 0 

      nextQuestion.addEventListener('click', (e)=> {
        e.preventDefault()
        newQuestion()           
      })


      function newQuestion(){ 
        if(b < options.q.length){
        answerScreen.style.display = "none"; 
    
        let answer = options.q[b].answer
        let potAns = options.q[b].potentialAnswers
        questionText.innerHTML = options.q[b].question

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
            }
                
        }              
            
            
        b+=1
              

        shuffle(potAns)            

        ans1.innerHTML = potAns[0]
        ans2.innerHTML = potAns[1]
        ans3.innerHTML = potAns[2]
        ans4.innerHTML = potAns[3]
            
            
        ans1.addEventListener('click', (e)=> {
            e.preventDefault()
            if(potAns[0]==answer){
                clearInterval(timerId)
                correct()
            }
            else {
                clearInterval(timerId)
                wrong()
            }
        })
            
        
        ans2.addEventListener('click', (e)=> {
            e.preventDefault()
            if(potAns[1]==answer){
                clearInterval(timerId)
                correct()
            }
            else {
                clearInterval(timerId)
                wrong()
            }
        })
        
        ans3.addEventListener('click', (e)=> {
            e.preventDefault()
            if(potAns[2]==answer){
                clearInterval(timerId)
                correct()
            }
            else {
                clearInterval(timerId)
                wrong()
            }
        })
        
        ans4.addEventListener('click', (e)=> {
            e.preventDefault()
            if(potAns[3]==answer){
                clearInterval(timerId)
                correct()
            }
            else {
                clearInterval(timerId)
                wrong()
            }
        }) 
        
        currentScore += Score
        score.textContent = currentScore 
        console.log(potAns[0] ==answer)
        console.log(Score)
    }
    else{
            
    } 
}           
}
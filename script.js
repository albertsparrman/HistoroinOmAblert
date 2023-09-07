export function script(element) {
    const ans1 = element.querySelector('#one')
    const ans2 = element.querySelector('#two')
    const ans3 = element.querySelector('#three')
    const ans4 = element.querySelector('#four')

    let answers = ['beda','jod']
    let potAns = ['fred','beda','fortnite','jod']
    
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
    
    function correct() {

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
        score += 10
        }
        else {

        }
    })

    ans2.addEventListener('click', (e)=> {
        e.preventDefault()
        if(answers.some(r=> potAns[1].includes(r)) == true){
        console.log(answers.some(r=> potAns[1].includes(r)))
        score += 10
        }
        else {

        }
    })

    ans3.addEventListener('click', (e)=> {
        e.preventDefault()
        if(answers.some(r=> potAns[2].includes(r)) == true){
        console.log(answers.some(r=> potAns[2].includes(r)))
        score += 10
        }
        else {

        }
    })

    ans4.addEventListener('click', (e)=> {
        e.preventDefault()
        if(answers.some(r=> potAns[3].includes(r)) == true){
        console.log(answers.some(r=> potAns[3].includes(r)))
        score += 10
        }
        else {

        }
    })
    
}
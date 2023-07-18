

let randomNum = Math.trunc(Math.random()*100+1);
console.log(randomNum);


let initialVal = 100;
let highscore = null;

function check()
{
    let inputValue = document.getElementById("inputValue");
    let guess = document.getElementById("guess");
    let chances = document.getElementById("chances");
    let gethighscore = document.getElementById("highscore");
    let shownum = document.querySelector(".randomnum")

    if(initialVal !== 0)
    {
        if(randomNum < inputValue.value)
        {
            guess.textContent = "Your Guess is High"
            chances.textContent = --initialVal;
            
        } 
        else if(randomNum > inputValue.value)
        {
            guess.textContent = "Your Guess is Low"
            chances.textContent = --initialVal;
            
        }
        else {
            document.body.style.backgroundColor = "green";
            guess.textContent = "😍😍Hurray!! You won The Game😍😍"
            chances.textContent = --initialVal;

            document.getElementById("check")
            .style.visibility = "hidden";
            inputValue.style.backgroundColor = "green"
            shownum.innerHTML = randomNum;
            highscore = initialVal;
            gethighscore.textContent = highscore;
            
        }
    }
    else
    {
        guess.textContent = "Game Over 😒😒 try again"    
    }
}
// console.log(inputValue);

function PlayAgain()
{

 let initialVal = 100;
    let hide = document.querySelector(".randomnum")
    hide.innerHTML = "?";
    document.getElementById("check").style.visibility = "visible";
    // inputValue.innerHTML= "";

    document.body.style.backgroundColor = "rgb(47, 48, 48)"
    inputValue.style.backgroundColor = "rgb(47, 48, 48)"
    chances.textContent = initialVal;
    gethighscore.textContent = highscore;



}
   

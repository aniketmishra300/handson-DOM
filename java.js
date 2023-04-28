let idtext = document.getElementById("text");

let tag = document.getElementsByTagName("h1");

let abc = document.getElementsByClassName("box");

function change()
{
    let world = document.getElementById("hello");
    world.innerText = "Hello World"; 
}

function replace()
{
    let hello = document.getElementById("world");
    hello.innerText = "Welcome to Elevation academy"; 
}

    let red = document.getElementById("4");
    red.id = "heading";
    red.innerHTML = "Hello";
    red.style.color = "red";


    function flex_direction()
    {
        let variable = document.getElementById("abc");
              variable.style.flexDirection = "column";       
    }

    function time()
    {
        let Time = new Date();
        let hrs = Time.getHours();
        let min = Time.getMinutes();
        let sec = Time.getSeconds();
        console.log(`${hrs} : ${min} : ${sec}`)

        let ampm = document.getElementById('ampm');
        if(hrs >= 12)
        {
            ampm.innerHTML = 'PM';
        }else{
            ampm.innerHTML = 'AM';
        }

        if(hrs > 12)
        {
            hrs -= 12;
        }

        if(hrs<10)
        {
            hrs = "0"+hrs;
        }

        if(min<10)
        {
            min = "0"+min;
        }

        if(sec<10)
        {
            sec = "0"+sec;
        }

        document.getElementById('hrs').innerHTML = hrs;
        document.getElementById('min').innerHTML = min;
        document.getElementById('sec').innerHTML = sec;

        
    }
    setInterval(time, 1000);

    



// var changedimenion = document.getElementsByClassName('changedimenion');
// changedimenion[0].addEventListener('click',() => {
//     changedimenion[0].style.flexdirection='column';
// })

// const str= "abcadeecfb";
// const myset = new Set(str);
// var newstr = "";

// for(var value of myset)
// {
//     newstr = newstr + value;
// }

// console.log(newstr);
// var str = "aaaaabb";
// const myMap = new Map();
// for (var alphabet of str) {
//   if (myMap.has(alphabet)) {
//     //check if the alphabet has already occured
//     myMap.set(alphabet, myMap.get(alphabet) + 1);
//   } else {
//     myMap.set(alphabet, 1);
//   }
// }
// console.log(myMap);


const getcolor = () => {
  const randomNumber = Math.floor(Math.random() * 1677215);
  const randomcode = "#" + randomNumber.toString(16);
  document.body.style.backgroundColor = randomcode;
  document.querySelector("h2").innerHTML = randomcode;
};

let myInterval;
function start() {
     myInterval = setInterval(getcolor, 100);
     document.getElementById("btn").innerHTML = "Stop";
  }
  function myStopFunction() {
    clearInterval(myInterval);
    document.getElementById("btn").innerHTML = "Start";
  }
var btn = document.getElementById("btn")
let i = true;

btn.addEventListener("click", function () {
  if (i == true) {
    start();
    i = false;
    
  } else {
    i = true;
    myStopFunction()
    
  }
});



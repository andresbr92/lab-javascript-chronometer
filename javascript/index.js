const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');



function printTime() {

  
  

 
  
  
   
  // ... your code goes here
}

function printMinutes() {
  
  
  // ... your code goes here
}

function printSeconds() {
  
  
  secDec.innerText = chronometer.getSeconds ()

}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {

  //console.log(typeof btnLeft)
  btnLeft.classList.toggle("stop")

  btnLeft.classList.toggle("start")
  if (document.getElementById('btnLeft').innerHTML === "START") {

    document.getElementById('btnLeft').innerHTML = "STOP"
    chronometer.startClick()

    
    


  } else {

    document.getElementById('btnLeft').innerHTML = "START"
    chronometer.stopClick ()

  }



  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {

  btnRight.classList.toggle("split")
  btnRight.classList.toggle('reset')
  //chronometer.startClick()
  console.log (chronometer.getMinutes(minutes))

  if (document.getElementById('btnRight').innerHTML === "RESET") {
    chronometer.startClick (printTime())

    chronometer.resetClick ()
    
    document.getElementById('btnRight').innerHTML = "SPLIT"

  } else {

    chronometer.splitClick ()
    
    document.getElementById('btnRight').innerHTML = "RESET"

  }

  // ... your code goes here
});

printSeconds ()






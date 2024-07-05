// get the element where you want to place the time into//
let date;
let time = document.getElementById("time");
let london = document.getElementById("london")
let Yek = document.getElementById("ball").addEventListener("click", plusFive);
let istambul = document.getElementById("istambul").addEventListener("click" , istambulFunc);
let moscow = document.getElementsByClassName("moscow")
let dubai = document.getElementsByClassName("dubai")
let stopper = clearInterval(updateTime);
let start = setInterval(updateTime, 1000);
let city = document.getElementById('city');
console.log(city);




// this function sets the date and get the hours minutes and seconds
function updateTime(start) {
    let date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

// the code below formats the time and converts it to a string

    const clockStr = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// The code below places the formatted string into the time element 
    time.innerText = clockStr;
}
// this code calls the update time element and the set interval makes the clock tick with an interval a a second.
updateTime();
start;



//Yeakterinburgh time settings. NEED TO SORT THIS OUT WITH LOCAL TIME PROPERLY//
function plusFive(){

    
    let date = new Date()
    const hours = date.getHours()
    const local = date.toLocaleString("en-US", {timeZone: "America/New_York"});
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    const clockStr1 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    city.innerText = "The time in Yekaterinburgh is now:"
    time.innerText = clockStr1;
    setInterval(plusFive , 1000);
    setTimeout(plusFive);
}


function istambulFunc(){
    let date = new Date()
    const hours = date.getHours()
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    const clockStr2 = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    city.innerText = "The time in  is now:"
    time.innerText = clockStr2;
    setInterval(istambulFunc , 1000);
    setTimeout(istambulFunc);
}










 


function updateClock() {
  // Get the current time
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Format hours, minutes, and seconds to have leading zeros if less than 10
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  // Get the clock element and set its inner HTML to the formatted time
  var clockElement = document.getElementById("clock");
  clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;

  // Call the updateClock function again after 1 second
  setTimeout(updateClock, 1000);
}
// Call the updateClock function to start the clock
updateClock();

let check = document.getElementById('checkbox');
let main = document.getElementById('main');
let mode = document.getElementById('mode');

check.addEventListener('click', function (){
  main.classList.toggle('dark')
  if (main.classList != 'dark') {
    mode.innerHTML = 'Light';
  } else {
    mode.innerHTML = 'Dark';
  }
})
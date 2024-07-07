let intervalId = null;

function startClock(city) {
  // Clear any existing interval to avoid multiple intervals running at the same time
  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  // This switch case shows the ime in the selected time zone.
  function showTime() {
    let timeZone;
    switch (city) {
      case 'Moscow':
        timeZone = 'Europe/Moscow';
        break;
      case 'Yekaterinburg':
        timeZone = 'Asia/Yekaterinburg';
        break;
      case 'London':
        timeZone = 'Europe/London';
        break;
      case 'Dubai':
        timeZone = 'Asia/Dubai';
        break;
      case 'Istanbul':
        timeZone = 'Europe/Istanbul';
        break;
      default:
        console.error('Unknown city:', city);
        return; // Exit the function if the city is unknown
    }
        // This object contains the options which for the make up of the date and it is passed as an argument to the timeString constant in the toLocaleTimestring()
    const options = { 
      timeZone: timeZone, 
      hour12: false, 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric' 
    };
    const timeString = new Date().toLocaleTimeString('en-US', options);
//The line below formats the string using back tick and $ sign concatination.
    document.getElementById('timeDisplay').textContent = `Current time in ${city}: ${timeString}`;
  }

  // calling the function below shows the time immediatly.
  showTime();
  // Set an interval to update the time every second and make the clock tick.
  intervalId = setInterval(showTime, 1000);
}
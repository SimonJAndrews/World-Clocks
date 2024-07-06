let intervalId = null;

function startClock(city) {
  // Clear any existing interval to avoid multiple intervals running at the same time
  if (intervalId !== null) {
    clearInterval(intervalId);
  }

  // Function to show the current time
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

    const options = { 
      timeZone: timeZone, 
      hour12: false, 
      hour: 'numeric', 
      minute: 'numeric', 
      second: 'numeric' // Add seconds for real-time updates
    };
    const timeString = new Date().toLocaleTimeString('en-US', options);

    document.getElementById('timeDisplay').textContent = `Current time in ${city}: ${timeString}`;
  }

  // Show the time immediately
  showTime();
  // Set an interval to update the time every second
  intervalId = setInterval(showTime, 1000);
}
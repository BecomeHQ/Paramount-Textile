// export const calculateTimeZone = () => {
//   function getCurrentDateTime(timeZone) {
//     const now = new Date()
//     const options = {
//       timeZone,
//       hour12: true,
//       hour: '2-digit',
//       minute: '2-digit',
//       day: 'numeric',
//       month: 'short',
//     }
//     const formatter = new Intl.DateTimeFormat([], options)
//     const formattedDateTime = formatter.format(now)
//     // To destructure Follow the order from console.log()
//     const [day, monthWithComma, time, ampm] = formattedDateTime.split(' ')
//     const month = monthWithComma.split(',')[0] // Remove comma from month
//     const [hours, minutes] = time.split(':')
//     return { hours, minutes, ampm, month, day }
//   }

//   function updateTime() {
//     const istTime = getCurrentDateTime('Asia/Kolkata')
//     const dubaiTime = getCurrentDateTime('Asia/Dubai')
//     const sanFranciscoTime = getCurrentDateTime('America/Los_Angeles')

//     // Update Madurai Time
//     document.getElementById('madHours').textContent = istTime.hours
//     document.getElementById('madMinutes').textContent = istTime.minutes
//     document.getElementById('madMonth').textContent = istTime.month
//     document.getElementById('madDay').textContent = istTime.day
//     document.getElementById('madAmPm').textContent = istTime.ampm.toUpperCase()

//     // Update Delhi Time
//     document.getElementById('delhiHours').textContent = istTime.hours
//     document.getElementById('delhiMinutes').textContent = istTime.minutes
//     document.getElementById('delhiMonth').textContent = istTime.month
//     document.getElementById('delhiDay').textContent = istTime.day
//     document.getElementById('delhiAmPm').textContent =
//       istTime.ampm.toUpperCase()

//     // // Update Dubai Time
//     document.getElementById('dubaiHours').textContent = dubaiTime.hours
//     document.getElementById('dubaiMinutes').textContent = dubaiTime.minutes
//     document.getElementById('dubaiAmPm').textContent =
//       dubaiTime.ampm.toUpperCase()
//     document.getElementById('dubaiMonth').textContent = dubaiTime.month
//     document.getElementById('dubaiDay').textContent = dubaiTime.day

//     // // Update San Francisco Time
//     document.getElementById('sfHours').textContent = sanFranciscoTime.hours
//     document.getElementById('sfMinutes').textContent = sanFranciscoTime.minutes
//     document.getElementById('sfAmPm').textContent =
//       sanFranciscoTime.ampm.toUpperCase()
//     document.getElementById('sfMonth').textContent = sanFranciscoTime.month
//     document.getElementById('sfDay').textContent = sanFranciscoTime.day
//   }

//   // Call the updateTime function initially
//   updateTime()

//   // Update the time every second (1000 milliseconds)
//   setInterval(updateTime, 1000)
// }

/*
export const calculateTimeZone = () => {
  function getCurrentDateTime(timeZone) {
    const now = new Date();

    const dateFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      day: 'numeric',
      month: 'short',
    });

    const timeFormatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const dateParts = dateFormatter.formatToParts(now);
    let day = '';
    let month = '';
    dateParts.forEach(part => {
      if (part.type === 'day') day = part.value;
      if (part.type === 'month') month = part.value;
    });

    const timeParts = timeFormatter.formatToParts(now);
    let hour = '';
    let minute = '';
    let dayPeriod = '';
    timeParts.forEach(part => {
      if (part.type === 'hour') hour = part.value;
      if (part.type === 'minute') minute = part.value;
      if (part.type === 'dayPeriod') dayPeriod = part.value;
    });

    return { hours: hour, minutes: minute, ampm: dayPeriod, month, day };
  }

  function updateTime() {
    const istTime = getCurrentDateTime('Asia/Kolkata');
    const dubaiTime = getCurrentDateTime('Asia/Dubai');
    const newYorkTime = getCurrentDateTime('America/New_York');

    document.getElementById('madHours').textContent = istTime.hours;
    document.getElementById('madMinutes').textContent = istTime.minutes;
    document.getElementById('madMonth').textContent = istTime.month;
    document.getElementById('madDay').textContent = istTime.day;
    document.getElementById('madAmPm').textContent = istTime.ampm.toUpperCase();

    document.getElementById('delhiHours').textContent = istTime.hours;
    document.getElementById('delhiMinutes').textContent = istTime.minutes;
    document.getElementById('delhiMonth').textContent = istTime.month;
    document.getElementById('delhiDay').textContent = istTime.day;
    document.getElementById('delhiAmPm').textContent = istTime.ampm.toUpperCase();

    document.getElementById('dubaiHours').textContent = dubaiTime.hours;
    document.getElementById('dubaiMinutes').textContent = dubaiTime.minutes;
    document.getElementById('dubaiAmPm').textContent = dubaiTime.ampm.toUpperCase();
    document.getElementById('dubaiMonth').textContent = dubaiTime.month;
    document.getElementById('dubaiDay').textContent = dubaiTime.day;

    document.getElementById('nyHours').textContent = newYorkTime.hours;
    document.getElementById('nyMinutes').textContent = newYorkTime.minutes;
    document.getElementById('nyAmPm').textContent = newYorkTime.ampm.toUpperCase();
    document.getElementById('nyMonth').textContent = newYorkTime.month;
    document.getElementById('nyDay').textContent = newYorkTime.day;
  }

  updateTime();
  setInterval(updateTime, 1000);
};

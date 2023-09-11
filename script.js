document.getElementById("dayOfWeek").innerText = new Date().toLocaleString("en-US", {weekday: 'long'});
document.getElementById("utcTime").innerText = new Date().getTime();
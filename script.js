const newYears = '1 Jan 2022';
const daysE1 = document.getElementById('days')
const hoursE1 =document.getElementById('hours')
const minutesE1 = document.getElementById('mins')
const secondsE1 =document.getElementById('seconds')

countdown();
function countdown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totseconds = Math.floor((newYearDate - currentDate) / 1000);

    const days = Math.floor(totseconds / 86400);
    const hours = Math.floor((totseconds % 86400) / 3600);
    const minutes = Math.floor(((totseconds % 86400) % 3600) / 60);
    const seconds = Math.floor(((totseconds % 86400) % 3600) % 60);
    
    daysE1.innerText = fomatTime(days); 
    hoursE1.innerText = fomatTime(hours);
    minutesE1.innerText = fomatTime(minutes);
    secondsE1.innerText = fomatTime(seconds);
}
setInterval(countdown,1000);

function fomatTime(time) {
    return time < 10 ? (`0${time}`) :time 
}


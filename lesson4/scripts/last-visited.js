/* Only use LocalStorage for public data. */

const displayLastVisit = document.querySelector('#visits-last');
const displayTotalVisits = document.querySelector('#visits-total');

// get current date.
const currentTime = new Date();
// store current date in local storage.
localStorage.setItem('visits-current', currentTime);
// get local storage value of total visits.
let totalVisits = Number(window.localStorage.getItem('visits-total'));


function lastVisited() {
    if (totalVisits == 0) { // if first visit, store current time in local storage.
        const lastTime = new Date();
        localStorage.setItem('visits-last', lastTime);
        // log results.
        console.log("First Visit: " + totalVisits);
    } else {
        // log results.
        console.log("Total Visits: " + totalVisits);
    }
    // convert string values to intergers (milliseconds).
    last = Date.parse(localStorage.getItem('visits-last'));
    current = Date.parse(localStorage.getItem('visits-current'));
    // compare difference.
    difference = current - last;
    // convert miliseconds to seconds (/1000);
    diffS = difference / 1000;
    // convert seconds to minutes;
    diffM = diffS / 60;
    // convert minutes to hours;
    diffH = diffM / 60;
    // convert hours to days;
    diffD = diffH / 24;
    // round value for display;
    MinutesSinceLastVisit = Math.round(diffM * 10) / 10;
    DaysSinceLastVisit = Math.round(diffD);
    console.log("Last Visit: " + MinutesSinceLastVisit + " minutes ago");
}
lastVisited();

// display days since last visit.
displayLastVisit.textContent = "Days since last visit: " + DaysSinceLastVisit;
displayTotalVisits.textContent = "Total visits: " + totalVisits;

// increase the total visits value by 1.
totalVisits++;

// store total visits in local storage.
localStorage.setItem('visits-total', totalVisits);



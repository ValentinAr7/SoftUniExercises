function attachEventsListeners() {

    let hoursBtn = document.getElementById("hoursBtn")
    let daysBtn = document.getElementById("daysBtn")
    let minutesBtn = document.getElementById("minutesBtn")
    let secondsBtn = document.getElementById("secondsBtn")

    let hours = document.getElementById("hours").value
    let days = document.getElementById("days").value
    let minutes = document.getElementById("minutes").value
    let seconds = document.getElementById("seconds").value

    let rations = {
        day: 1,
        hour: 24,
        mins: 1440,
        secs: 86400,
    }

    daysBtn.addEventListener("click", onConvert);
    hoursBtn.addEventListener("click", onConvert);
    minutesBtn.addEventListener("click", onConvert);
    secondsBtn.addEventListener("click", onConvert);

    function convert(value, unit) {
        let days = value / rations[unit];
        return {
            days: days,
            hours: days * rations.hour,
            minutes: days * mins,
            seconds: days * secs
        }
    }

    function onConvert(e) {

    }
}
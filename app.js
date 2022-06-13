const secondHand = document.querySelector('.second-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours/12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    console.log(seconds);
}

setInterval(setDate, 1000);
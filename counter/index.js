const currentDate = new Date();
const targetDate = new Date("2024-9-29 4:00:10");
const difference = targetDate - currentDate;

console.log({ difference });

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days + " d:";
  document.getElementById("hours").innerText = hours + " h:";
  document.getElementById("minutes").innerText = minutes + " m:";
  document.getElementById("seconds").innerText = seconds + " s";
}

const interval = setInterval(updateCountdown, 1000);

if (difference < 0) {
  clearInterval(interval);
  document.getElementById("timer").innerText = "The event has started!";
}

const eventDate = new Date("July 1, 2026 08:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const countdownElement = document.getElementById("countdown");

  if (countdownElement) {
    countdownElement.innerHTML =
      days + " Days • " + hours + " Hours • " + minutes + " Minutes";
  }
}, 1000);

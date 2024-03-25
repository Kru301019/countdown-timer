const giveAway = document.querySelector('.giveaway');


const futureDate = new Date(2024, 4, 4, 17,30);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
giveAway.textContent = `Giveaway ends on ${year} ${hours}:${minutes}`;
console.log(giveAway);
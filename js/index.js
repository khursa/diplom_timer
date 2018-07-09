const year = new Date().getFullYear();
const ourDate = new Date(year, 6, 27, 19).getTime();


let timer = setInterval(function() {

  const today = new Date().getTime();
  const diff = ourDate - today;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>дней</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>часов</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>минут</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>секунд</div> \
</div>";

}, 1000);
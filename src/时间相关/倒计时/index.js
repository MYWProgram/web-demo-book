import './index.css';

const day = document.querySelector('.day .numb');
const hour = document.querySelector('.hour .numb');
const min = document.querySelector('.min .numb');
const sec = document.querySelector('.sec .numb');
var timer = setInterval(() => {
  var currentDate = new Date().getTime();
  var launchDate = new Date('Sep 18, 2021 13:00:00').getTime();
  var duration = launchDate - currentDate;
  var days = Math.floor(duration / (1000 * 60 * 60 * 24));
  var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((duration % (1000 * 60)) / 1000);
  day.innerHTML = days;
  hour.innerHTML = hours;
  min.innerHTML = minutes;
  sec.innerHTML = seconds;
  if (days < 10) {
    day.innerHTML = '0' + days;
  }
  if (hours < 10) {
    hour.innerHTML = '0' + hours;
  }
  if (minutes < 10) {
    min.innerHTML = '0' + minutes;
  }
  if (seconds < 10) {
    sec.innerHTML = '0' + seconds;
  }
  if (duration < 0) {
    clearInterval(timer);
  }
}, 1000);

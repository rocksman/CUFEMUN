// Set the date we're counting down to
var countDownDate = new Date("February 16, 2018 0:0:0").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();
    console.log(now);
    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    document.getElementById("days").innerHTML = days + '<span> days</span>';
    document.getElementById("date").innerHTML = hours + '<span> : </span>' + minutes + '<span> : </span>' + seconds;
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);


//TypeWrite
var i = 0, j = 0,c;
var txt = ["COMING SOON", "WHERE DIPLOMACY TRUMPS"];
var speed = 100;

function typeWriter() {
  if (i < txt[j].length) {
    document.getElementById("coming-soon").innerHTML += txt[j].charAt(i);
    i++;
    c=i-1;
    setTimeout(typeWriter, 200);
  }
  else{
    if(c>=0){
      var res = txt[j].substr(0,c);
      document.getElementById("coming-soon").innerHTML = res;
      c--;
      setTimeout(typeWriter, 100);
    }
    else{
      j++;
      i=0;
      if(j==txt.length){
        j=0;
      }
      setTimeout(typeWriter, 500);
    }
  }
}
function updateTime() {

var now = new Date();

document.getElementById("datetime").innerHTML =
now.toString();

}

setInterval(updateTime, 1000);
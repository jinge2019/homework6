var video;

function getVid(){
	video = document.querySelector("#myVideo");
}

function playVid() {
  video.play();
	let vol = document.querySelector("#volume");
  vol.innerHTML=video.volume*100 + "%";
	console.log("Play Video");
	console.log(video);
}

function pauseVid() {
  video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	  var speed = video.playbackRate;
    video.playbackRate = speed*0.8;
  	console.log("Speed is "+ video.playbackRate);
}

function increaseSpeed() {
	var speed = video.playbackRate;
	video.playbackRate = speed*1.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	length = video.duration;
	if (video.currentTime < length - 60) {
		var time = video.currentTime;
	  video.currentTime = time + 60;
	  console.log("Current location is "+ (time + 60));
  }
	else {
		video.currentTime = 0;
		playbackRate = 1;
	}
}

function mute() {
  if (video.muted) {
		console.log("Changing to Unmuted");
		video.muted = false;
		document.getElementById('mute').innerHTML = "Mute";
	}
	else {
		console.log("Changing to Muted");
		video.muted = true;
		document.getElementById('mute').innerHTML = "Unmute";
	}
}

function changeVolume() {
	var volume = document.querySelector("#volumeSlider").value;
	video.volume = volume/100;
	document.querySelector("#volume").innerHTML = volume + "%";
}

function gray() {
  document.getElementById('myVideo').style.filter = "grayscale(100%)";
	console.log("In grayscale")
}

function color() {
  document.getElementById('myVideo').style.filter = "grayscale(0%)";
	console.log("In color")
}

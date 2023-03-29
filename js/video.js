// Javascript 




window.addEventListener("load", function() {
	console.log("Good job opening the window")
	var video = document.getElementById("player1");
	video.autoplay = false;
	video.loop = false;

	document.getElementById("play").addEventListener("click", function() {
		console.log("Play video")
		video.play();
	});
	
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause video")
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Video");
		video.playbackRate = video.playbackRate * 0.9;
		console.log(video.playbackRate)
	});

	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Quick Video");
		video.playbackRate = video.playbackRate * (10/9);
		console.log(video.playbackRate)
	});

	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip Video");
		video.currentTime = video.currentTime + 10;
		if(video.currentTime > video.duration - .5){
			video.currentTime = 0;
		}
		console.log(video.currentTime);
	});

	// NEEED TO FIGURE THIS PART OUT

	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			console.log("Unmute Video");
			video.muted = false;
		}
		else {
			console.log("Mute Video");
			video.muted = true;
		}

	});

	document.querySelector("#vintage").addEventListener("click", function() {
		console.log("Vintage Style");
		video.className = "oldSchool";

	});

	document.querySelector("#orig").addEventListener("click", function() {
		console.log("Original Style");
		video.className = "video";
	});

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });




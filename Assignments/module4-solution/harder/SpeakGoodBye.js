// STEP 6:
(function (window) {
	// STEP 7: 
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	// STEP 8:
	byeSpeaker.speak = function () {
	  console.log(speakWord + " " + names);
	}
	// STEP 9:
	window.byeSpeaker = byeSpeaker;
})(window);
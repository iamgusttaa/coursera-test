// STEP 6:
(function (window) {
	// STEP 7: 
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	// STEP 8:
	function speak (name) {
	  console.log(speakWord + " " + name);
	}


	byeSpeaker.speak = speak;
	// STEP 9:
	window.byeSpeaker = byeSpeaker;
})(window);
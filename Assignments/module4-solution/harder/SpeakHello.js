// STEP 2:
(function (window) {
	// STEP 3:
	var helloSpeaker = {};
	var speakWord = "Hello";
	// STEP 4:
	function speak (name) {
	  console.log(speakWord + " " + name);
	}

	helloSpeaker.speak = speak;
	// STEP 5: 
	window.helloSpeaker = helloSpeaker;
})(window);
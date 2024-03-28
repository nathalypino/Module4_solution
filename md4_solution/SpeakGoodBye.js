
// STEP 6: Wrap the entire contents of SpeakGoodBye.js inside of an IIFE

// STEP 7: Create an object, called 'byeSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context

// STEP 8: Rewrite the 'speak' function such that it is attached to the
// byeSpeaker object instead of being a standalone function.

// STEP 9: Expose the 'byeSpeaker' object to the global scope. Name it
// 'byeSpeaker' on the global scope as well.

var byeSpeaker = {}; 

(function(window) {
  
  var speakWord = "Good Bye"; 

  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
    document.write("<p>Good Bye " + name + "</p>"); 
  };

 
  window.byeSpeaker = byeSpeaker;
})(window);

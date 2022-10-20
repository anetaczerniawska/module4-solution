
(function (window) {
  var byeSpeaker = {};
  byeSpeaker.names = ["John" , "Jen" , "Jason" , "Jim"];
  var speakWord = "Good Bye";
  byeSpeaker.sayBye = function () {
    console.log(speakWord + byeSpeaker.names);
  }

  window.byeSpeaker = byeSpeaker;

})(window);

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing ( homePlanet, language ) {
  this.homePlanet = homePlanet;
  this.language = language;
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function (sb) {
    console.log( hello[ this.language ] );
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    return hello[ sb.language ];
}

/* this is the start of Human subclass */
function Human () {
  SentientBeing.call( this, 'earth', 'federation standard' );
}
Human.prototype = Object.create( SentientBeing.prototype );
Human.prototype.constructor = Human;
/* this is the end of Human subclass */

var human = new Human();

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert( human.sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.



/* helper method for assertions */

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one
//*********************************************************

/* PART 1 */

function lastLetterSort(stringArray) {

  stringArray.sort(function(a, b){
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // read this: http://www.w3schools.com/jsref/jsref_sort.asp
  });

}

assertDeepEqual(
  lastLetterSort( [ 'blue', 'red', 'green' ] ),
  [ 'red', 'blue', 'green' ],
  'array not sorted by last letter'
);


/* PART 2 */

var arrayOfArrays = [ [ 1, 4, 3 ], [ 6, 2, 3 ], [ 3, 9 ], [ 0, 1 ] ]

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  return sum;
}

function sumSort(arrayOfArrays) {
  arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
  });
}

// write an assertion that tests the above code





// assert methods //

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

// Use this method to test to arrays when they are not
// the same arrays but content should be equal
function assertDeepEqual(actual, expected, failureMessage) {
  try {
    if ( JSON.stringify(actual) !== JSON.stringify(expected) ) {
      throw new Error( failureMessage );
    }
  }
  catch (err) {
    console.log('assertion failure: ', err,
                '\nexpected:', expected,
                '\nactual:', actual);
  }
}


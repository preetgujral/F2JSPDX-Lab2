

var word = 'banana';

console.log( word[ word.length -1 ] );

var array = [ 'one', 'five', 'twelve', 'one', 'seventeen' ];

function sorting (a, b){
	var lastLetterOfA = a[a.length-1];
	var lastLetterOfB = b[b.length-1];
	// return -1 if a is before b
	if ( lastLetterOfA < lastLetterOfB ) return -1
	// return 0 if a and b are the same
	if ( lastLetterOfA === lastLetterOfB ) return 0;
	// return 1 if a is after b
	if ( lastLetterOfA > lastLetterOfB ) return 1;
}

array.sort( sorting );

console.log( array );

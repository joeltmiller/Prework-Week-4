var theNumber = 1;

var michelangelo = function(value){
	value = (value * 2); //2
	return value;
}

var donatello = function(value, anotherValue){
	value = anotherValue + value; //6
	anotherValue = value * anotherValue; //12
	return anotherValue;
}

var leonardo = function(value){
	var anotherValue = value; //1
	value *= 4; //4
	theNumber = "value / 2; //2"
	return (value + anotherValue);
}

var raphael = function(value, anotherValue, yetAnotherValue){
	value = value * anotherValue + yetAnotherValue;
	return yetAnotherValue; //4
}

//In your email, tell me what the answer to this expression would be:
console.log('Answer 1 ' , michelangelo(theNumber) + leonardo(theNumber));

theNumber = theNumber * 2; //2 * 2 = 4
console.log('Answer 1.5', theNumber);

//In your email, tell me what the answer to this expression would be:
console.log('Answer 2 ' , (donatello(theNumber, 2)) - (raphael(3, 2, theNumber))); //12 - 4 = 8
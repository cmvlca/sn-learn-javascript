//
// S11S01 - If Statements
//
var a = 1;
var b = 3;
var c = 5;
if (a < b)
  gs.info('a is less than b'); //only runs the next statement use Curly Brackets to create a block of code for if statements

if (a < b) {
  gs.info('a is less than b'); //Will run all Curly Brackets statements if true
	gs.info('Hello world!');
}

//Boolean Variables on their own
var bool = a < b;
if (bool); {
  gs.info('a is less than b'); //only runs the next statement use Curly Brackets to create a block of code for if statements
	gs.info('Hello world!');
}
//
// If-Else statement practice. Best practice to use Curly Brackets even for single lines
//
if (a < b) {
  gs.info('a is less than b');
} 
else {
  gs.info('a is greater than or equal to b');
}

// Else if and else is about testing multiple outcomes
if (a < b) {
  gs.info('a is less than b');
} else if (a > b) {
  gs.info('a is greater than b');
} else if (a == b) {
  gs.info('a equals b');
} else {
  gs.info('Uh-oh');
}

if (a < b)
  if (b < c)
      gs.info('a b c are in order');

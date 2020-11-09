//
// L12S01 - The ternary operator
//
// Could have written...
var valveOpen = true;
var openStatusString;

//
// Original way of writing this statement using an if else statement
//
if (valveOpen) {
  openStatusString = 'open';
   gs.info('1: Valve is currently ' + openStatusString);
} else {
  openStatusString = 'closed';
  gs.info('1: Valve is currently ' + openStatusString);
}
//
// Introducing a shortcut way... by using the ternary operator
//
// Variables
//
var openStatusString = (valveOpen) ? 'open' : 'closed'; // ? between : is the else value if true, : between ; is the else value if false
//
// Display results code
//
gs.info('2: Valve is currently ' + openStatusString);
//
//Converting a boolean string
//
//Variables
//
var isOpenString = 'true';
var isOpen = (isOpenString == 'true') ? true : false;
if (ifOpen) {
  gs.info('This is open';
} else {
  gs.info('This is closed');
}

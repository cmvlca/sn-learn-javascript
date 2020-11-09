//
// S11S02 - Boolean logic
//
// AND (&&) - both must be true
//      +---------+---------+---------+
//      |   AND   |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  false  |
//      +---------+---------+---------+
//      |  false  |  false  |  false  |
//      +---------+---------+---------+
//
// OR (||) - Either must be true
//      +---------+---------+---------+
//      |   OR    |  true   |  false  |
//      +---------+---------+---------+
//      |  true   |  true   |  true   |
//      +---------+---------+---------+
//      |  false  |  true   |  false  |
//      +---------+---------+---------+
//
// NOT (!) - reverse the logic
//      +---------+---------+---------+
//      |   NOT   |  true   |  false  |
//      +---------+---------+---------+
//      |         |  false  |  true   |
//      +---------+---------+---------+
//
//
// And Expression that is true
//
var a = 1;
var b = 3;
var c = 5;

if (a < b && b < c)
  gs.info('a b c are in order');
//
// And Expression that is false
//
var d = 11;
var e = 3;
var f = 5;

if (d < e && e < f) {
  gs.info('d e f are in order');
} else {
	gs.info('d e f are NOT in order!');
}
//
// Or expression where one test is true
//
if (b > a || b > c) {
  gs.info('b is greater than one of them.');
}
//
// Or expression where both tests are false
//
if (b < a || b > c) {
  gs.info('b is greater than one of them.');
} else {
  gs.info('b is lower than a and c.');
} 
//
// Note, indentation can be deceptive!!!
//
if (a < b) { // This can be an "and" test where this "if" has to pass first and can be used to decompose the statement for troubleshooting purposes
  if (b < c) { // This can be an "and" test where the second "if" has to pass for the rest of the actions to take place
    gs.info('a b c are in order');
    gs.info(' that means a is less than c');
  } else { // This else statement belongs to the second "if" statement. If the first "if" statement does not pass, the second if/else statement will not run
  gs.info('a is greater than or equal to b');
  } 
}
// Variable for Valve Status
var valveStatus = true;
//
if (valveStatus) { // Can shortcut from valveStatus == true to just if (valveStatus)
  gs.info('Valve is currently open');
}
// Variable for Valve Status
var valveStatus = false;
if (!valveStatus) {
  gs.info('Valve is currently closed');
}

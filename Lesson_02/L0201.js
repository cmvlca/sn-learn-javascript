//
//  L02S01 - semicolon example
//

// Required:
var i = 0; i++        // <-- semicolon obligatory to show where one line endes and another begins
                      // 
var i = 0             // <-- semicolon optional when a new line is created but not best practice
    i++               // 

// Optional:
var i;                        // variable declaration doesn't need a semicolon but best practice to add the semicolon
i = 5;                        // value assignment doesn't need a semicolon but best practice to add the semicolon
i = i + 1;                    // value assignment doesn't need a semicolon but best practice to add the semicolon
i++;                          // same as above doesn't need a semicolon but best practice to add the semicolon
var x = 9;                    // declaration & assignment doesn't need a semicolon but best practice to add the semicolon
var fun = function() {...};   // var decl., assignmt, and func. defin. doesn't need a semicolon but best practice to add the semicolon
alert("hi");                  // function call doesn't need a semicolon but best practice to add the semicolon

// Avoid semicolons for if/else, for, while
// NO semicolons after }:
if  (...) {...} else {...}
for (...) {...}
while (...) {...}

// BUT for do/while it is good to put a semicolon:
do {...} while (...);

// function statement: 
function (arg) { /*do this*/ } // NO semicolon after }

// Exception exceptions for semi-colon:
for (var i=0; i < 10; i++)  {/*actions*/}       // correct
for (var i=0; i < 10; i++;) {/*actions*/}       // SyntaxError

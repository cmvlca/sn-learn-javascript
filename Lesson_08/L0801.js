//
//  L08S01 - Changing and detecting variable types
//
var i = 5;
var iStr = i.toString();
gs.info('type of i=' + typeof i);
gs.info('type of iStr=' + typeof iStr);

var n = parseInt(iStr);
var f = parseFloat(iStr);
gs.info('f=' +  f);
gs.info(typeof n + ' n=' + n);

gs.info('n + i=' + (n+i));

// homework: 3 variables, show length of each variable, show length of all variables concatenated
//Variables
var a = 'How ';
var b = 'are ';
var c = 'you?';
var abc = a + b + c

//Displays

gs.info('What is the length of variable a? ' + a.length)
gs.info('What is the length of variable b? ' + b.length)
gs.info('What is the length of variable c? ' + c.length)
gs.info('What is the length of variable abc? ' + abc.length)

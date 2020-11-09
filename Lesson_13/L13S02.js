//
// L13S02 - Multiple cases
//
// Using the switch break statement
var level = 5;
var message = '';

// Switch code with 'switch', 'case', 'break', and 'default' keywords
switch (level) { //level can only be primative so strings and numbers
  case 0: // case has to match the primative string or number of level
    message = 'Empty';
    break;

  case 1:
  case 2:
    message = 'Low';
    break;

  case 3: 
    message = 'Medium';
    break;
    
  case 4:
    message = 'High';
    break;

  case 5:
    message = 'Full';
    break;

  default:
    message = 'Uh-oh!';
}
gs.info('Level=' + level + ' status=' + message);

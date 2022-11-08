/*
Very simple, given an integer or a floating-point number, find its opposite.
Examples:
1: -1
14: -14
-34: 34
*/

function opposite(number) {
    return -number 
  }

/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'
*/

function greet (name, owner) {
    if (name === owner){
      return("Hello boss")
    } else {
      return("Hello guest")
    }
  }
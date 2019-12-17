// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    //create a var count to reutnr positive or negative number
    var count = 0;
    //turn the string into an array to iterate thru
    var splits = str.split('');
    for (var i = 0; i < split.length; i++){
        //if index equals opening bracets count goes up
        if (splits[i] === "(" && "[" && "{"){
            count++
        }
        //if index equals closing bracket count goes down
        if (spilts[i] === ")" && "]" && "}"){
            count--
        }
        //if count is a even number return true else false        
        if (count === 0){
            return true
        }else{
            return false
        }
    }
};
// const str = "Hi, there";

// document.write(str);

// console.log(typeof str); // string

// Escaping sequencing strings

// document.write("hi there, <br> welcome to the day"); // this will evaluated as html tag i.e. <br>

// to escape we use \
// document.write("It\'s alright");

// document.write("This is how \\ (backslash) is printed");

// STRING METHODS:
// length, search(), split(), toLowerCase(), indexOf(), substr(), toUpperCase(),lastIndexOf(), substring(), startsWith(), replace(), endsWith(), concat()

const string = "Welcome to the world of Programming";
console.log(string);
const lengthOfString = string.length; //35
document.write("length is: " + lengthOfString);

// toLowerCase();
const lowerString = string.toLowerCase(); // convert this to the lower case

// toUpperCase();
const upperString = string.toUpperCase(); // convert this to the upper case

// includes('valueToBeSearched', positionFromWhereToSearch );
// if it includes it will return true otherwise false (case sensitive)
const ifItIncludes = string.includes("off");
// console.log(ifItIncludes);

// startsWith("valueToBeEvaluate")
// if it starts with the particular value it returns true otherwise false (case-sensitive)
const ifStringStartsWith = string.startsWith("welcome");
// console.log(ifStringStartsWith);

// endsWith("valueToBeEvaluate")
// if it ends with the particular value it returns true otherwise false (case-sensitive)

const ifStringEndsWith = string.endsWith("ing");
// console.log(ifStringEndsWith);

// search("valueToBeSearched")
// if it finds the value in the particular string it returns the index of the same otherwise -1

const haveInStr = string.search("world"); //15
// console.log(haveInStr);

// indexOf(value):
// it returns the index no. of the value present in the string (basically the 1st index) otherwise -1

const value1 = string.indexOf("the");
// console.log(value1);

// lastIndexOf(value):
const value2 = string.lastIndexOf("Programming");
// console.log(value2);

// replace("oldValue", "newValue"):
// this function finds the oldValue in the string and replaces it with newValues (it replaces the 1st occurances)

const replacedString = string.replace("to", "from");
// console.log(replacedString);
// to change all the occurances use the g flag
const replacedStringGlobally = string.replace(/o/g, "xyz");
// console.log(replacedStringGlobally);

// concat(string):
// this method concats the two string into the one and returns it
const str1 = "Hello, ";
const str2 = "yashwant";
const concatedStr = str1.concat(str2); // Hello, yashwant
// console.log(concatedStr);

// split('de-eliminator')
// it breaks the string into elements using deliminator and seprates it with comma (,)
const splittedStr = string.split(" ");
//['Welcome', 'to', 'the', 'world', 'of', 'Programming']
// console.log(splittedStr);

//repeat(count)

const repeatedStr = string.repeat(2);
// console.log(repeatedStr);

// slice(start, end)
const slicedStr = string.slice(8, 3);
console.log(slicedStr);

// substr(start, end)
const subStrStr = string.substr(7, 3);
console.log(subStrStr); //   to

const text = "Hello world!";
const result = text.substr(1, 2);
console.log(result);

console.log(result.substring(0, 4)); // Wel

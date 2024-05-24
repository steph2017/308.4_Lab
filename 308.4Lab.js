/*
Part 1: Refactoring Old Code
When code is outdated or inefficient, it often goes through a process called “refactoring.”
Refactoring code is the process of restructuring that code without changing its original behavior.
For the first part of this assignment, revisit your code from ALAB 308.3.1, wherein you create a script that parsed CSVs.
Now that you have knowledge of arrays and objects, how would you change your approach to this problem?
Take a few minutes to examine and refactor the code before continuing.

*/

// I think I can achieve this by using split with the comma delimiter, then printing the array:

let cv = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";

const parseRows = cv.split("\n");
const parsedWords = [];

for (i = 0; i < parseRows.length; i++) {
    parsedWords.push(parseRows[i].split(",")); // Creating this for part 2

}

console.log(parsedWords);

/**
 Part 2: Expanding Functionality
Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
Begin with the following task:
Declare a variable that stores the number of columns in each row of data within the CSV.
Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.

After you have implemented the above:

Store your results in a two-dimensional array.

Each row should be its own array, with individual entries for each column.
Each row should be stored in a parent array, with the heading row located at index 0.

Cache this two-dimensional array in a variable for later use.
 */

// I think I can use the \n character & indexof method to judge how many columns. Then I can use loop through each element with for each in order to make a new array. 
// MAybe if i do a nested loop, i could solve for unlimited number of rows...
// Actually - it will be much easier to use slice:

const numOfCols = parsedWords[0].length; // Don't know yet if its more important to + 1 at this point or leave be. UPDATE: need the + 1

// I can calculate start/stop points of each based on loop counter. Making the new array:
// UPDATE: I scrapped all the code - I updated code in part 1 to satisfy requirements in part 2. Reposting below:


console.log(parsedWords);

/*

Part 3: Transforming Data
While the data is now much more workable than it was in its string format, there is still a large amount of obscurity in the data itself.
When we access an arbitrary index of the results array, it is impossible to know what that data is referring to without additional cross-referencing.
In order to make it more obvious what the data is, we will transform our rows into objects.

Implement the following:
For each row of data in the result array produced by your code above, create an object where the key of each value is the heading for that value’s column.
Convert these keys to all lowercase letters for consistency.
Store these objects in an array, in the order that they were originally listed.
Since the heading for each column will be stored in the object keys, you do not need to create an object for the heading row itself.
*/

// Attempting to create my object, I realize i cannot create an object with all the headers , given this is supposed to support variable numbers of columns... 
// So i will need to loop through this, adding keys as i go.


// const cvObjectArr = [];
// const cvObjectRow = {};

// //First I'll remove the header array from the 2d array:
// const objectKeys = parsedWords.splice(0, 1);

// // Then ill go ahead and make it lowercase now:
// // const objectKeyslc = objectKeys.map((key) => key.toLowerCase());
// let i; //debug visibility
// let j;
// // Then I'll iterate thru numOfCols to create each key:
// for (i = 0; i < numOfCols; i++) {
//     cvObjectRow[objectKeys[i]];
// }
// for (j = 0; j < parsedWords.length; j++) {  // Then within each key, add in the corresponding values for each row.
//     for (i = 0; i < numOfCols; i++) {
//         cvObjectRow[objectKeys[i]] = parsedWords[j][i];
//     }
//     cvObjectArr.push(cvObjectRow);
// }

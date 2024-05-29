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


const cvObjectArr = [];

//First I'll remove the header array from the 2d array:
const objectKeys = parsedWords.splice(0, 1);

// Then ill go ahead and make it lowercase now:
const objectKeyslc = objectKeys[0].map((key) => key.toLowerCase());

// Then I'll iterate thru numOfCols to create each key:

for (j = 0; j < parsedWords.length; j++) {  // Then within each key, add in the corresponding values for each row.
    const cvObjectRow = {};
    for (i = 0; i < numOfCols; i++) {


        cvObjectRow[objectKeyslc[i]] = parsedWords[j][i];
    }
    cvObjectArr.push(cvObjectRow);
}

/*

Part 4: Sorting and Manipulating Data
It is important to know how to work with data in this format, an array of objects, as it is one of the most commonly used data formats in JavaScript.
Using array methods, accomplish the following tasks, in order upon the result of Part 3:

Remove the last element from the sorted array.

Insert the following object at index 1:
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }

Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }

So far, the results should look like this:
[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "48", name: "Barry", occupation: "Runner", age: "25" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "7", name: "Bilbo", occupation: "None", age: "111" }]
Finally, use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.
*/

/*
Data source for pt. 4
[["ID", "Name", "Occupation", "Age"], ["42", "Bruce", "Knight", "41"], ["57", "Bob", "Fry Cook", "19"], ["63", "Blaine", "Quiz Master", "58"], ["98", "Bill", "Doctor’s Assistant", "26"]]
*/

let pt4Arr = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }];

// First sort array by looking at id:

pt4Arr.sort((a, b) => a.id - b.id);

// next use pop to remove last element:

pt4Arr.pop();

// next use, splice to add the code at specfiic place:

pt4Arr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });

// use push to add something to the end:

pt4Arr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(pt4Arr); //result check, looks good!

/*
Part 5: Full Circle
As a final task, transform the final set of data back into CSV format.
There are a number of ways to do this; be creative!
Once complete, be sure to submit your work according to the submission instructions at the beginning of this document.
*/

// i could first create an array from the keys. 
// Then do a nested loop: inner loop will go thru each key in a given object by string match
//  and push each key value to a 2d array. Outer loop will cycle through each object.
// result should be a 2d array and a 1d array for the header.
// Then shift (or unshift idr which one) to add header array as first elemebt in the 2d array.
// Then for each element in the 2d array, join with comma as the delimiteer (if needed)


// const headerArr = Object.keys(cvObjectArr[0]); // create header array - going to join after fact
// let revArr = [];
// for (k = 0; k < cvObjectArr.length; k++) {
//     revArr[k] = Object.values(cvObjectArr[k]);
// }
// revArr.unshift(headerArr);
// let newCV = revArr.join(", "); // Turning into string. Looks good!

// Alternate for adding newlines.

const headerArr = Object.keys(cvObjectArr[0]); // create header array - going to join now.
let newHeader = headerArr.join(",");
newHeader += "\n"; //Add the new line;

let revArr = [];
for (k = 0; k < cvObjectArr.length; k++) {
    revArr[k] = Object.values(cvObjectArr[k]);
    revArr[k] = revArr[k].join(",");
    revArr[k] += "\n";
}
revArr.unshift(headerArr);
let newCV = revArr.join(""); // Turning into string; no new delimiters needed. Looks good except the new line character does not show up after header.


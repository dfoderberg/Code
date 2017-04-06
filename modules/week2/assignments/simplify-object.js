/**
 * @file
 * This assignment has you simplify an object.  You need to get really good
 * at composing simple objects into human-readable formats, and you need to
 * likewise break those human-readable objects apart into simple parts so they
 * can be edited.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(100, 110);
}

/** 
 * Filter the inputted object for just the selected columns.
 */
function filterColumns(books, columns = ['title', 'author_data','edition_info', 'book_id']) {
    storageArray = []; // store newly simplified objects here
    for (bookObject of books){  // iterate through array of books to get individual objects
        let newObject = {};  // a object to temporarily hold a fully simplified object 
        //newObject.check = true;
        for (property of columns){  // sort through each property tag in columns
                newObject[property] = bookObject[property] || console.log("bookObject " + property + "is undefined");  
                // add a new property to newObject with the data from books, if its undefined console.log an error message
                //console.log(Object.keys(newObject)[1] + " is my newobject keys");
        }
        storageArray.push(newObject);
    }
    return storageArray;
}

console.log(filterColumns(getFirstTenBooks()));
/**
 * @author Davis Foderberg
 * @file
 * This function has you filter the books object by the date it was published.
 * Careful, this one is tricky!  Study the books.json object format before
 * attempting this one.  The data is non-uniform, and you'll need to do string
 * extraction using patterns to succeed.
 * 
 * To complete this assignment, examine the books structure in books.json.
 * 
 * You'll be benefitted to test your function using the "getFirstTenBooks"
 * function.  It's recommended to leverage a combination of console.log's
 * and the debugger to see what's going on where.
 */

//grabs the first 10 books from the json file and returns them as an array of objects
var getFirstTenBooks = function() {
    return JSON.parse(
        require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))
        .slice(0, 10);
}

/** 
 * Filter the inputted books bounded by input year.
 * the function takes in an array of book objects and a range to filter them by (number variables)
 * 
 */
function filterByDate(books, yearMin, yearMax) {
    let filteredBooks = [];  // stores the book objects that are within the filter range. stored in order they came in
    for(var i = 0; i < books.length; i++){  // iterates through my array a 
    //console.log("\nbook " + i);
    let year = searchForDates(books[i]);  // year store the date of the book that is returned from the searchForDates func
    if (year >= yearMin && year <= yearMax){  // checks if it passes the filter test.
        filteredBooks.push(books[i]);  // stores data of the book in an array called filteredBooks
    }
    // need to push books that are within the range to a new array then return that array.
}
return filteredBooks;  // returns an array of objects that contain book data within the date ranges
}


var searchForDates = function(book){ // searches for the newest date in a given book reference.
    let date = null;  // to store the value of each date found. this value is overwritten every time the for loop runs
    let newestDate = null;  // to store the newest date of publication
    let searchKeys = ["edition_info", "publisher_text"] // stores all of the keys that may have dates.
    for(var key of searchKeys){     // this iterates through all of the keys in the object that may have dates.
        let value = book[key];  // this will be the value matching the key
        //console.log(value);     // returns the object value that stores a possible date
        date = value.match("[0-2][0-9][0-9][0-9]");  // stores in date a number of 4 digits between 0 AD and the year 2999
        if (date != null){           // checks for valid date set by the match function.
        if (newestDate == null) newestDate = date; // assigns newest date a value if it doesnt have one
        else if (newestDate < date) newestDate = date; // assigns newest date the largest year number.
            
        }
    }
    //console.log("this is my date " + newestDate);  // outputs a single date found by the function to the console
        return newestDate;   // returns the date of the publication back to the filter function
}


var getXBooks = function(bookCount){  // gets bookCount amount of books out of the json file and stores as an array
        return JSON.parse(require('fs').readFileSync(__dirname + '/../books.json', 'UTF8')).slice(0, bookCount);   
}

let booksArray = getXBooks(10);  // creates an array a of length dependent on function input




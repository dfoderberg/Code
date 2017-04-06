/**
 * @file
 * This function has you searching by author and by title.  You'll want to 
 * distinguish between an exact match or a partial match for this assignment.
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
RegExp.escape= function(s) {
   return s.replace(/?/g, 'Q');  //  replaces all ? with Q
};

/** 
 * Return all books matching the title.
 */
function searchTitle(books, title, partial = true) {
    let searchedBooks = [];  // creates an array that stores the filtered books.
    let rExpression = new RegExp(title);  // creates a regular expression that will let me sort for a title
    //console.log(rExpression.toString());
 
    for (var i = 0; i < books.length; i++){ // iterate over the books array that was passed in
       // console.log(books[i]["title"] + " is title " + i);
        if (partial){ // run code below if partial is true. partial checks for partial matches
            if (books[i]["title"].match(rExpression) == title){  //if our title matches the books object title    
                //console.log("book title" + i + " passed match when partial is true");
                searchedBooks.push(books[i]); // add matched books to the array that we will return     
            }        
        }

        else{  // run code below when partial is false
                if (books[i]["title"] === title){
                    //console.log("book title" + i + " passed match when partial is false");
                    searchedBooks.push(books[i]);  // adds the book to the array if the title is an exact match
                }
        }    
    }
   // console.log("\n end of book titles\n");
    return searchedBooks;  // an array of books that had matching titles
}

/** 
 * Return all books matching the author.
 */
function searchAuthor(books, author, partial = true) {
    //console.log(author + " is the authors name?????");    
    let searchedBooks = [];
    //rExpression = new RegExp(RegExp.escape(author)); 
    let author_fixed = RegExp.escape(author);  // should escape ? in authors name
    let rExpression = new RegExp(author);  
 
    for (var i = 0; i < books.length; i++){
        //console.log(books[i]["author"] + " is author " + i);
        if (partial) // run code below if partial is true
        {
            for (array in books[i]["author_data"]){
                //console.log("authors name is ( " + books[i]["author_data"][array]["name"] + " ) !!!!! for book " + i);
                if (books[i]["author_data"][array]["name"].match(rExpression) == author){
                    searchedBooks.push(books[i]); // adds a book object to the array when the author name matches
                }
            }  
        }

        else{  // run code below when partial is false
            //if (books[i]["author"].match(rExpression) == author){
                for (array in books[i]["author_data"]){
                    if (books[i]["author_data"][array]["name"] === author){
                        console.log("book author " + i + " passed match when partial is false");
                        searchedBooks.push(books[i]);  // adds the book to the array if the title is an exact match
                    }
                }
            //}
        }    
    }
    //console.log("\n end of book titles\n");
    return searchedBooks;

}

/* the lines of code below are for outputing the results of the search. */

// let x = (searchTitle(getFirstTenBooks(), "Javascript", true));

// for (i of x){
//     console.log( "\n title " + i["title"] + " passed the test");
// }

let y = (searchAuthor(getFirstTenBooks(), "Paul Wilton", false));
for (i of y){
    for (j of i["author_data"])
    console.log( "\n author " + j["name"] + " passed the test");
}

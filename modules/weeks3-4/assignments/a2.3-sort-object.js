/**
 * @file
 * Data constantly is being sorted and searched.  In this assignment, you'll
 * sort through the book list in books.json.
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
 * Sort the inputted set of books by name.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 */
function sortByName(books, asc = true) {
    storeSort = [];
    sortingMap = new Map(); // create map called sortingMap
    for (let i = 0; i < books.length; i++){
        sortingMap.set(i, 0); // initalize map with all values and start all at values to 0
        storeSort.push("error if outputed");
    }
    for (let i = 0; i < books.length; i++){  // iterates through every book
        for (let j = (i+1); j < books.length; j++){  // iterates through books we want to check 
            if (books[i]["title"] <= books[j]["title"]){
                
                sortingMap.set(j, (sortingMap.get(j) + 1));  // increments the value of the key j by 1 when books[j] is >= to books[i]
            }
            else {
                sortingMap.set(i, (sortingMap.get(i) + 1));  // increments the value of the key i by 1 when books[j] is <= to books[i]
            }
        }
    }
    let mapIterator = sortingMap.values();
    for(let i = 0; i < books.length; i++){
        storeSort[mapIterator.next().value] = books[i]; // map iterator holds the location in array the book should be stored.
        console.log(sortingMap.get(i));
        
    }
    if (!asc) storeSort.reverse();
    return storeSort;
}

//console.log(sortByName(getFirstTenBooks(),true));
let checkArray = sortByName(getFirstTenBooks(), true); // stores an array of sorted book objects
//console.log(checkArray);
for( let i = 0; i < checkArray.length; i++){
    //console.log("hi");
    console.log(checkArray[i]["title"] + "    is the title!!!");
    
}

/* 
* step 1 create a map storing the array position in key and number of strings smaller in the values
* loop through an array comparing which value is larger. The larger string gets its value incremented
* if strings are equal increment the value in the one with the larger array position.
* then sort the array by the values stored matching the key that holds the array position. */


/** 
 * Sort the inputted set of books by author.
 * @param {Array<Object>} books An array of books.
 * @param {Boolean} asc If true, returns list in ascending order.
 */
function sortByAuthor(books, asc = true) {
    storeSort = [];
    sortingMap = new Map(); // create map called sortingMap
    for (let i = 0; i < books.length; i++){
        sortingMap.set(i, 0); // initalize map with all values and start all at values to 0
        storeSort.push("error if outputed");
    }
    for (let i = 0; i < books.length; i++){  // iterates through every book
        for (let j = (i+1); j < books.length; j++){  // iterates through books we want to check 
            if (books[i]['author_data'] == undefined && books[j]['author_data'] == undefined){
                
                sortingMap.set(i, (sortingMap.get(i) + 1));  // increments the value of the key j by 1 when books[j] is >= to books[i]
            }
            else if (books[i]["author_data"] == undefined){
                sortingMap.set(j, (sortingMap.get(j) + 1));
            }
            else if (books[j]["author_data"] == undefined){
                sortingMap.set(i, (sortingMap.get(i) + 1));
            }
            else if (!books[i]["author_data"].length)
            {
                sortingMap.set(j, (sortingMap.get(j) + 1));
            }
            else if (!books[j]["author_data"].length)
            {
                sortingMap.set(i, (sortingMap.get(i) + 1));
            }
            else if (books[i]['author_data'][0]['name'] <= books[j]['author_data'][0]['name']){
                console.log("here");
                sortingMap.set(j, (sortingMap.get(j) + 1));  // increments the value of the key j by 1 when books[j] is >= to books[i]
            }
            else {
                sortingMap.set(i, (sortingMap.get(i) + 1));  // increments the value of the key i by 1 when books[j] is <= to books[i]
            }
        }
    }
    let mapIterator = sortingMap.values();
    for(let i = 0; i < books.length; i++){
        storeSort[mapIterator.next().value] = books[i]; // map iterator holds the location in array the book should be stored.
        console.log(sortingMap.get(i) + " is the location each object should go in array");
        
    }
    if (!asc) storeSort.reverse();
    return storeSort;
    
}


let check2Array = sortByAuthor(getFirstTenBooks(),true); // stores an array of sorted book objects
//console.log(checkArray);
for( let i = 0; i < check2Array.length; i++){
    //console.log("hi");
        if (check2Array[i]['author_data'] == undefined ){
            
            }
            else if (!check2Array[i]["author_data"].length)
            {
                console.log("authordata was empty for i")
            }
        else console.log(check2Array[i]['author_data'][0]['name'] + "!    is the author!!! " + i + " is i");
}

/*
* ['author_data']['name']
if no author data what should i do. for now i am going to let it sort as it sees fit but i may want to put them in the back by iterating their key whenever i get to it.
*/
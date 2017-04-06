/**
 * @file
 * In this assignment you will read the entire books.json file and redistribute
 * the books by their subjects into separate files.  In other words, you should
 * result with files like:
 *      javascript_computer_program_language.json 
 *      web_site_development.json
 * 
 * In each of these files should be the books related to the respective subject.
 * 
 * This process is done by databases to make lookup times speedy.  Databases
 * are like specialized filesystems.  Databases leverage the cheapness of
 * storage capacity to organize data in ways that it is commonly looked up.
 * 
 * Remember how a JSON object is really just a Hash with a O(c) lookup time?
 * Well, it's not O(c) if you have to iterate through each object and identify
 * the fields.  If you had to go through each subject to find 
 * 'javascript_computer_program_language', then you'd result with a O(n) time.
 * 
 * We solve for this case by making copies of our dataset (like a Database does)
 * as an 'index'.  The index maintains O(c) lookup time given the 'key' the 
 * index is built for.
 */

/**
 * Read in the books.json file from the directory above.
 */
function readFiles() {

}

/**
 * Given each entry in the books.json file,
 * Read each subject for the book
 * If the file does not exist for the [SUBJECT_NAME].json
 *      create a file for the [SUBJECT_NAME].json
 * read in the contents of the file as a JSON string
 * append to that JSON string the currnt book you are reading for
 * 
 * After completing this function, you should think about ways you can make
 * this particular code faster.
 */
function indexBySubject() {

}

function readAndIndex(){
    let myMap = new Map();
    books = JSON.parse(require('fs').readFileSync(__dirname + '/../books.json', 'UTF8'))  // reads in file.
    for(let i = 0; i < books.length; i++){   // iterates through objects
        if (books[i].subject_ids != undefined){   // check if object has key dubject_ids
            for(let j = 0; j < books[i]["subject_ids"].length; j++){ // iterates through array of subjects 
                if(myMap.has[books[i].subject_ids[j]]){  // if subject exists
                    myMap[(books[i].subject_ids[j])].push(books[i]);  // push a new book object onto array
                }
                else{
                    myMap.set(books[i].subject_ids[j], [books[i]]); // create a new key value for map (key=string, value = array of book objects) 
                }
            }
        }
    }
    // for (obj in books){
    //     if (!obj["subject_ids"]){
    //         console.log(obj["subject_ids"].length);
    //         for(subjects in obj["subject_ids"]){
    //             console.log("here");
    //             myMap[subjects] = obj;
    //         }

    //     }
    // }
    mapIter = myMap.values();
    
    console.log(mapIter.next().value);
    console.log(mapIter.next().value);
    console.log(mapIter.next().value);
    console.log(mapIter.next().value);
    
    return myMap;
}
//console.log(readAndIndex());
readAndIndex();
module.exports = {
    readFiles: readFiles,
    indexBySubject: indexBySubject,
    readAndIndex: readAndIndex
};
// activity 1
// task 1 create object
let book = {
    name: "A story of yesterday",
    author: "Sergio Cobo",
    year: 2014
};

console.table(book);
console.log(book);

/* 
┌─────────┬────────────────────────┐
│ (index) │ Values                 │
├─────────┼────────────────────────┤
│ name    │ 'A story of yesterday' │
│ author  │ 'Sergio Cobo'          │
│ year    │ 2014                   │
└─────────┴────────────────────────┘
{ name: 'A story of yesterday', author: 'Sergio Cobo', year: 2014 } */

// Task 2:
console.log(book.name, book.author);

// Activity 2
// task 3

book={
    name:"A story of yesterday",
    author:"Sergio Cobo",
    year:2014,
    
   method:function(){
return this.name, this.author;
    },
    updateYear:function(y)
    {
        this.year=y;
    }
}
//  book = {
//     name: "A story of yesterday",
//     author: "Sergio Cobo",
//     year: 2014,
    
//     method: function() {
//         return { name: this.name, author: this.author };
//     }
// }

// Task 4 : method to update year of the book
console.log(book.method());


book.updateYear(2013)
console.log(book.year);

// Activity 3:Nested Objects
// Task 5:

let library={
    book1:{
        name:"abc",
        author:"xyz"

    },
    book2:{
        name:"def",
        author:"123"

    },
    book3:{
        name:"ghi",
        author:"456"

    },
};

console.table(library);
/* Output
┌─────────┬───────┬────────┐
│ (index) │ name  │ author │
├─────────┼───────┼────────┤
│ book1   │ 'abc' │ 'xyz'  │
│ book2   │ 'def' │ '123'  │
│ book3   │ 'ghi' │ '456'  │
└─────────┴───────┴────────┘
*/


// Task 6:
console.log("Names of all books in the library:");
for (let book in library) {
    console.log(library[book].name);
}
// Names of all books in the library:
// abc
// def
// ghi

// Activtiy 4:

// Task 7:MEthod to return books year and title as a string in the book object

book={
    ...book,
    titleReturn:function(){
        return `The book title is ${this.name } and pusblished year is ${this.year}`
    }
};
console.log(book.titleReturn());

// Activity 5:

// Task 8:

for (const key in book) {
    if (book.hasOwnProperty.call(book, key)) {
        const element = book[key];
        console.log(element);
        
    }
}

// Task 9:

console.log(Object.keys(book));
// [ 'name', 'author', 'year', 'method', 'updateYear', 'titleReturn' ]
console.log(Object.values(book));
/*[
  'A story of yesterday',
  'Sergio Cobo',
  2013,
  [Function: method],
  [Function: updateYear],
  [Function: titleReturn]
*/

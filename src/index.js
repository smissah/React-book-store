//----------------importing necessary files
import React from "react";
import ReactDOM from "react-dom";

//custom imports (identical to books name)

import { booksArray } from "./booksArray";

import Book from "./book";
//CSS
import "./index.css";

//stateless functional component
//always return JSX

// same thing can be done as but gets messy if im return alot:

// const Greetings = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Check me out, boy!")
//   );
// };

//-------------------Setting up vars{

//-----------------mapping booksArray

// const newBook = booksArray.map((book) => {
//   console.log(book.author);
//   // return <h3>{book.title}</h3>
//   return <img src="{book.image}" alt="" />;
// });

//-------------------my first component

function BookList() {
  return (
    <section className="bookList">
      {booksArray.map((newBook) => {
        return <Book key={newBook.id} {...newBook}></Book>;
      })}
    </section>
  );
}

// --------------- functions

ReactDOM.render(<BookList />, document.getElementById("root"));

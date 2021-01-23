//----------------importing necessary files
import React from "react";
import ReactDOM from "react-dom";

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

//-------------------Setting up vars
const firstBook = {
  title: "Where the Crawdads Sing",
  author: "Diela Owens",
  image:
    "https://images-eu.ssl-images-amazon.com/images/I/71FXfPs-iyL._AC_UL200_SR200,200_.jpg",
};
const secondBook = {
  title: "The Boy, The Mole, The Fox and The Horse",
  author: "Charley Mackesy",
  image:
    "https://images-eu.ssl-images-amazon.com/images/I/81fKY3dmCCL._AC_UL200_SR200,200_.jpg",
};

//-------------------my first component
const Book = (props) => {
  // console.log(props);
  //or i can destruct the probs like this:
  const { title, author, image } = props;
  //or destructor in fuction parameter like this
  //Books = ({title, author, image, children}) => {...

  return (
    <article className="book">
      <img src={props.image} alt="" />
      <h3>{props.title}</h3>
      <h2 className="author" style={{ fontSize: ".80rem", color: "#b26b6b" }}>
        {props.author.toUpperCase()}
      </h2>
    </article>
  );
};

function BookList() {
  return (
    <section className="bookList">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));

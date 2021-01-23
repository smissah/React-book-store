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

//-------------------Setting up vars{
const booksArray = [
  {
    id: "1",
    title: "Where the Crawdads Sing",
    author: "Diela Owens",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71FXfPs-iyL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: "2",
    title: "The Boy, The Mole, The Fox and The Horse",
    author: "Charley Mackesy",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81fKY3dmCCL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: "3",
    title: "A Promised Land",
    author: "Barak Obama",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/91%2BNBrXG-PL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: "4",
    title: "The Joy in You",
    author: "Cat Deeley",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71lqzsfqa1L._AC_UL200_SR200,200_.jpg",
  },
  {
    id: "5",
    title: "The Beekeeper of Aleppo",
    author: "Christy Lefteri",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/81t1T1gGBIL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: "6",
    title: "My Future Listography",
    author: " Lisa Nola",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51ndCfeUMsL._SX369_BO1,204,203,200_.jpg",
  },
  {
    id: "7",
    title: "The Ickabog",
    author: "J.K. Rowling",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51KX1AZ3PLL._AC_SX184_.jpg",
  },
  {
    id: "8",
    title: "Outline: A Novel",
    author: " Rachel Cusk",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41d7iw9ohyL._SX324_BO1,204,203,200_.jpg",
  },
  {
    id: "9",
    title: "The Hand & Flowers Cookbok",
    author: "Tom Kerridge",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/51D3bcvdQtL._AC_SX184_.jpg",
  },
];

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

const Book = ({ image, title, author }) => {
  // console.log(props);
  //or i can destruct the probs like this:
  // const { title, author, image } = props;
  //or destructor in fuction parameter like this
  //Books = ({title, author, image, children}) => {...
  // const { image, title, author } = props.newBook;

  const clickHandler = (e) => {
    // console.log(" event:", e.bubbles);
    console.log("Book title is:", title);
  };

  return (
    <article className="book">
      <img src={image} alt="book_cover" />
      <h3>{title}</h3>
      <h6 className="author">{author}</h6>
      <span>
        <button input="button" className="btn btn-buy" onClick={clickHandler}>
          Buy Now
        </button>
        <button
          input="button"
          className="btn btn-basket"
          onClick={clickHandler}
        >
          Basket +
        </button>
      </span>
    </article>
  );
};

// --------------- functions

ReactDOM.render(<BookList />, document.getElementById("root"));

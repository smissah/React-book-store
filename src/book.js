import React from "react";

//use 'rafce'
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

export default Book;

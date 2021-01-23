// importing necessary files
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

// my first component

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  let title = "The Boy, The Mole, The Fox and the Horse";
  return (
    <article className="book">
      <Image />
      <h3>{title.toUpperCase()}</h3>
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/81fKY3dmCCL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

//replaced with a variable JS
// const Title = () => (
//   <h3
//     style={{
//       color: "#1f5070",
//       fontSize: "1.2rem",
//       lineHeight: ".95rem",
//       marginTop: ".35rem",
//       letterSpacing: ".01rem",
//     }}
//   >
//     The Boy, The Mole, The Fox and The Horse{" "}
//   </h3>
// );
const Author = () => (
  <h4 style={{ color: "#617d14", fontSize: "0.95rem", marginTop: ".5rem" }}>
    Charlie Mackesy
  </h4>
);

// const Image = () => <img src="https://picsum.photos/200" alt="" />;

ReactDOM.render(<BookList />, document.getElementById("root"));

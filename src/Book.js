import React from "react";

const Book = (props) => {
  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hello");
  };
  const anotherClickHandler = (author) => {
    console.log(author);
  };
  return (
    <article onMouseOver={() => console.log(props.book.title)}>
      <img src={props.book.img} />
      <h3 onClick={() => console.log(props.book.title)}>{props.book.title}</h3>
      <p>{props.book.author}</p>
      <button onClick={clickHandler}>Click Me!</button>
      <button onClick={() => anotherClickHandler(props.book.author)}>
        Another Click!
      </button>
    </article>
  );
};

export default Book;

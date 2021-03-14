import React from "react";
import ReactDom from "react-dom";
import { books } from "./books";
import SpecificBook from "./Book";

function BookList() {
  return (
    <section>
      {books.map((book) => {
        return <SpecificBook key={book.id} book={book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));

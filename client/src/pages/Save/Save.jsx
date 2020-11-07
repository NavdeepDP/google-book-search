import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedBooks from "../../components/SavedBooks/SavedBooks";
import "./Save.css"

const Save = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // make a api call to get saved books
    axios
      .get("/api/books")
      .then((result) => {
        console.log("Books");
        console.log(result);
        setBooks(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="container text-left">
        <div className="row" id="saved-book-header">
          <div className="col-sm-12">
            <h5>Saved Books</h5>
          </div>
        </div>

        {books.length ? (
          <ul>
            {books.map((book) => {
              console.log("book.volumeInfo.title");
              return (
                <SavedBooks
                  title={book.title}
                  subTitle=""
                  authors={book.authors}
                  image={book.image}
                  description={book.description}
                />
              );
            })}
          </ul>
        ) : (
          <h7>No Books to display </h7>
        )}
      </div>
    </div>
  );
};

export default Save;

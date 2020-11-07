import React, { useState } from "react";
import axios from "axios";
import BookResult from "../BookResult/BookResult";
import "./SearchInput.css";

const SearchInput = () => {
  const [searchBook, setSearchBook] = useState("");
  const [books, setBooks] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("form submitted");
    debugger;
    if (searchBook == "") {
      console.log("No book to search");
      return;
    }
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`)
      .then((result) => {
        console.log("Books");
        console.log(result.data);
        setBooks(result.data.items);
        setSearchBook("");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div id="form-div" className="row">
        <div className="col-sm-12">
          <form onSubmit={handleOnSubmit}>
            <div className="form-group">
              <label for="searchBook">Search Book</label>
              <input
                type="text"
                className="form-control"
                id="searchBook"
                placeholder="Search Book name"
                name="searchBook"
                value={searchBook}
                onChange={(e) => {
                  setSearchBook(e.target.value);
                }}
              />
            </div>
            <div className="text-right">
              <button type="submit" className="btn btn-primary ">
                Search
              </button>
            </div>
          </form>
          <hr />
        </div>
      </div>

      {books.length ? (
        <ul>
          {books.map((book) => {
            console.log("book.volumeInfo.title");
            return (
              <BookResult
                title={book.volumeInfo.title}
                subTitle={book.volumeInfo.subtitle}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.smallThumbnail}
                description={book.volumeInfo.description}
              />
            );
          })}
        </ul>
      ) : (
        <h7>No Books to display </h7>
      )}
    </div>
  );
};

export default SearchInput;

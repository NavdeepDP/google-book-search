import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedBooks from "../../components/SavedBooks/SavedBooks";
import "./Save.css"

const Save = () => {
  const [books, setBooks] = useState([]);

  const handleBookDelete = (e) =>{
     e.preventDefault();
     console.log("Delete clicked");
     console.log(e.target);
    
      // make a api call to get delete saved book
    axios
    .delete("/api/books/" + e.target.id)
    .then((result) => {      
      console.log(result);

      loadBooks();
      
    })
    .catch((err) => {
      console.log(err);
    });

  };

  const loadBooks= ()=> {

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
  };

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
                  id={book._id}
                  title={book.title}
                  subTitle=""
                  authors={book.authors}
                  image={book.image}
                  description={book.description}
                  handleClick={handleBookDelete}
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

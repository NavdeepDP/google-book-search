import React,{useState} from "react";
import axios from "axios";

const SearchInput = () => {
  const [searchBook, setSearchBook] = useState("");

  const handleOnSubmit = (event) => {
      event.preventDefault();
      console.log("form submitted");
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}`).then(result =>{
            console.log("Books");
            console.log(result.data);
      }).catch(err =>{
                console.log(err);
      });

  };
  return (
    <div>
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
            onChange = {(e) => {setSearchBook(e.target.value)}}
          />
        </div>
        <div className="text-right">
          <button type="submit" className="btn btn-primary ">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchInput;

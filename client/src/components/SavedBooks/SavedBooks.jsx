import React from "react";
import "./SavedBooks.css";
const SavedBooks = (props) => {


  

  return (
    <div id="saved-book">
      
      <div className="row">
        <div class="col-sm-8">
          <h4>{props.title}</h4>
          <h7>{props.subTitle ? props.subTitle : ""}</h7>
          <h6>
            Written By:{" "}
            {props.authors.length > 1
              ? props.authors.join(", ")
              : props.authors[0]}{" "}
          </h6>
        </div>
        <div class="col-sm-4">
          <div className="text-right">
          <a href={props.link} target="_blank">
              <button id="view-btn" type="submit" className="btn btn-primary ">
                View
              </button>
            </a>
            <button type="submit" className="btn btn-primary " id={props.id} onClick={props.handleClick}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <img src={props.image} alt="book image" />
        </div>
        <div className="col-sm-8">
          <p>{props.description ? props.description : ""}</p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default SavedBooks;

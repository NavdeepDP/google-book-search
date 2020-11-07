import React from "react";
import "./BookResult.css";
import axios from "axios";
const BookResult = (props) => {

    const handleOnClick =(event)=>{
        event.preventDefault();
       const book ={

         title: props.title,
         subTitle: props.title,
         authors: props.authors,
         description: props.description,
         image: props.image,
         link: ""

       };
       
        axios
        .post("/api/books", book)
        .then((result) => {
          console.log("Books");
          console.log(result);
          
        })
        .catch((err) => {
          console.log(err);
        });
    };

  return (
    <div>
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
            <button id="view-btn" type="submit" className="btn btn-primary ">
              View
            </button>
            <button type="submit" className="btn btn-primary " onClick={handleOnClick}>
              Save
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

export default BookResult;

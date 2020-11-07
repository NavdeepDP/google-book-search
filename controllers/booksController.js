const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {

  db.Book.find({})
    
    .then((foundBooks) => {
      res.json(foundBooks);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Failed to retrieve all Books.",
      });
    });
});

// router.get("/:id", (req, res) => {
//   db.Book.findOne({ _id: req.params.id })    
//     .then((foundBook) => {
//       res.json(foundBook);
//     });
// });

router.post("/", (req, res) => {
  db.Book.create(req.body).then((newBook) => {
    res.json(newBook);
  });
  
});

// router.put("/:id", (req, res) => {
   
//   db.Book.findOneAndUpdate(

//     { _id: req.params.id },
//     req.body,
//     { new: true }
//   )
//     .then((updatedBook) => {
//       if (!updatedBook) {
//           console.log(`updated Book: ${updatedBook}`)
//         res.status(404).json({
//           error: true,
//           data: null,
//           message: "Unable to find that Book.",
//         });
//       } else {
//         res.json({
//           error: false,
//           data: updatedBook,
//           message: "Successfully updated Book.",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "An error occurred updating your Book.",
//       });
//     });
  
// });

router.delete("/:id", (req, res) => {
  db.Book.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router;
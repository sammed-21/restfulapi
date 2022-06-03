const mongoose = require('mongoose');

mongoose
  .connect("mongodb://localhost:27017/studenapi", { useUnifiedTopology: true })
  .then(() => {
    console.log("mongodb connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

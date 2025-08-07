//REQUIRE OR IMPORT ALL THE MODULES HERE ONLY
const express = require("express");
require("dotenv").config();

//IMPORT DB CONNECTION
const dbConnect = require("./config/database");

const userRouter = require("./routes/userRoutes");

//SET INSTANCES HERE ONLY
const app = express();



//VARIABLE DECLARATION HERE ONLY
const PORT = process.env.PORT || 4888;


// I WANT TO RUN A MIDDLEWARE
app.use(express.json());


//WE WILL MAKE ROUTES

app.use("/api/user",userRouter)



// ERROR HANDLER

app.use("/", function (req,res){
  res.status(500).json({message: err.message});
})




dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});
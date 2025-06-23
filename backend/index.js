require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Contactform = require("./routes/ContactRoutes");
const QueryRoutes =  require('./routes/QueryRoutes')
const port = 4000;
const Mongo_Url = process.env.MONGO_URL;

app.use(cors());
app.use(express.json())


app.use(cors({
  origin: 'https://technoesgroup.com/', // replace with your actual domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/api/contact', QueryRoutes);

mongoose.connect(Mongo_Url)
.then(()=>{
    console.log("Mongodb Connect");
})
.catch((error)=>{
    console.log(error)
})

app.use("/api/", Contactform);


app.listen(port , ()=> console.log(`Server start at ${port}`));
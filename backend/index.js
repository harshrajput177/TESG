require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Contactform = require("./routes/ContactRoutes");
const QueryRoutes =  require('./routes/QueryRoutes')
const port = 4000;
const Mongo_Url = process.env.MONGO_URL;
const contactRoutes = require('./routes/UkRoutes');

app.use(cors());
app.use(express.json())

const allowedOrigins = [
  'https://technoesgroup.com',
  'http://localhost:5173',
  'http://localhost:5174'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


app.use('/api/contact', QueryRoutes);
app.use('/api/Ukcontact', contactRoutes);

mongoose.connect(Mongo_Url)
.then(()=>{
    console.log("Mongodb Connect");
})
.catch((error)=>{
    console.log(error)
})

app.use("/api/uk-form", Contactform);


app.listen(port , ()=> console.log(`Server start at ${port}`));
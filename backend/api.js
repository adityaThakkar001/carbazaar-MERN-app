const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;
app.use(cors());
const mongoURI = 'mongodb+srv://@cluster0.ywpee3y.mongodb.net/carbazaar';


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


const contactSchema = new mongoose.Schema({
  address: String,
  gender: String,
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  dateOfBirth: {
    type: String,
  }
});

const Data = mongoose.model('Data', contactSchema);

app.use(bodyParser.json());

app.post('/addData', async (req, res) => {
  try {
    
    const { address,gender,email,phoneNumber,dateOfBirth} = req.body;

    const newData = new Data({address,gender,email,phoneNumber,dateOfBirth });

    const result = await newData.save();

    res.json({status:true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



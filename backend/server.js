const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();


app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));

app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`)))
  .catch(err => console.log(err));

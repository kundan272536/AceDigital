// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Connect to MongoDB
// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());
// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/formdata';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check connection status
const db = mongoose.connection;
// console.log("database",db);
db.on('error', (error) => console.error('Error connecting to MongoDB:', error));
db.once('open', () => console.log('Connected to MongoDB successfully'));
// Define a schema
const Schema = mongoose.Schema;
const formDataSchema = new Schema({
    fullname: String,
    email: String,
    phone_number:Number,
    monthly_budget:String
});

// Create a model
const FormData = mongoose.model('FormData', formDataSchema);
const enquiryDataSchema = new Schema({
    fullname: String,
    email: String,
    phone:Number
});

// Create a model
const EnquiryData = mongoose.model('EnquiryData', enquiryDataSchema);


// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
    const formData = new FormData({
        fullname: req.body.fullname,
        email: req.body.email,
        phone_number:req.body.phone_number,
        monthly_budget:req.body.monthly_budget
    });
    console.log("FormData:", formData);
    formData.save()
        .then(() => res.send(
            `
            <script>
                alert('Data saved successfully!');
                window.location.href = '/';
            </script>
        `))
        .catch(err => res.status(400).send('Unable to save data. Error: ' + err));
});


//Enquiry Data From submission
app.post('/enquiry-form', (req, res) => {
    const enquiryData = new EnquiryData({
        fullname: req.body.fullname,
        email: req.body.email,
        phone:req.body.phone,
    });
    console.log("FormData:", enquiryData);
    enquiryData.save()
        .then(() => res.send(
           `
            <script>
                alert('Data saved successfully!');
                window.location.href = '/';
            </script>
        `))
        .catch(err => res.status(400).send('Unable to save data. Error: ' + err));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

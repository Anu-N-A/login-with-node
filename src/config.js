const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Login-tut", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database connected successfully');
});

const collection = db.collection('users'); // Replace 'users' with your actual collection name

module.exports = collection;

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to database successfully!");
    })
    .catch((error) => { 
        console.log("Failed to connect to the database!", error);
    });


const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testeClick', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
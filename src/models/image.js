const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Image', new Schema(
    {
       
        title: {
            type: String,
            required: true,
            unique: true
        },
        address: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true
    })
);
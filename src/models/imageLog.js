const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('ImageLog', new Schema(
    {
        image: {
            type: mongoose.Types.ObjectId,
            ref: 'Image',
            //required: true
        },

    },
    {
        timestamps: true
    })
);
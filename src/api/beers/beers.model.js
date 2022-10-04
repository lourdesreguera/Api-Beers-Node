const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beersSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { type: String },
        type: { type: String, required: true },
        description: { type: String, required: true },
        country: { type: String, required: true },
        alcohol: { type: Number, required: true },
        price: {type: Number},
        rating: { type: Array }
    },
    {
        timestamps: true,
    }
);

const Beer = mongoose.model('Beer', beersSchema);

module.exports = Beer;
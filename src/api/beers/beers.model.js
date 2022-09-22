const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const beersSchema = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, required: true },
        description: { type: String, required: true },
        ingredients: { type: String },
        country: { type: String, required: true },
        alcohol: { type: Number, required: true },
        rating: { type: Array }
    },
    {
        timestamps: true,
    }
);

const Beer = mongoose.model('Beer', beersSchema);

module.exports = Beer;
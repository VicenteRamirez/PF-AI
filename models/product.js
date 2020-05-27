var moongose = require('mongoose');
var Schema = moongose.Schema;

var schema = new Schema({
    imagePath: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true }
});

module.exports = moongose.model('Product', schema);
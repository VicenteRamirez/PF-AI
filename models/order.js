var moongose = require('mongoose');
var Schema = moongose.Schema;

var schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    cart: { type: Object, required: true },
    address: { type: String, required: true },
    name: { type: String, required: true },
    paymentId: { type: String, required: true }
});

module.exports = moongose.model('Order', schema);
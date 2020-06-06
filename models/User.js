const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create UserSchema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        protect: true,
        default: false
    },
    block: {
        type: Boolean,
        default: false
    },
    register_date: {
        type: Date,
        default: Date.now
    },
    bankaccount: String,
    lang: String,
    telnumber: String
    // invoices: [InvoiceSchema],
    // customers: [CustomerSchema]
    //   articles: [ArticleSchema],
    //    userinfo: [UserinfoSchema]
});

module.exports = User = mongoose.model('user', UserSchema);



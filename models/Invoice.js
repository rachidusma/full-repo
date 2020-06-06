const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create InvoiceSchema
const InvoiceSchema = new Schema({
    userid: String,
    ocrid: String,      //for salary and article it is invoiceid
    invoicenumber: String,
    customerid: String,
    customername: String,
    duedate: {
        type: Date   // it should be  like 30days after Date.now

    },

    overdueinterest: Number,       // default 12 (show like 12%)
    summa: Number,
    total: Number,   //summa+tax  should be paid
    getpaidtotal: Number,   //summa+tax from customer
    extra_info: String,
    leveransmetod: String,
    published: {
        type: Boolean,
        default: false
    },

    publisheddate: {
        type: Date
    },
    invoicepaid: {
        type: Boolean,
        default: false
    },
    salarypaid: {
        type: Boolean,
        default: false
    },
    remind: {
        type: Boolean,
        default: false
    },
    pdf_link: String,
    createdate: {
        type: Date,
        default: Date.now
    }
});



module.exports = Invoice = mongoose.model('invoice', InvoiceSchema);

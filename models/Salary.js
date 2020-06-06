const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create SalarySchema
const SalarySchema = new Schema({
    userid: String,
    invoiceid: String,
    name: String,
    personummer: String,
    vatnummer: String,
    kundnummer: String,
    salary: Number,
    create_date: {
        type: Date,
        default: Date.now
    },
    bankaccount: String,

});


module.exports = Salary = mongoose.model('salary', SalarySchema);


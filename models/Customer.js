const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create CustomerSchema
const CustomerSchema = new Schema({
    userid: String,
    customername: String,
    orgnummer: String,
    personummer: String,
    vatnummer: String,
    kundnummer: String,
    postadress: String,
    postadress2: String,
    postnummer: String,
    stad: String,
    kontaktperson: String,
    country: String,
    epost: String,
    overdueinterest: Number,   // default 12%   12
    dagar: Number   // default 30 pay in within 30days

});


module.exports = Customer = mongoose.model('customer', CustomerSchema);


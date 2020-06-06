const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create ArticleSchema
const ArticleSchema = new Schema({
    userid: String,
    invoiceid: String,
    artikelnamn: String,
    produktkod: String,
    pris_enhet: Number,
    enhet: String,
    number: Number,
    moms: Number,      //(show like 25%)
    typ: String
});


module.exports = Article = mongoose.model('article', ArticleSchema);

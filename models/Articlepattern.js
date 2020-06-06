const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create ArticleSchema
const ArticlepatternSchema = new Schema({
    userid: String,
    artikelnamn: String,
    produktkod: String,
    pris_enhet: Number,
    enhet: String,
    moms: Number,      //(show like 25%)
    typ: String        // service or product
});


module.exports = Articlepattern = mongoose.model('articlepattern', ArticlepatternSchema);

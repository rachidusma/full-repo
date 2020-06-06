const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');  //import protection


//Article Model
const Article = require('../../models/Article');


// @route   GET api/auth/articles
// @desc    Get articles data
// @access  Private

router.get('/', auth, (req, res) => {    //middleware protection
  Article.find({ userid: req.user.id })
    .then(articles => res.json(articles));
});




router.get('/:id', auth, (req, res) => {    //middleware protection
  Article.find({ _id: req.params.id })

    .then(articles => res.json(articles));
});

router.get('/invoice/:id', auth, (req, res) => {    //middleware protection
  Article.find({ invoiceid: req.params.id })

    .then(articles => res.json(articles));
});


// @route   POST api/articles
// @desc    Create  article
// @access  Private
router.post('/', auth, (req, res) => {   //middleware to protect

  var newArticle = new Article({

    userid: req.user.id,
    invoiceid: req.body.invoiceid,
    artikelnamn: req.body.artikelnamn,
    produktkod: req.body.produktkod,
    pris_enhet: req.body.pris_enhet,
    enhet: req.body.enhet,
    number: req.body.number,
    moms: req.body.moms,
    typ: req.body.typ
  });

  newArticle.save().then(article => res.json(article));

});

// @route   DELETE api/articles/:id
// @desc    Delete article by _id
// @access  Private
router.delete('/:id', auth, (req, res) => {      //middleware to protect
  Article.findById(req.params.id)
    .then(article => article.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   UPDATE api/articles/:id
// @desc    Update article by _id
// @access  Private

router.patch('/:id', auth, (req, res) => {      //middleware to protect

  Article.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(article => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));


});


module.exports = router;

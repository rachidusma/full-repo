const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');  //import protection


//Articlepattern Model
const Articlepattern = require('../../models/Articlepattern');


// @route   GET api/auth/articlepatterns
// @desc    Get articlepatterns data
// @access  Private

router.get('/', auth, (req, res) => {    //middleware protection
  Articlepattern.find({ userid: req.user.id })
    .then(articlepatterns => res.json(articlepatterns));
});




router.get('/:id', auth, (req, res) => {    //middleware protection
  Articlepattern.find({ _id: req.params.id })

    .then(articlepatterns => res.json(articlepatterns));
});



// @route   POST api/articlepatterns
// @desc    Create  articlepattern
// @access  Private
router.post('/', auth, (req, res) => {   //middleware to protect

  var newArticlepattern = new Articlepattern({

    userid: req.user.id,
    artikelnamn: req.body.artikelnamn,
    produktkod: req.body.produktkod,
    pris_enhet: req.body.pris_enhet,
    enhet: req.body.enhet,
    moms: req.body.moms,
    typ: req.body.typ
  });

  newArticlepattern.save().then(articlepattern => res.json(articlepattern));

});

// @route   DELETE api/articlepatterns/:id
// @desc    Delete articlepattern by _id
// @access  Private
router.delete('/:id', auth, (req, res) => {      //middleware to protect
  Articlepattern.findById(req.params.id)
    .then(articlepattern => articlepattern.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   UPDATE api/articlepatterns/:id
// @desc    Update articlepattern by _id
// @access  Private

router.patch('/:id', auth, (req, res) => {      //middleware to protect

  Articlepattern.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(articlepattern => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));


});


module.exports = router;

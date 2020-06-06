const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');  //import protection


//Customer Model
const Customer = require('../../models/Customer');


// @route   GET api/auth/customers
// @desc    Get customers data
// @access  Private

router.post('/admin', auth, (req, res) => {    //middleware protection
  if (!req.body.admin) {
    Customer.find({ userid: req.user.id })
      .sort({ date: -1 })
      .limit(50)
      .then(customers => res.json(customers));
  } else {
    Customer.find({})
      .sort({ date: -1 })
      .limit(50)
      .then(customers => res.json(customers));

  };
});




router.get('/', auth, (req, res) => {    //middleware protection
  Customer.find({ userid: req.user.id })
    //   .sort({ customername: 1 })
    .then(customers => res.json(customers));
});




router.get('/:id', auth, (req, res) => {    //middleware protection
  Customer.find({ _id: req.params.id })
    //   .sort({ customername: 1 })
    .then(customers => res.json(customers));
});



// @route   POST api/customers
// @desc    Create  customer
// @access  Private
router.post('/', auth, (req, res) => {   //middleware to protect

  var newCustomer = new Customer({

    userid: req.user.id,
    customername: req.body.customername,
    orgnummer: req.body.orgnummer,
    personummer: req.body.personummer,
    vatnummer: req.body.vatnummer,
    kundnummer: req.body.kundnummer,
    postadress: req.body.postadress,
    postadress2: req.body.postadress2,
    postnummer: req.body.postnummer,
    stad: req.body.stad,
    kontaktperson: req.body.kontaktperson,
    country: req.body.country,
    epost: req.body.epost,
    dagar: req.body.dagar,
    overdueinterest: req.body.overdueinterest

  });

  newCustomer.save().then(customer => res.json(customer));

});

// @route   DELETE api/customers/:id
// @desc    Delete customer by _id
// @access  Private
router.delete('/:id', auth, (req, res) => {      //middleware to protect
  Customer.findById(req.params.id)
    .then(customer => customer.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   UPDATE api/customers/:id
// @desc    Update customer by _id
// @access  Private

router.patch('/:id', auth, (req, res) => {      //middleware to protect

  Customer.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(customer => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));


});


module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//Invoice Model
const Invoice = require('../../models/Invoice');

// @route   GET api/auth/Invoices
// @desc    Get Invoices data
// @access  Private


router.post('/admin', auth, (req, res) => {    //middleware protection
  if (!req.body.admin) {
    Invoice.find({ userid: req.user.id })
      .sort({ date: -1 })
      .limit(50)
      .then(invoices => res.json(invoices));
  } else {
    Invoice.find({})
      .sort({ date: -1 })
      .limit(50)
      .then(invoices => res.json(invoices));

  };
});



router.get('/', auth, (req, res) => {    //middleware protection
  if (!req.body.admin) {
    Invoice.find({ userid: req.user.id })
      .sort({ date: -1 })
      .limit(50)
      .then(invoices => res.json(invoices));
  } else {
    Invoice.find({})
      .sort({ date: -1 })
      .limit(50)
      .then(invoices => res.json(invoices));

  };
});




router.get('/:id', auth, (req, res) => {    //middleware protection
  Invoice.find({ _id: req.params.id })

    .then(invoices => res.json(invoices));
});



// @route   POST api/invoices
// @desc    Create  invoice
// @access  Private
router.post('/', auth, (req, res) => {   //middleware to protect

  var newInvoice = new Invoice({

    userid: req.user.id,
    ocrid: req.body.ocrid,
    customerid: req.body.customeid,
    invoicenumber: req.body.invoicenumber,
    customername: req.body.customername,
    duedate: req.body.duedate,
    overdueinterest: req.body.overdueinterest,
    summa: req.body.summa,
    total: req.body.total,
    getpaidtotal: req.body.getpaidtotal,
    extra_info: req.body.extra_info,
    leveransmetod: req.body.leveransmetod,
    published: req.body.published,
    publisheddate: req.body.publisheddate,
    invoicepaid: req.body.invoicepaid,
    salarypaid: req.body.salarypaid,
    remind: req.body.remind,
    pdf_link: req.body.pdf_link
  });

  newInvoice.save().then(invoice => res.json(invoice));

});

// @route   DELETE api/invoices/:id
// @desc    Delete invoice by _id
// @access  Private
router.delete('/:id', auth, (req, res) => {      //middleware to protect
  Invoice.findById(req.params.id)
    .then(invoice => invoice.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   UPDATE api/invoices/:id
// @desc    Update invoice by _id
// @access  Private

router.patch('/:id', auth, (req, res) => {      //middleware to protect

  Invoice.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(invoice => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));


});


module.exports = router;

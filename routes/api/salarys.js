const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');  //import protection


//Salary Model
const Salary = require('../../models/Salary');


// @route   GET api/auth/salarys
// @desc    Get salarys data
// @access  Private
router.post('/admin', auth, (req, res) => {    //middleware protection
  if (!req.body.admin) {
    Salary.find({ userid: req.user.id })
      .sort({ date: -1 })
      .limit(50)
      .then(salarys => res.json(salarys));
  } else {
    Salary.find({})
      .sort({ date: -1 })
      .limit(50)
      .then(salarys => res.json(salarys));

  };
});


router.get('/', auth, (req, res) => {    //middleware protection
  Salary.find({ userid: req.user.id })

    .then(salarys => res.json(salarys));
});




router.get('/:id', auth, (req, res) => {    //middleware protection
  Salary.find({ _id: req.params.id })
    //   .sort({ salaryname: 1 })
    .then(salarys => res.json(salarys));
});



// @route   POST api/salarys
// @desc    Create  salary
// @access  Private
router.post('/', auth, (req, res) => {   //middleware to protect

  var newSalary = new Salary({

    userid: req.user.id,
    name: req.body.name,
    invoiceid: req.body.invoiceid,
    personummer: req.body.personummer,
    vatnummer: req.body.vatnummer,
    kundnummer: req.body.kundnummer,
    salary: req.body.salary,
    create_date: req.body.create_date,
    bankaccount: req.body.bankaccount

  });

  newSalary.save().then(salary => res.json(salary));

});

// @route   DELETE api/salarys/:id
// @desc    Delete salary by _id
// @access  Private
router.delete('/:id', auth, (req, res) => {      //middleware to protect
  Salary.findById(req.params.id)
    .then(salary => salary.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   UPDATE api/salarys/:id
// @desc    Update salary by _id
// @access  Private

router.patch('/:id', auth, (req, res) => {      //middleware to protect

  Salary.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(salary => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));


});


module.exports = router;

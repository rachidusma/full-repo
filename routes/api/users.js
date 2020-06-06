const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

// User Model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, lastname, email, password,lang } = req.body;

  // Simple validation
  if (!name || !lastname || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        lastname,
        email,
        password,
        lang
      });

      // Create salt & hash, create user and res
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if (err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      admin: user.admin,
                      name: user.name,
                      lastname: user.lastname,
                      email: user.email,
                      lang: user.lang,
                    }
                  });
                }
              )
            });
        })
      })
    })
});

router.post('/admin/', auth, (req, res) => {    //middleware protection
  if (!req.body.admin) {
    console.log(req.body)
    return res.json({ status: '403', type: false, msg: 'You can not access, please contact admin!' });
  };
  User.find({})
    .sort({ username: 1 })
    .then(users => res.json(users));
});




router.get('/:id', auth, (req, res) => {    //middleware protection
  User.find({ _id: req.params.id })
    .then(users => res.json(users));
});


router.post('/pass', auth, (req, res) => {    //middleware protection

  const { name, lastname, email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) throw err;
      let password = hash;
      User.updateOne({ email: email }, { password: password })
        .then(user => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))

    })
  })


});






// @route   DELETE api/users/:id
// @desc    Delete user by _id
// @access  Private
router.delete('/:id', auth, (req, res) => {      //middleware to protect

  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.patch('/:id', auth, (req, res) => {      //middleware to protect


  User.updateOne({ _id: req.params.id }, { $set: req.body })
    .then(user => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));


});








module.exports = router;

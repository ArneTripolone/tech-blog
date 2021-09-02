const router = require('express').Router();
const { User } = require('../../models');
const {onlyIfLoggedIn} = require('../../middleware/auth');
const clog = require('../../utils/colorLogging');

// Get all users
router.get('/', async (req, res) => {
  try{
      const rawDbUsers = await User.findAll();

      dbUsers = rawDbUsers.map((userObj) => {
          return userObj.get({plain: true});
      })
      if(dbUsers){
          res.status(200).json(dbUsers);
      } else {
          res.status(404).json({message: "no Users found"});
      }
  }
  catch(err){
      console.log(err);
      res.status(500).json(err);
  }
});

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;
      req.session.user_id = dbUserData.id;
      clog('Successfully signed up', 'green');
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    clog(err.message, 'red');
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
try {
  const dbUserData = await User.findOne({
    where: {
        email: req.body.email,
    },
  });

  if (!dbUserData) {
    res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    return;
  }

  const validPassword = await dbUserData.checkPassword(req.body.password);

  if (!validPassword) {
    res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
    return;
  }

  req.session.save(() => {
    req.session.logged_in = true;
    req.session.user_id = dbUserData.id;
    clog('Successfully logged in', 'green');
    res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
  });
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
});

// Logout
router.post('/logout', (req, res) => {
if (req.session.logged_in) {
  req.session.destroy(() => {
    clog('Successfully logged out', 'green');
    res.status(204).end();
  });
} else {
  res.status(404).end();
}
});

module.exports = router;
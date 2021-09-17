const router = require('express').Router();
const Blogposts = require('../../models/Blogposts');
const clog = require('../../utils/colorLogging');

router.post('/newpost', async (req, res) => {
    try {
        const dbBlogpostData = await Blogposts.create({
            title: req.body.title,
            content: req.body.content
        });
        res.status(200).json(dbBlogpostData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

module.exports = router;
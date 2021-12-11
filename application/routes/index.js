var express = require('express');
var router = express.Router();
var userIsLoggedIn = require('../middleware/routeprotectors').userIsLoggedIn;
const {getRecentPosts, getPostById, getCommentsByPostId} = require('../middleware/postsmiddleware');
var db = require("../conf/database");
/* GET home page. */
router.get('/', getRecentPosts, function (req, res, next) {
  res.render('index', { title: 'CSC 317 App', name: "Dania Dababo" });
});

router.get('/login', (req, res, next) => {
  res.render('login');
})

router.get('/registration', (req, res, next) => {
  res.render('registration');
})

router.use('/postImage', userIsLoggedIn);
router.get('/postimage', (req, res, next) => {
  res.render('postimage');
});

router.get("/post/:id(\\d+)", getPostById, getCommentsByPostId, (req, res, next) => {
  res.render('viewpost', {title: `Post ${req.params.id}` });
});


module.exports = router;

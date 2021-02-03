var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let spots = [
    {
      place: "UK",
      category: "super place",
      description: "its in london",
      image: "https://www.planetware.com/photos-large/ENG/uk-best-places-loch-ness-inverness.jpg"

    },
    {
      place: "Berlin",
      category: "super place",
      description: "its in germany",
      image: "https://www.planetware.com/photos-tiles/east-berlin-former-0.jpg"
    }, {
      place: "Dubai",
      category: "super place",
      description: "its in UAE",
      image: "https://www.holidify.com/images/cmsuploads/square/shutterstock_780556252_20190822124114_20190822124134.jpg"
    }, {
      place: "Delhi",
      category: "super place",
      description: "its in India",
      image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Akshardham-Temple.jpg"
    },
  ]
  res.render('index', {spots, admin:false});
});

// router.get("/header", (req, res) => {
//   console.log("header");
//   res.render("partials/user-header", {admin : false})
// })

module.exports = router;

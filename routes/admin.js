var express = require('express');
var router = express.Router();
var userHelpers=require('../helpers/user-helpers')

/* GET users listing. */
router.get('/', function (req, res, next) {

  res.render('admin/view-users',{admin:true});
  // res.send('respond with a resource');
});
router.get('/add-user',(req,res)=>{
  res.render('admin/add-user',{admin:true})

})
router.post('/add-user',(req,res)=>{
  console.log(req.body);
  userHelpers.addUser(req.body,(result)=>{
    res.render("admin/add-user")
  })
})



module.exports = router;

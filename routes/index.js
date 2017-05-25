var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000/index
router.get('/index', function(req, res, next) {


// Lab2 переделать сервер так,чтобы возвращалась страница(res.render) либо данные в формате json(res.json)

  res.format({

    //Возвращает страницу,шаблон которой лежит в папке views.
    html: function(){
        res.render('index', { title: 'Express' });
    },
    //ВОзвращает текст в json формате. 
   
    json: function(){
        res.json("lab 2 completed!");
    }
  });


});


module.exports = router;

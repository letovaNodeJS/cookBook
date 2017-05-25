var express = require('express');
var app = express();
// Подключение к дб
var mongoose=require('mongoose');

//объявляем свой роутер
var recipesRouter = express.Router();

//Метод для получения списка рецептов по адресу localhost:3000/recipes
recipesRouter.get('/recipes', function(req, res) {


//Берем список рецептов из базы данных
mongoose.model('Recipe').find({}, function (err, recipes) {

  // Если ошибка - выводим в консоль текст ошибки
           if (err) {
               return console.error(err);

           } else {
            //Иначе отправляем ответ в формате json
               res.json(recipes);
           }
     });

 });

//Метод для получения списка рецептов по адресу localhost:3000/recipes/:id
recipesRouter.get('/recipes/:id', function(req, res) {

//берем параметр из адреса,для поиска в базе данных по этому id
var id=req.params.id;

// ищем в бд запись с таким же Id
mongoose.model('Recipe').findById(id, function (err, recipe) {
    // Если ошибка - выводим в консоль текст ошибки
      if (err) {
        console.error(err);
      } else {
          //Иначе отправляем ответ в формате json
              res.json(recipe);
      }
    });
 });

// прикрепляем роутер к серверу
app.use('/',recipesRouter);

module.exports = app;

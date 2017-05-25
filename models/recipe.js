var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Модель ,которая будет искаться в БД) Здесь мы описываем поля и тип каждого поля
var RecipeSchema = new Schema({
  cooking_Time: {
    type: Number,
  },
  recipe_name: {
    type: String
  },
  ingredients: {
    type:String
  }
});

// экспортируем модель для дальнейшего использования
module.exports = mongoose.model('Recipe',RecipeSchema);

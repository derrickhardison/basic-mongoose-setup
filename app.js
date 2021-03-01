// REQUIRE PACKAGE
const mongoose = require("mongoose");

// SPECIFY PORT / NAME OF DATABASE TO CREATE
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema({
  // DATA VALIDATION
  name: { type: String, required: [true, "Please enter a name"] },
  // DATA VALIDATION
  rating: { type: Number, min: 1, max: 10 },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 34,
  review: "Pretty solid as a fruit.",
});

fruit.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", peopleSchema);

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "Love this fruit",
});

mango.save();

const person = new Person({
  name: "John",
  age: 37,
  favoriteFruit: mango,
});

 person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!",
// });

// const orange = new Fruit({
//   name: "Orange",
//   score: 9,
//   review: "Lovely fruit!",
// });

// const banana = new Fruit({
//   name: "Banana",
//   score: 7,
//   review: "Okay fruit",
// });

////
// Inserts multiple documents to the fruits collection in the fruitsDB
////

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all fruits to the fruitsDB.");
//   }
// });

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//   }
//   mongoose.connection.close();
//   fruits.map((fruit) => {
//     console.log(`The fruit name is: ${fruit.name}`);
//   });
// });

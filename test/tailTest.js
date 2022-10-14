const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Hi", "Hello", "Hey"];
tail(words);
assertEqual(words.length, 3);
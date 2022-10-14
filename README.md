# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @gmahant/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(eqArrays)`: checks if two arrays are identical
* `assertEqual(actual, expected)`: test if two values are identical
* `assertEqualObjects(actual, expected)`: test if two objects are identical
* `countLetters(string)`: returns an object that how often a letter occurs
* `countOnly(allItems, itemsToCount)`: counts how many times a given value occurs in an array
* `eqArrays(array1, array2)`: checks if two arrays are identical
* `eqObjects(object1, object2)`: checks if two objects are identical
* `findByValue(object, value)`: returns the key of the value provided
* `findKey(object, callback)`: returns the key in an object that satisfies the callback function provided
* `flatten(array)`: flattens arrays within arrays 
* `head(array)`: returns the first item within an array
* `letterPosition(string)`: returns an object containing all the letters and their corresponding index
* `map(array, callback)`: loops through an array and applies the callback function to each item 
* `middle(array)`: returns the median value(s) of an array
* `tail(array)`: returns all items in an array excluding the first
* `takeUntil(array, callback)`: returns items of an array until provided callback is true
* `without(array1, array2)`: returns all items that are not identical between two arrays

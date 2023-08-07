# Fetch Dog CEO


## Introduction

In this lab, you will write JavaScript to get images of dogs and a list of dog
breeds from API's and render them to the DOM. You will also add some click
behavior to the list elements and implement a filter.

Note that this lab **does not contain tests**. You will be working from the
requirements described below and verifying that your code is working correctly
in the browser.

Once you're done, be sure to commit and push your code up to GitHub, then submit
the assignment using CodeGrade. Even though this practice lab does not have
tests, it must still be submitted through CodeGrade in order to be marked as
complete in Canvas.

## Challenge 1

This repository includes an `index.html` file that loads an `index.js` file.


const imgUrl = "https://dog.ceo/api/breeds/image/random/4";


Add JavaScript that:

- on page load, fetches the images using the url above ⬆️

[x] fetch function
[x] jsonify the data
[x] iterate through the data 
[x] create image tags (for each image)
[x] append to dom -  <div id="dog-image-container">
[x] msk sure js doesn't run until after HTML is loaded

---


## Challenge 2

[x] define breedURL variable
[x] fetch from breedURL 
[x] loop through all of the dog breeds
[x] add the source of the dog breed - text content
[x] select the ul element from the DOM
[x] append the dog breeds to the UL element that was selected

```js
const breedUrl = "https://dog.ceo/api/breeds/list/all";


---

## Challenge 3

Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
the user clicks on any one of the `<li>`s, the font color of that `<li>`
changes. This can be a color of your choosing.
[x]add event listeners to the li of the breeds - listen for a click
[x]the action that the event listener returns is changing the font color
[x]change the font color to your choosing 



---

## Challenge 4
[] add event listener - upon clicking on the drop down
- filter through the object - make sure object is an array? (i think)
- make sure filtering is returning the first character of the array


Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
so that the user can filter breeds that start with a particular letter using a
[dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

For example, if the user selects 'a' in the dropdown, only show the breeds with
names that start with the letter a. For simplicity, the dropdown only includes
the letters a-d. However, we can imagine expanding this to include the entire
alphabet.

---

![dog ceo](https://dog.ceo/img/dog.jpg)

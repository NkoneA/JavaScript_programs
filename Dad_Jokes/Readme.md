

### Program Name: Random jokes generator

#### Description:
* web application that fetches Dad jokes from the icanhazdadjoke API.

#### The purpose:
* purpose of this code is to create an interactive feature on a webpage where clicking a button triggers
  a function (addNewJoke) to fetch a Dad joke from an external API and dynamically add it to the webpage.

#### Technologies used:
* JavaScript:
  The entire code is written in JavaScript.
  Uses modern JavaScript syntax, including async/await for handling asynchronous operations.
* HTML/DOM Manipulation:
  Utilizes the document.querySelector() method to select HTML elements by their IDs (#jokes)
  and tag names (button). This allows interaction with these elements in the DOM (Document Object Model).
* Axios:
  Incorporates the Axios library, a popular JavaScript library used for making HTTP requests.
  It is used here to perform an asynchronous GET request to the icanhazdadjoke API endpoint (https://icanhazdadjoke.com/).

#### Usage:
* Setup HTML Elements:
  Ensure you have HTML elements: an element with the ID jokes (probably a list) and a button element.
* Include Axios:
  Include the Axios library in your project (via CDN or package manager) for making HTTP requests.
* JavaScript Execution:
  Ensure this JavaScript code is executed in a browser environment where document and DOM manipulation are available.
  The code should be executed after the DOM is fully loaded, such as within a script tag in an HTML
  file or a script loaded at the end of the HTML body.
* Triggering the Action:
  Clicking the button on the webpage triggers the addNewJoke() function.
  This function uses Axios to fetch a new joke asynchronously from the icanhazdadjoke API.
  Upon receiving the joke, it dynamically adds it to the list of jokes displayed on the webpage.





### Program Name: Tv show search

#### Description: 
* This code is about fetching data from the TVMaze API based on user input.

#### The purpose:
* Search for TV shows: Allows users to search for TV shows via a form input.
* Display images: Retrieves images related to the searched TV shows and displays them on the web page.
* Clear images: Clears the displayed images when initiating a new search.

#### Technologies used:
* HTML/CSS: The code interacts with HTML elements using JavaScript.
* JavaScript: Utilizes Axios for making HTTP requests to the TVMaze API and
  dynamically manipulates the DOM to display and delete images.
* TVMaze API: The code fetches TV show data and images from the TVMaze API.

#### Usage:
* Setup HTML:
  Create an HTML file and link your JavaScript file to it.
  Include a form with an input field for users to enter their search queries.
  Ensure the form has an ID (searchForm), and the input field has the name query.
* JavaScript:
  Copy the provided JavaScript code into your JavaScript file.
* Execute the Program:
  Once everything is set up, open the HTML file in a browser.
  Enter a search query (e.g., the name of a TV show) into the input field in the form.
  Submit the form (usually by hitting Enter or clicking a submit button).
* Result:
  The program will prevent the default form submission behavior (which would cause a page refresh).
  It will make an asynchronous request to the TVMaze API using Axios, searching for TV shows based on the entered query.
  The program will retrieve the images related to the TV shows found in the API response and display them on the webpage.
  Any existing images displayed from previous searches will be removed before showing the new search results.
* Clearing Displayed Images:
  If you want to clear the displayed images, simply click inside the input field.
  This action triggers the removal of existing images from the page.
* Reuse:
  You can repeat the process by entering new search queries and submitting the form.




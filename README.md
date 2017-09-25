# x-swapi

A Star Wars API exercise.

This exercise does not need a `package.json` but you will need a server in order to use AJAX.

If you don't have it already installed, I recommend to use `live-server` (which can be installed with `npm i -g live-server` and then run from the terminal with the `live-server` command in the directory of your project).

## Steps

### HTML

Create an `index.html` file with:
- A `header` tag which contains:
  - A `h1` tag with the following content: "Star Wars Browser"
- A `main` tag to which you add the attribute `role` with value `main`
- A `footer` tag with the following content:
  ````html
  Developed with 💙 in Berlin, using the <a href="https://swapi.co/">Star Wars open API</a>.
  ````


### JavaScript

- Create a `index.js` file and add the `script` tag in your `index.html`.
- Add the following content to your `index.js` file:
  ````js
  var mainElement = document.querySelector('main');
  //
  function loadPeople(done) {
    /*
      fill here
      ---------
      - make a GET request to: 'https://swapi.co/api/people/'
      - call the function "done" and pass it the result of the request
    */
  }
  //
  function renderPeople(people) {
    /*
      fill here
      ---------
      For each given people (use a loop or Array.forEach())
      - create a section element (with the document.createElement())
      - fill the innerHTML (maybe have a look at template literals) of the section with:
        - A header tag which has
          - A h1 tag containing the name of the person
        - A div tag which has a list of the following information:
          - Birth Year
          - Eye Color
          - Skin Color
          - Hair Color
          - Height
          - Mass
          The list items have 2 children span
          (one with the class "label" and the other with the class "value")
        - Add the section element to the main element of the index.html
    */
  }
  // call the loadPeople with the renderPeople function as parameter
  loadPeople(renderPeople);
  ````


### CSS

- Download the `background.gif` file and save it at the root of your project.
- Add the following code in a `style.css` (don't forget to add the `link` tag):
  ````css
  *,
  *:before,
  *:after {
    box-sizing:/* fill here */;
  }

  html {
    height:/* fill here */;
  }

  body {
    font-family:/* fill here */;
    line-height:/* fill here */;
    color:/* fill here */;
    background-color:/* fill here */;
    display:/* fill here */;
    flex-direction:/* fill here */;
    margin:/* fill here */;
    height:/* fill here */;
    background-image:/* fill here */;
    background-attachment:/* fill here */;
  }

  a,
  a:link,
  a:hover,
  a:visited {
    color:/* fill here */;
    text-decoration:/* fill here */;
  }

  h1,
  h2,
  h3 {
    margin:/* fill here */;
    font-weight:/* fill here */;
  }

  header,
  footer {
    color:/* fill here */;
    background-color:/* fill here */;
  }

  body>header,
  body>footer {
    padding-left:/* fill here */;
    padding-right:/* fill here */;
  }

  body>header,
  body>footer {
    padding-top:/* fill here */;
    padding-bottom:/* fill here */;
  }

  body>header {
    border-bottom:/* fill here */;
  }

  main {
    flex-grow:/* fill here */;
    overflow:/* fill here */;
    display:/* fill here */;
    flex-wrap:/* fill here */;
  }

  body>footer {
    border-top:/* fill here */;
  }

  .person {
    width:/* fill here */;
    margin:/* fill here */;
    background-color:/* fill here */;
    border:/* fill here */;
    border-radius:/* fill here */;
  }

  .person>header,
  .person>div {
    padding:/* fill here */;
  }

  .person>header {
    border-bottom:/* fill here */;
  }

  .person ul {
    padding:/* fill here */;
  }

  .person li {
    display:/* fill here */;
    padding:/* fill here */;
  }

  .person .label {
    flex-grow:/* fill here */;
    width:/* fill here */;
  }

  .person .gender {
    color:/* fill here */;
  }

  .person .value {
    color:/* fill here */;
  }

  ````


![result](https://user-images.githubusercontent.com/65971/30633894-a364e854-9ded-11e7-8739-6bc6d02a9c7f.png)


### Pager

As you have seen, the "people" object that you recieve from your AJAX call is looking a bit like:
````js
{
  results: [
    {name: /* ... */},
    {name: /* ... */},
    {name: /* ... */},
    /* ... */
  ],
  count: 87,
  next: 'https://swapi.co/api/people/?page=2',
  previous: null
}
````

In the "results" array they are only 10 records, but the total amount of people is 87.
So basically, it does not give you the complete list of people but only the first 10.
In order to load (and display) the next 10 people, you will need to make an other request to the "people.next" URL.

- Create a function called `loadData` which takes 2 arguments (`url` and `done`)
- In your `renderPeople` function add:
  - Something to clear the content of `mainElement`
  - Create a `nav` element (using document.createElement())
  - Create a `button` with:
    - Text "Previous"
    - Class name: `previous`
    - An event listener which will call the function `loadData` with the "people.previous" and `renderPeople`
  - Create a `button` with:
    - Text "Next"
    - Class name: `next`
    - An event listener which will call the function `loadData` with the "people.next" and `renderPeople`
  - Add the 2 buttons to the `nav` element you created
  - Add the `nav` element to the `mainElement`
  - Create a `div` element (with a class `cards`) and add it to `mainElement`
  - Change your JS code so that the `section` elements of your loop are append to the `div` element you just created

In your CSS, make changes so that it looks like the previous layout and
make styles for the pager buttons (so that they look a bit nicer).
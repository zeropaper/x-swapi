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


### More Javascript

In your `index.js`:
- create the following functions:
  - `createModal` which returns an element which has a class `modal` and has the following HTML content:
    ````html
    <div class="body">
      <div class="controls">
        <button>close</button>
      </div>
      <div class="content"></div>
    </div>
    <div class="underlay"></div>
    ````
  - `showModal` with 1 argument: `contentElement` and which
    - clears the child element with class `content`
    - appends the `contentElement` to the modal child element with class `content`
    - adds the class `open`
  - `hideModal` which removes the the class `open` from the
  - `loadData` with arguments `url` and `done` (basically, move the content of your `loadPeople` inside it) and replace the content of your `loadPeople` function with `loadData('https://swapi.co/api/people/', done);`
  - `loadPlanet` with arguments `url` and `done`
- Change the `loadData` function so that you can pass a `url` argument (before the `done` argument, in the end it should look like `function loadData(url, done) {/*  */}`).
- In the `renderPeople` function:
  - Add a `button` tag above the list
  - Add an event listener (either by using `buttonElement.onclick = function(){/*  */}` or with `buttonElement.addEventListener('click', function() {/*  */})`)

<details>
  <summary>Scaffolding</summary>

Don't copy paste without thinking about what this code is meant for. ;)

````js
function createModal() {
  // ...
  return element;
}

function showModal(contentElement) {
  // ...
}

function hideModal() {
  // ...
}

// you can copy that safely, just pay attention to where it has to be paste
var modalElement = createModal();
var modalContentElement = modalElement.querySelector('.content');
var modalCloseButton = modalElement.querySelector('.controls button');
modalCloseButton.addEventListener('click', hideModal);
document.body.appendChild(modalElement);


var mainElement = //...


function loadData(url, done) {
  // ...
}


function loadPeople(done) {
  loadData('https://swapi.co/api/people', done);
}

function loadPlanet(url, done) {
  loadData(url, done);
}



function renderPeople(people) {
  // ...
  
  
    sectionElement
      .querySelector('button')
      .addEventListener('click', function() {
        loadPlanet(person.homeworld, renderPlanet);
      });

    mainElement.appendChild(sectionElement);
  });
}

function renderPlanet(planet) {
  // ...
}


loadPeople(renderPeople);

````


</details>


### More CSS

Add the following code to your `style.css` and complete it where necessary.

````css
/* -------------------------------- */

.modal,
.modal>.underlay,
.modal>.body {
  position: absolute;
}

.modal,
.modal>.underlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal {
  height: 0;
  z-index: 10;
  overflow: hidden;
  transition: height 300ms ease;
}

.modal.open {
  height: 100%;
}

.modal>.underlay {
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.7);
}


.modal>.body {
  /* fill here */
}

.modal .controls {
  /* fill here */
}

.modal .content {
  /* fill here */
}

````

![star wars browser 1](https://user-images.githubusercontent.com/65971/30689939-e06356de-9ec2-11e7-82d1-760e728b2084.png)

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
  - If the "previous" property of the people object has a value, create a `button` with:
    - Text "Previous"
    - Class name: `previous`
    - An event listener which will call the function `loadData` with the "people.previous" and `renderPeople`
  - If the "next" property of the people object has a value, create a `button` with:
    - Text "Next"
    - Class name: `next`
    - An event listener which will call the function `loadData` with the "people.next" and `renderPeople`
  - Add the 2 buttons to the `nav` element you created
  - Add the `nav` element to the `mainElement`
  - Create a `div` element (with a class `cards`) and add it to `mainElement`
  - Change your JS code so that the `section` elements of your loop are append to the `div` element you just created

In your CSS, make changes so that it looks like the previous layout and
make styles for the pager buttons (so that they look a bit nicer).


### Menu and additional topics

- In the header of your `index.html` file, add a `nav` with a `ul` inside it.
- Have a look at https://swapi.co/documentation#root
- In your `index.js`:
  - At the top of the file, create an empty object called `renderers`
  - Just after the end of your `renderPeople`, add a property `people` to the `renderers` object which reference the `renderPeople` function.
  - Create a function called `renderUnimplemented` which will replace the content of the `mainElement` by a message like: "Sorry, this is not implemented yet."
  - Create a function called `renderMenu` which takes a `data` argument and add links (use `Object.keys(data).forEach(function(key) {/*...*/})` to iterate) in the `ul` of the header.
    - The text of the link is the property name of the `data` object
    - When one of those links is clicked
      - **If** a property on the `renderers` object is found, it calls the `loadData` with the `renderers[topic]`
      - **Otherwise** it calls the `renderUnimplemented` function (without calling `loadData`)
  - Make a call to the root endpoint (using `loadData`) and then renders the menu.
  - Create a function `renderPlanets` (similar to the `renderPeople`) which renders the planets information and add a reference to the `renderPlanets` in the `renderers` object like you did with `renderPeople` (`renderers.planets = renderPlanets;`). You may need to make some changes to your CSS.
  - Repeat the previous process for:
    - films
    - species
    - starships
    - vehicles

### BONUS: Refactoring

You probably have a lot of code which looks similar accross your functions.
Try to clean that up. :)

### BONUS 2: Add a loader indicator

Add a visual indication of the loading (between the click on the menu link until the content renders).

### BONUS 3: Use the hashchange event

Using the `hashchange`.

### BONUS 4: Opening crawl

Animate the opening crawl of the films in a star wars fashion.


## Credits

- Star Wars API: https://swapi.co
- background.gif: http://www.textures4photoshop.com/tex/bokeh-and-light/animated-golden-glitter-gif-texture-overlay.aspx

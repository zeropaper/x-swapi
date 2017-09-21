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


<details>
  <summary>Scaffolding</summary>


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


var modalElement = createModal();
var modalContentElement = modalElement.querySelector('.content');
var modalCloseButton = modalElement.querySelector('.controls button');
modalCloseButton.addEventListener('click', hideModal);
document.body.appendChild(modalElement);


var mainElement = //...


function loadData(wanted, done) {
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

## Credits

- Star Wars API: https://swapi.co
- background.gif: http://www.textures4photoshop.com/tex/bokeh-and-light/animated-golden-glitter-gif-texture-overlay.aspx

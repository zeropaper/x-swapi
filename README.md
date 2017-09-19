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
  
  function loadPeople(done) {
    fetch('https://swapi.co/api/' + resourceName + '/')
      .then(function(response) {
        return response.json();
      })
      .then(/* fill here */)
      .catch(function(err) {
        console.warn(err.stack);
      });
  }
  
  function renderPeople(people) {
    people.results.forEach(function(person) {
      var sectionElement = document.createElement('section');
      sectionElement.classList.add('person');

      var genderSymbol;
      switch (person.gender) {
        case 'male':
          genderSymbol = '♂';
          break;
        case 'female':
          genderSymbol = '♀';
          break;
        default:
          genderSymbol = '?';
      }

      sectionElement.innerHTML = `
      <header>
        <h1>
          ${person.name}
          <span class="gender" title="Gender: ${person.gender}">${genderSymbol}</span>
        </h1>
      </header>
      <div>
        <ul>
          <li>
            <span class="label">Birth Year:</span>
            <span class="value">${person.birth_year}</span>
          </li>
          <li>
            <span class="label">Eye Color:</span>
            <span class="value">${person.eye_color}</span>
          </li>
          <li>
            <span class="label">Skin Color:</span>
            <span class="value">${person.skin_color}</span>
          </li>
          <li>
            <span class="label">Hair Color:</span>
            <span class="value">${person.hair_color}</span>
          </li>
          <li>
            <span class="label">Height:</span>
            <span class="value">${(person.height / 100).toFixed(2)}m</span>
          </li>
          <li>
            <span class="label">Mass:</span>
            <span class="value">${person.mass}kg</span>
          </li>
        </ul>
      </div>
      `;

      mainElement.appendChild(sectionElement);
    });
  }

  loadPeople(renderPeople);
  ````


### CSS



## Credits

- Star Wars API: https://swapi.co
- background.gif: http://www.textures4photoshop.com/tex/bokeh-and-light/animated-golden-glitter-gif-texture-overlay.aspx
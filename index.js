var renderers = {};
var mainElement = document.querySelector('main');


function loadData(url, done) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var response = JSON.parse(xhr.responseText);
    done(response);
  };
  xhr.open('get', url);
  xhr.send();
}

function loadPeople(done) {
  loadData('https://swapi.co/api/people', done);
}

function renderPagerButton(url, what, done, container) {
  if (!url) return;
  var btn = document.createElement('button');
  btn.textContent = what;
  btn.classList.add(what);
  btn.addEventListener('click', function() {
    loadData(url, done);
  });
  container.appendChild(btn);
}

function renderUnimplemented() {
  mainElement.textContent = 'Sorry, this is not implemented yet';
}

function renderMenu(data) {
  var listElement = document.querySelector('header>nav>ul');
  Object.keys(data).forEach(function(key) {
    var itemElement = document.createElement('li');
    var linkElement = document.createElement('a');
    linkElement.textContent = key;
    linkElement.addEventListener('click', function() {
      if (!renderers[key]) {
        return renderUnimplemented();
      }
      loadData(data[key], renderers[key]);
    });
    itemElement.appendChild(linkElement);
    listElement.appendChild(itemElement);
  });
}
loadData('https://swapi.co/api/', renderMenu);


function renderPeople(people) {
  mainElement.textContent = '';

  var navElement = document.createElement('nav');

  renderPagerButton(people.previous, 'previous', renderPeople, navElement);
  renderPagerButton(people.next, 'next', renderPeople, navElement);
  // if (people.previous) {
  //   var previousButton = document.createElement('button');
  //   previousButton.textContent = 'Previous';
  //   previousButton.classList.add('previous');
  //   previousButton.addEventListener('click', function() {
  //     loadData(people.previous, renderPeople);
  //   });
  //   navElement.appendChild(previousButton);
  // }

  // if (people.next) {
  //   var nextButton = document.createElement('button');
  //   nextButton.textContent = 'Next';
  //   nextButton.classList.add('next');
  //   nextButton.addEventListener('click', function() {
  //     loadData(people.next, renderPeople);
  //   });
  //   navElement.appendChild(nextButton);
  // }

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');
  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);

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

    cardsElement.appendChild(sectionElement);
  });
}
renderers.people = renderPeople;


function renderPlanets(planets) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');
  renderPagerButton(planets.previous, 'previous', renderPlanets, navElement);
  renderPagerButton(planets.next, 'next', renderPlanets, navElement);

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');
  planets.results.forEach(function(planet) {
    console.log(planet);
    var sectionElement = document.createElement('section');
    sectionElement.innerHTML = `<header>
      <h1>${planet.name}</h1>
    </header>
    <div>
      <ul>
        <li>
          <span class="label">Climate:</span>
          <span class="value">${planet.climate}</span>
        </li>
        <li>
          <span class="label">Diameter:</span>
          <span class="value">${planet.diameter}</span>
        </li>
        <li>
          <span class="label">Gravity:</span>
          <span class="value">${planet.gravity}</span>
        </li>
        <li>
          <span class="label">Orbital Period:</span>
          <span class="value">${planet.orbital_period}</span>
        </li>
        <li>
          <span class="label">Population:</span>
          <span class="value">${planet.population}</span>
        </li>
        <li>
          <span class="label">Rotation Period:</span>
          <span class="value">${planet.rotation_period}</span>
        </li>
        <li>
          <span class="label">Surface Water:</span>
          <span class="value">${planet.surface_water}</span>
        </li>
        <li>
          <span class="label">Terrain:</span>
          <span class="value">${planet.terrain}</span>
        </li>
      </ul>
    </div>`;
    cardsElement.appendChild(sectionElement);
  });
  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);
}
renderers.planets = renderPlanets;

loadPeople(renderPeople);
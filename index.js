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


function renderGenerics(data, renderFunction, renderItem) {
  mainElement.textContent = '';

  var navElement = document.createElement('nav');

  renderPagerButton(data.previous, 'previous', renderFunction, navElement);
  renderPagerButton(data.next, 'next', renderFunction, navElement);

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');
  data.results.forEach(function(object) {
    var sectionElement = document.createElement('section');

    sectionElement.innerHTML = renderItem(object);

    cardsElement.appendChild(sectionElement);
  });

  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);
}


function renderPeople(people) {
  renderGenerics(people, renderPeople, function(person) {

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

    return `
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
  });
}
renderers.people = renderPeople;


function renderPlanets(planets) {
  renderGenerics(planets, renderPlanets, function(planet) {
    return `<header>
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
  });
}
renderers.planets = renderPlanets;


function renderSpecies(species) {
  renderGenerics(species, renderSpecies, function(object) {
    return `<header>
      <h1>${object.name}</h1>
    </header>
    <div>
      <ul>
        <li>
          <span class="label">Average Height:</span>
          <span class="value">${object.average_height}</span>
        </li>
        <li>
          <span class="label">Average Lifespan:</span>
          <span class="value">${object.average_lifespan}</span>
        </li>
        <li>
          <span class="label">Classification:</span>
          <span class="value">${object.classification}</span>
        </li>
        <li>
          <span class="label">Designation:</span>
          <span class="value">${object.designation}</span>
        </li>
        <li>
          <span class="label">Eye Colors:</span>
          <span class="value">${object.eye_colors}</span>
        </li>
        <li>
          <span class="label">Language:</span>
          <span class="value">${object.language}</span>
        </li>
        <li>
          <span class="label">Skin Colors:</span>
          <span class="value">${object.skin_colors}</span>
        </li>
      </ul>
    </div>`;
  });
}
renderers.species = renderSpecies;


function renderVehicles(vehicles) {
  renderGenerics(vehicles, renderVehicles, function(object) {
    return `<header>
      <h1>${object.name}</h1>
    </header>
    <div>
      <ul>
        <li>
          <span class="label">Cargo Capacity:</span>
          <span class="value">${object.cargo_capacity}</span>
        </li>
        <li>
          <span class="label">Consumables:</span>
          <span class="value">${object.consumables}</span>
        </li>
        <li>
          <span class="label">Cost in Credits:</span>
          <span class="value">${object.cost_in_credits}</span>
        </li>
        <li>
          <span class="label">Crew:</span>
          <span class="value">${object.crew}</span>
        </li>
        <li>
          <span class="label">Length:</span>
          <span class="value">${object.length}</span>
        </li>
        <li>
          <span class="label">Manufacturer:</span>
          <span class="value">${object.manufacturer}</span>
        </li>
        <li>
          <span class="label">Max Atmosphere Speed:</span>
          <span class="value">${object.max_atmosphering_speed}</span>
        </li>
        <li>
          <span class="label">Model:</span>
          <span class="value">${object.model}</span>
        </li>
        <li>
          <span class="label">Passengers:</span>
          <span class="value">${object.passengers}</span>
        </li>
        <li>
          <span class="label">Vehicle Class:</span>
          <span class="value">${object.vehicle_class}</span>
        </li>
      </ul>
    </div>`;
  });
}
renderers.vehicles = renderVehicles;


function renderStarships(starships) {
  renderGenerics(starships, renderStarships, function(object) {
    return `<header>
      <h1>${object.name}</h1>
    </header>
    <div>
      <ul>
        <li>
          <span class="label">MGLT:</span>
          <span class="value">${object.MGLT}</span>
        </li>
        <li>
          <span class="label">Cargo Capacity:</span>
          <span class="value">${object.cargo_capacity}</span>
        </li>
        <li>
          <span class="label">Consumables:</span>
          <span class="value">${object.consumables}</span>
        </li>
        <li>
          <span class="label">Cost in Credits:</span>
          <span class="value">${object.cost_in_credits}</span>
        </li>
        <li>
          <span class="label">Crew:</span>
          <span class="value">${object.crew}</span>
        </li>
        <li>
          <span class="label">Hyperdrive Rating:</span>
          <span class="value">${object.hyperdrive_rating}</span>
        </li>
        <li>
          <span class="label">Length:</span>
          <span class="value">${object.length}</span>
        </li>
        <li>
          <span class="label">Manufacturer:</span>
          <span class="value">${object.manufacturer}</span>
        </li>
        <li>
          <span class="label">Max Atmosphere Speed:</span>
          <span class="value">${object.max_atmosphering_speed}</span>
        </li>
        <li>
          <span class="label">Model:</span>
          <span class="value">${object.model}</span>
        </li>
        <li>
          <span class="label">Passengers:</span>
          <span class="value">${object.passengers}</span>
        </li>
        <li>
          <span class="label">Starship Class:</span>
          <span class="value">${object.starship_class}</span>
        </li>
      </ul>
    </div>`;
  });
}
renderers.starships = renderStarships;


function renderFilms(films) {
  renderGenerics(films, renderFilms, function(object) {
    return `<header>
      <h1><small>${object.episode_id}</small> ${object.title}</h1>
    </header>
    <div>
      <ul>
        <li>
          <span class="label">Director:</span>
          <span class="value">${object.director}</span>
        </li>
        <li>
          <span class="label">Producer:</span>
          <span class="value">${object.producer}</span>
        </li>
        <li>
          <span class="label">Release Date:</span>
          <span class="value">${object.release_date}</span>
        </li>
      </ul>
    </div>`;
  });
}
renderers.films = renderFilms;



loadPeople(renderPeople);
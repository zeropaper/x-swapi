var mainElement = document.querySelector('main');
var renderers = {};


function createModal() {
  var element = document.createElement('div');
  element.classList.add('modal');
  element.innerHTML = `<div class="body">
  <div class="controls">
    <button>close</button>
  </div>
  <div class="content"></div>
</div>
<div class="underlay"></div>`;
  return element;
}

function showModal(contentElement) {
  modalContentElement.innerHTML = '';
  modalContentElement.appendChild(contentElement);
  modalElement.classList.add('open');
}

function hideModal() {
  modalElement.classList.remove('open');
}

// you can copy that safely, just pay attention to where it has to be paste
var modalElement = createModal();
var modalContentElement = modalElement.querySelector('.content');
var modalCloseButton = modalElement.querySelector('.controls button');
modalCloseButton.addEventListener('click', hideModal);
document.body.appendChild(modalElement);

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

function loadPlanet(url, done) {
  loadData(url, done);
}



function renderPeople(people) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');

  if (people.previous) {
    var previousButton = document.createElement('button');
    previousButton.classList.add('previous');
    previousButton.textContent = 'previous';
    previousButton.addEventListener('click', function() {
      loadData(people.previous, renderPeople);
    });
    navElement.appendChild(previousButton);
  }

  if (people.next) {
    var nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';
    nextButton.addEventListener('click', function() {
      loadData(people.next, renderPeople);
    });
    navElement.appendChild(nextButton);
  }

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

      <button>GIMME THE HOMEWORLD DIGGA</button>

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


    sectionElement
      .querySelector('button')
      .addEventListener('click', function() {
        loadPlanet(person.homeworld, renderPlanet);
      });

    cardsElement.appendChild(sectionElement);
  });
}
renderers.people = renderPeople;

function renderStarships(starships) {
  mainElement.textContent = '';
  var navElement = document.createElement('nav');

  if (starships.previous) {
    var previousButton = document.createElement('button');
    previousButton.classList.add('previous');
    previousButton.textContent = 'previous';
    previousButton.addEventListener('click', function() {
      loadData(starships.previous, renderPeople);
    });
    navElement.appendChild(previousButton);
  }

  if (starships.next) {
    var nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';
    nextButton.addEventListener('click', function() {
      loadData(starships.next, renderPeople);
    });
    navElement.appendChild(nextButton);
  }

  var cardsElement = document.createElement('div');
  cardsElement.classList.add('cards');

  mainElement.appendChild(cardsElement);
  mainElement.appendChild(navElement);

  starships.results.forEach(function(object) {
    var sectionElement = document.createElement('section');
    sectionElement.classList.add('object');

    sectionElement.innerHTML = `
    <header>
      <h1>
        ${object.name}
      </h1>
    </header>
    <div>
      <ul>
      </ul>
    </div>
    `;

    cardsElement.appendChild(sectionElement);
  });
}
renderers.starships = renderStarships;


function renderPlanet(planet) {
  var sectionElement = document.createElement('section');
  sectionElement.classList.add('planet');
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
    </ul>
    <ul>
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
  showModal(sectionElement);
}


loadPeople(renderPeople);


function renderUnimplemented() {
  mainElement.textContent = 'Doh! Not done yet.';
}


function renderMenu(data) {
  var menuListElement = document.querySelector('body > header ul');

  var keys = Object.keys(data);
  keys.forEach(function(key) {
    var liElement = document.createElement('li');

    var aElement = document.createElement('a');
    aElement.textContent = key;
    aElement.addEventListener('click', function() {
      if (!renderers[key]) return renderUnimplemented();
      loadData(data[key], renderers[key]);
    });

    liElement.appendChild(aElement);

    menuListElement.appendChild(liElement);
  });
}

loadData('https://swapi.co/api/', renderMenu);
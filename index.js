var mainElement = document.querySelector('main');

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


var modalElement = createModal();
var modalContentElement = modalElement.querySelector('.content');
var modalCloseButton = modalElement.querySelector('.controls button');
modalCloseButton.addEventListener('click', hideModal);
document.body.appendChild(modalElement);




function loadData(wanted, done) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    done(JSON.parse(xhr.responseText));
  };
  xhr.open('get', wanted);
  xhr.send();
}


function loadPeople(done) {
  loadData('https://swapi.co/api/people', done);
}

function loadPlanet(url, done) {
  loadData(url, done);
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
      <button>Homeworld Details</button>

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

    mainElement.appendChild(sectionElement);
  });
}


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
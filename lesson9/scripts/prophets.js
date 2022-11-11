
// Store the resource of the JSON URL file into a variable.
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

// Use basic fetch method and feed it the required argument.

fetch(requestURL)
  .then(function (response) { // returns a Promise which will be used as an argument.
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets']; // Store the results into an array since that data source is an array.
    prophets.forEach(displayProphets); // Call the forEach() method which will loop through each record to be processed.
  });

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h2 = document.createElement('h2');

    let div = document.createElement('div');
    let par1 = document.createElement('p');
    let span1 = document.createElement('span');
    let par2 = document.createElement('p');
    let span2 = document.createElement('span');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet.name + ' ' + prophet.lastname;
    par1.textContent =`Date of birth: `;
    span1.textContent = prophet.birthdate;
    par2.textContent =`Place of birth: `;
    span2.textContent = prophet.birthplace;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + prophet.name + ' ' + prophet.lastname);
    portrait.setAttribute('loading', 'lazy');

    // Extra: Add classes to the elements to help with stylizing.
    card.classList.add("card");
    portrait.classList.add("portrait");
    h2.classList.add("card-title");

    div.classList.add("prophet-info");
    par1.classList.add("text-1");
    span1.classList.add("birth-date");
    par2.classList.add("text-2");
    span2.classList.add("birth-place");

    // Add/append the section(card) with the h2 element and portrait.
    card.appendChild(h2);
    card.appendChild(portrait);

    // Extra: Add/append a div as a child element to the card.
    card.appendChild(div);
    div.appendChild(par1);
    par1.appendChild(span1);
    div.appendChild(par2);
    par2.appendChild(span2);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
// Store the resource of the JSON URL file into a variable.
//const requestURL = '';
import businessData from './lesson4/data/data.json' assert {type:'json'};

/* JSON file object information:
 * 'businesses' - contains a list of objects.
 * 'name' - holds the name of the company.
 * 'name_add' - holds an additional title for the company. 
 * 'address' - holds the address of the company.
 * 'address_end' - contains the city, state, and zipcode of the address.
 * 'phone' - holds the company's phone number.
 * 'url' - holds the company's web address.
 * 'mem_lvl' - holds the current membership level of the company. 
 */

const cards = document.querySelector('.directory-area');

fetch(businessData)
  .then(function (response) { // returns a Promise which will be used as an argument.
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const varObj = jsonObject['businesses']; // Store the results into an array since that data source is an array.
    varObj.forEach(displayEachObj); // Call the forEach() method which will loop through each record to be processed.
  });

  function displayEachObj(buisiness) {
    // Create elements to add to the document
    let card = document.createElement('section');
    //let image = document.createElement('img');
    let h2 = document.createElement('h2');

    let div = document.createElement('div');
    let par1 = document.createElement('p');
    let par2 = document.createElement('p');
    let par3 = document.createElement('p');
    let par4 = document.createElement('p');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = buisiness.name + ' ' + buisiness.name_add;
    par1.textContent =buisiness.address + ', ' + buisiness.address_end;
    par2.textContent = buisiness.phone;
    par3.textContent = buisiness.url;
    par4.textContent = buisiness.mem_lvl;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    /*
    portrait.setAttribute('src', business.imageurl);
    portrait.setAttribute('alt', 'Logo of ' + business.name);
    portrait.setAttribute('loading', 'lazy');
    */

    // Extra: Add classes to the elements to help with stylizing.
    card.classList.add("card");
    //image.classList.add("business-logo");
    h2.classList.add("card-title");
    par1.classList.add("text-1");
    par2.classList.add("text-2");
    par3.classList.add("text-3");
    par4.classList.add("text-4");

    // Add/append the section(card) with the h2 element and portrait.
    card.appendChild(h2);
    //card.appendChild(image);
    card.appendChild(par1);
    card.appendChild(par2);
    card.appendChild(par3);
    card.appendChild(par4);

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
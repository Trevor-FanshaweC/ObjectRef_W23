console.log('js is wired!');

let theButton = document.querySelector('button'),
    theList = document.querySelector('ul');

// rules for working with / creating objects

// 1. needs a name, wrapped in curly brackets
// 2. commas between keys

let coffeeCup = {
    // descriptive keys: properties
    color : 'white', // String
    lidColor : 'grey', // String
    height : 20, // Number
    contents : 'cappucino', // String

    // functional keys: methods (things an object can do)
    drink : () => { 
        console.log('sippy sip');
        console.log('i have sipped');
    },

    mix : () => console.log('add cream, sugar, etc')
};

// functions go here
function listProps() {
    if (theList.children.length > 0) { // if the list is already full
        // debugger; // then empty it
        theList.innerHTML = "";
        // and exit the rest of the function
        return;
    }

    for (prop in coffeeCup) { // prop is short for property
        console.log(coffeeCup[prop]);

        let newProp = document.createElement('li'); // <li></li>
        newProp.textContent = coffeeCup[prop];
        newProp.classList.add('red-list');

        theList.appendChild(newProp);
    }
}

// add event handling here
theButton.addEventListener('click', listProps);
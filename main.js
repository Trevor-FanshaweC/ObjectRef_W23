console.log('js is wired!');

let theButtons = document.querySelectorAll('button'),
    theList = document.querySelector('ul');

let profs = {
    marco : {
        name: 'Marco',
        role: 'Coordinator',
        nickname: 'marco',
        bio: 'some interesting info about marco',
        avatar: 'marco.jpg'
    },

    joe : {
        name: 'Joe',
        role: 'Digital Media Theory and Project Management',
        nickname: 'teddy bear',
        bio: 'some interesting info about joe',
        avatar: 'joe.jpg'
    },

    john : {
        name: 'John',
        role: 'Motion Prof',
        nickname: 'John',
        bio: 'some interesting info about John',
        avatar: 'john.jpg'
    }    
};

// functions go here
function listProf() {
    // empty out the list
    theList.innerHTML = "";
    
    // and then repopulate it with the correct data
    for (item in profs[this.dataset.prof]) {
        let newItem = document.createElement('li');

        newItem.textContent = profs[this.dataset.prof][item];
        theList.appendChild(newItem);
    }    
}

// add event handling here
theButtons.forEach(profButton => profButton.addEventListener('click', listProf));
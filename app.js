// import functions and grab DOM elements

import { getUser, setUser } from './Data/functions.js';
import toDolist from './Data/Data-Model.js';


const returningMember = document.getElementById('return');
const newMember = document.getElementById('new-member');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  


newMember.addEventListener('submit', (e) => {
    e.preventDefault();
    const existingUser = getUser() || {};
    const data = new FormData(newMember);


    if (existingUser.username === data.get('new')) {
        if (existingUser.password === data.get('newPassword')) {
            window.location = './ToDo/ToDo.html';
        } else {
            alert('Incorrect password');
        }
    } else {
  
    
    
        const user = { username:data.get('new'), password:data.get('newPassword'),
            todos:[] };
    
        setUser(user);

        window.location = './ToDo/ToDo.html';
    
        return alert('Congradulations! You created an account!');
    }
    
    


   
});
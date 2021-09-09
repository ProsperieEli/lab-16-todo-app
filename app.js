// import functions and grab DOM elements

import { getUser, setUser } from "./Data/functions.js";
import toDolist from "./Data/Data-Model.js";


const returningMember = document.getElementById('return');
const newMember = document.getElementById('new-member');

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

setUser();


// returningMember.addEventListener('submit', (e) => {
//     e.preventDefault;
    

//     const existingUser = getUser();
   
//     if (returningMember.userName !== existingUser.name && returningMember.password !== existingUser.password) {


//         return alert('New? Create an account!');

//     } else {

        
//         setUser(existingUser);
//         window.location = './ToDo/ToDo.html';
//     }
// });

newMember.addEventListener('submit', (e) => {
    e.preventDefault();

    // let userArray = getUsers();
    const data = new FormData(newMember);
    const user = { username:data.get('new'), password:data.get('newPassword'),
        todos:[] };
    // userArray.push(user);
    // setUsers(userArray);
    setUser(user);

    window.location = './ToDo/ToDo.html';
    
    return alert('Congradulations! You created an account!');

    
    
   

   
});
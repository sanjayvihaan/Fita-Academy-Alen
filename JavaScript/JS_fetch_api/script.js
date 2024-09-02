// fetch API
// Promoise is an Object representing that eventual completion or failure of an asynchronous operations.

fetch('https://jsonplaceholder.typicode.com/users/')
    .then(function(response){
        // The response is returned as a promise, so we convert it to JSON
        return response.json();
    })
    .then(function(data){
        //Now we have the data from the server and we can use it.
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })


const ul = document.getElementById('users');
const list = document.createDocumentFragment();
const api = 'https://jsonplaceholder.typicode.com/users';

fetch(api)
    .then((response) => {

        // Check if the response is OK (status 200 - 299)
        // if(response.ok){
        //     throw new Error('Network response was not OK')
        // }


        return response.json();
    })
    .then((data) => {
        let users = data;

        users.map((user) => {
            let li = document.createElement('li');
            let name = document.createElement('h2');
            let userName = document.createElement('p');
            let email = document.createElement('p');
            let address = document.createElement('p');


            name.innerHTML = `${user.name}`;
            userName.innerHTML = `${user.username}`
            email.innerHTML = `${user.email}`;
            address.innerHTML = `${user.address.zipcode}`;


            li.appendChild(name);
            li.appendChild(userName);
            li.appendChild(email);
            li.appendChild(address);
            list.appendChild(li);

        });
        ul.appendChild(list);
    })
    .catch((err) =>{
        console.log(err);
    });


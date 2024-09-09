// fetch('https://jsonplaceholder.typicode.com/users/')
//     .then(function(response){
//         // The response is returned as a promise, so we convert it to JSON
//         return response.json();
//     })
//     .then(function(data){
//         //Now we have the data from the server and we can use it.
//         console.log(data);
//     })
//     .catch(function(error){
//         console.log(error);
//     })


$.ajax({
    url: 'https://jsonplaceholder.typicode.com/users/',
    type: 'GET',
    dataType: 'json',

    success: function(data) {
        console.log(data)
    },

    error: function(error) {
        console.log(error)
    }

})
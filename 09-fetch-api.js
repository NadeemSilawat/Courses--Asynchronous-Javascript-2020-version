//fetch api

fetch('06-callback-hell/user1.json').then((response) => {
    console.log('resolve', response);
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log('reject', err);
})
const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('coud not fetch data',undefined);
        }
    });


    request.open('GET', resource);   

    request.send();

};


getTodos('./06-callback-hell/user1.json',(err, data) => {           
    console.log(data);
    getTodos('./06-callback-hell/user2.json',(err, data) => {           
        console.log(data);
        getTodos('./06-callback-hell/user3.json',(err, data) => {           
            console.log(data);
            
        }); 
    }); 
});
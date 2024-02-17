const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('coud not fetch data',undefined);
        }
    });


    request.open('GET', './06-callback-hell/user1.json');   // json file 

    request.send();

};


getTodos((err, data) => {           // -- Non blocking Code  Asynchronous code 
    console.log('callback fired')
    if(err){
        console.log(err);
    }else{
        console.log(data);

    }
});
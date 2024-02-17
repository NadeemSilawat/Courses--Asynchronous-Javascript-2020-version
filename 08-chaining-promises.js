
const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            // console.log(request, request.readyState);
            if (request.readyState === 4 && request.status == 200) {
                const data = JSON.parse(request.responseText)
                resolve(data)
            } else if (request.readyState === 4) {
                reject('some error')
            }
        })

        request.open('GET', resource);
        request.send();

    })
};

getTodos('./06-callback-hell/user1.json').then((data)=>{
    console.log("promise 1 resolved", data);
    return getTodos('./06-callback-hell/user2.json');
}).then(data =>{
    console.log( "promise 2 resolved ", data);
    return getTodos('./06-callback-hell/user3.json');
}).then(data =>{
    console.log( 'promise 3 resolved ', data );
}).catch((err)=>{
    console.log('Promise Rejected',err);
});


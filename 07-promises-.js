
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
    console.log("promise resolved", data);
}).catch((err)=>{
    console.log('Promise Rejected',err);
});

    




//promise example
// const getSomething = () => {

//     //fetch Something

//     return new Promise((resolve, reject) => {
//         resolve('some Data');
//         // reject('some error')
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }), (err) => {
//     console.log(err);
// }


// getSomething().then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })
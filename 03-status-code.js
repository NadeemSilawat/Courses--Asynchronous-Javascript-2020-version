const request = new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    // console.log(request, request.readyState);
    if(request.readyState === 4 && request.status == 200){
        console.log(request.responseText);
        // console.log(request.status);
    }else if(request.readyState === 4){
        console.log("could not fetch the Data");
    }
})

request.open('GET','https://jsonplaceholder.org/users');
request.send();     
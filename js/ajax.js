/*
What is AJAX?
--> AJAX stands for asynchronous javascript and XML.
--> AJAX is not a programming language. Rather, it's a set of existing technologies.
--> AJAX helps in fetching data asynchronously without interfering with the existing page.
--> No page reload/refresh.
--> Modern websites use JSON instead and XML for data transfer.

Why use AJAX?
--> No page reload/refresh
--> Better user experience
--> Saves network bandwidth
--> Very interactive 

How it works?
--> AJAX uses XMLHttpRequest object (also called xhr object) to achieve this.
--> Modern websites use JSON instead and XML for data transfer.
--> Data can be transferred in any format and protocol (Not always https necessarily)
*/

let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', fetchBtnClick);

let postBtn = document.getElementById('postBtn');
postBtn.addEventListener('click', postBtnClick);

let populateBtn = document.getElementById('populateBtn');
populateBtn.addEventListener('click', populateBtnClick);

function fetchBtnClick(){
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // xhr.open('GET', 'files/waqar.txt', true);           // true for asynchronous (non-blocking)
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On Progress');
    }

    // xhr.onreadystatechange = function(){
    //     console.log('ready state is ', xhr.readyState);
        // Value	State	           Description
        //   0	    UNSENT	           Client has been created. open() not called yet.
        //   1	    OPENED	           open() has been called.
        //   2	    HEADERS_RECEIVED   send() has been called, and headers and status are available.
        //   3	    LOADING	           Downloading; responseText holds partial data.
        //   4	    DONE	           The operation is complete.
    // }

    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            // It means everything is ok and we are getting the data
            console.log(this.responseText);
        }
        else{
            console.log('Some error occured');
        }
    }

    // send the request
    xhr.send();

    console.log('We are done');
}

function postBtnClick(){
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    // USE THIS FOR POST REQUEST
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    xhr.getResponseHeader('Content-type', 'application/json');

    // What to do on progress (optional)
    xhr.onprogress = function(){
        console.log('On Progress');
    }

    // What to do when response is ready
    xhr.onload = function(){
        if(this.status === 200){
            // It means everything is ok and we are getting the data
            console.log(this.responseText);
        }
        else{
            console.log('Some error occured');
        }
    }

    // send the request
    let params = `{"name":"test343fwr35","salary":"123","age":"23"}`;
    xhr.send(params);

    console.log('We are done');
}

function populateBtnClick(){
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    // What to do when response is ready
    xhr.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            // console.log(obj);
            let list = document.getElementById('list');
            str = "";

            for(key in obj){
                console.log(obj[key].id);
                str += `<li>${obj[key].id} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }

    // send the request
    xhr.send();

    console.log("We are done fetching employees!");
}
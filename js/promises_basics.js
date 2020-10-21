// Promise: Best video on promises
// -resolve
// -reject
// -pending

function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error = true;
            if(!error){
                console.log('Function: Your promise has been resolved');
                resolve();
            }
            else{
                console.log('Your promise has not been resolved');
                reject('Sorry not fulfilled');
            }
        }, 2000);
    });
}

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()
func1().then(function(){
    console.log('Waqar: Thanks for resolving');
}).catch(function(error){
    console.log('Waqar: Very Bad Bro. Reason: ' + error);
});
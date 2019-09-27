
// Promises

const pokePromise = fetch('https://pokeapi.co/api/v2/pokemon/ditto/')

// creates an empty object element with a bunch of default data 
// that acts as a placeholder until the fetch loads

// other code here
console.log(pokePromise)

pokePromise.then(data => data.json())
            .then(data => console.log(data))
            .catch( err => console.error(err))

// .then is a fuction that will only run when the promise is resolved
// .catch is an optional error handling


navigator.geolocation.getCurrentPosition(function (pos) {
    console.log('it worked!');
    console.log(pos)},
    function (err) {
        console.log(err)}) 

// built in promise function that allows a webpage that gets current geolocation. 
// by default takes in two arguments: success callback and rejection callback


function getCurrentPosition(...args) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(...args, resolve, reject)
    });
}

async function go() {
    console.log('starting');
    const pos = await getCurrentPosition();
    console.log(pos);
    console.loh('finished');
}

console.log('going');
go();
console.log('after go');

// when you want to explicity call a function that will be asychronous. 
// if you want to have a function that you want to run asynchronously, use async and await


async function getGitHubData() {
    const p1 = fetch('https://api.github.com/users/greg-smith1');
    const p2 = fetch('https://api.github.com/users/redcartel');
    const res = await Promise.all([p1,p2]);
    const dataPromises = res.map(r => r.json());
    const [greg, carter] = await Promise.all(dataPromises);
    console.log(greg, carter)
}

// you can write a function that will wait for all of the requests to resolve before moving on
// await is a keyword that says we have to wait for this to resolve before we move on in the function
// a DATA DOESN'T EXIST console error basically means you will need to use Promises



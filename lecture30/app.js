const amISexy = new Promise((resolve,reject) =>{
    setTimeout(reject,3000,"You are ugly");
});

const timesTwo = (number) => number * 2;

amISexy
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(timesTwo)
    .then(()=> {
        throw Error("Something");
    })
    .then(lastNumber=>console.log(lastNumber))
    .catch(error => console.log(error));
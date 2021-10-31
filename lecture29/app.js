// const amISexy = new Promise((resolve,reject) =>{
//     setTimeout(resolve,3000,"Yes you are");
// });
// 
// const thenFn = value => console.log(value)
// amISexy.then(thenFn);

const amISexy = new Promise((resolve,reject) =>{
    setTimeout(reject,3000,"You are ugly");
});

amISexy
    .then(result => console.log(result))
    .catch(value => console.log(value));

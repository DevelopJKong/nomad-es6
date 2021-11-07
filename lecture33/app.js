const p1 = new Promise(resolve => {
    setTimeout(resolve,10000,"Frist");
})  
    .then(value => console.log(value))
    .catch(e=>console.log(`${e}`))
    .finally(()=> console.log("I'm done"));

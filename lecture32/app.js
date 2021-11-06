//promise all과 race의 차이점을 알아두어야 한다
//promise all은 전부다 검사를 해서 하나라도
//reject가 되면 reject 된다

//하지만

//promise race같은 경우에는 빠른 순서로 결과값을준다
//예를들어서 첫번째에 reject가 있으면 reject가 되지만
//두번째 reject가 있으면 resolve를 제출하게된다
const p1 = new Promise(resolve => {
    setTimeout(resolve,5000,"Frist");
});

const p2 = new Promise(resolve => {
    setTimeout(reject,1000,"I hate JS");
});

const p3 = new Promise(resolve => {
    setTimeout(resolve,3000,"Third");
});

const motherPromise = Promise.race([p1,p2,p3]);

motherPromise
    .then(values => console.log(values))
    .catch(err => console.log(err));
//Promise는 비동기작업이 맞이할 미래의 완료
//또는 실패와 그 결과 값을 나타낸다

//Promise의 핵심은, 우리가 아직 모르는 value와 함께 작업할 수 있게 해준다는것이다
//자바스크립트에게 이걸하고, 끝나면 이걸 해줘 이렇게 할수있다

//생각해볼것
//Promise가 파일 시스템에서 파일을 연다면?
//Promise가 유저의 설정을 연다면?
const amISexy = new Promise((resolve,reject) =>{
    
    //setInterval(resolve,3000,"Yes you are");
    setInterval(()=> {
        resolve("Yes you are!");
    },3000);

}); 

console.log(amISexy);

//setInterval(console.log, 1000, amISexy);
setInterval(()=> {
    console.log(amISexy);
},3000);
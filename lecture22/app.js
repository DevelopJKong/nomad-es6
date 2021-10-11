const friends =[1,2,3,4];
const family = ["a","b","c"];
console.log(friends);
console.log(...friends);

//만약에 배열을 합치고 싶다면
//spread를 사용하면 좋은 방법이 될수도 있다

console.log([...friends,...family]);


//배열 뿐만 아니라 object 에서도 사용이 가능하다

const sexy = {
    name: "nico",
    age: 24
}

const hello = {
    sexy: true,
    hello: "hello"
}

console.log({...sexy,...hello});
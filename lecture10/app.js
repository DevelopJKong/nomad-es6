const sayHi = (aName = "정빈") => `hello + ${aName} lovely to have you`;

// const sayHi = function(aName ="정빈"){
//     return "hello " + aName;
// }

console.log(sayHi());


// " "
// ' '
// `` 백틱 이다 이것을 사용하면 ${} 달러 키워드를 통해서 변수를 담아줄수있다
// 또 표현식에 변수 뿐만 아니라 계산식도 넣을수있다


const add = (a,b) => a + b;
console.log(`hello how are you ${add(6,6)}`);


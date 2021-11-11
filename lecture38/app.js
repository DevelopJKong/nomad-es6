//object 사용시

// const baseObject = {
//     username : "Nicolas",
//     sayHello: function() {
//         console.log("I'm jeong");
//     }
// }
// 
// const sexyUser = baseObject;
// const uglyUser = baseObject;
// 
// sexyUser.sayHello();
// uglyUser.sayHello();

//Class는 object의 공장이라고 생각하면 좋다
//클래스는 죽어있는것 객체이고
//인스턴스는 살아있는것 객체이다

class User {
    constructor(name) {
        this.username = name;
    }
    sayHello(){
        console.log(`Hello, I'm ${this.username}`);
    }
}
const user = new User("Nico");

console.log(user.name);


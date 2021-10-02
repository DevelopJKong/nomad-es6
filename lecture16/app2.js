/**
 * fill 은 형식은 arr.fill( value, start, end)
 * 주로 치환하고 싶을때 사용한다 
 * 
 * includes 는 원하는것을 가지고 있다면 true 없다면 false를 반환해준다
 * 
 * 
 */
 const friends = [
    "nico@gmail.com",
    "lynn@naver.com",
    "dal@yahoo.com",
    "mark@hotmail.com",
    "flynn@korea.com",
    "jeong@gorea.com"
];

// const target = friends.find(friend => friend.includes("@korea.com"));
// console.log(target);
// 
// const targetWhere = friends.findIndex(friend => friend.includes("@gorea.com"));
// console.log(targetWhere);
// 

const check = () => friends.findIndex(friend => friend.includes("@korea"));

let target = check();
if(target !== 1){
    friends.fill("*".repeat(5),target);
}
// 강의에서 -1 를 반환했던 이유는 찾지 못했기 때문에 -1를 반환하는것이다
target = check();

console.log(friends.includes("jeong@gorea.com"));



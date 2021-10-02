/**
 * find => find는 말 그대로 배열이 있는지 찾아주는것을 말한다
 * findIndex => findIndex는 예를들면 틀린 철자를 가진것을 찾을때는 무엇인지보다 어디에 있는지가
 * 더 중요하기에 그럴때 사용하면 좋다
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

console.log(target);

const username = friends[target].split("@")[0];

const email = "korea.com";

friends[target] = `${username}@${email}`;
// 강의에서 -1 를 반환했던 이유는 찾지 못했기 때문에 -1를 반환하는것이다
target = check();

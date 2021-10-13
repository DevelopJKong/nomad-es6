//const friends= ["nico","lynn"];

//const newFriend = ["jeong"];


// const nico = {
//     username: "nico"
// };
// 
// console.log({...nico,password:123});


// const first = ["mon", "tue","wed"];
// 
// const weekend = ["sat","sun"];
// 
// const fullWeek = [...first,"thu","fri",...weekend];
// 
// console.log(fullWeek);

const lastName = prompt("Last Name");

// first way
// const user = {
//     username: "nico",
//     age:24,
//     lastName : lastName !== "" ? lastName : undefined
// }

// second way
const user = {
    username: "nico",
    age:24,
    ...(lastName !== "" && {lastName})

}

console.log(user);


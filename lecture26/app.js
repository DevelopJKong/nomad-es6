const friends = ["Nico","Lynn","ha","hu"];

//frist way
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     
// }

//second way
// const addHeart = (c,i,a) => console.log(c);
// friends.forEach(addHeart);


//thrid way
for (const friend of friends) {
    console.log(friend);
}

//foreach 와 비교 했을때 for of 의 장점은
//foreach는 배열이 끝날때까지 멈출수 없지만
//for of 같은 경우 조건문을 넣어서 막을수있는 장점이 있다

//예를들면 데이터베이스가 꽉찼을때
//에러 페이지로 넘어갈수있도록 제어할수있는 장점이 있다
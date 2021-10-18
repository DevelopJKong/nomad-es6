const infiniteArgs = (...kimchi) => console.log(kimchi);
// ... 이렇게 찍어진 세개의 점이
// rest sintax ? 스펠링이 맞는지 모르겠다
infiniteArgs("1",2,true,"lalala",[1,2,3,4]);

const bestFriendMaker = (firstOne, ...potato) => {
    console.log(`My best friend is ${firstOne}`);
    console.log(potato);
}

bestFriendMaker("nico","lynn","dall","japan guy");
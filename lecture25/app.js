const user = {
    name: "nico",
    age: 24,
    password: 12345
};

/*첫번째 방법*/
// user["password"] = null;
// console.log(user);

/*두번째 방법*/
//spread 파라미터를 사용해서 password를 제거를 해주었다
//spread 파라미터는 다 가지고 오는 파라미터 인데
//그것을 인지로 받았기 때문에 rest들만 return 해준다
// const killPassword = ({password, ...rest})=> rest;
// const cleanUser = killPassword(user);
// 
// console.log(cleanUser);


const setCountry = ({country = "KR", ...rest})=> ({country, ...rest});
console.log(setCountry(user));

const rename = ({NAME: name, ...rest}) => ({name,...rest});
console.log(rename(user));

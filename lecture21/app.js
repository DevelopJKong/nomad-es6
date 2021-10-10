let mon ="Sat";
let sat ="Mon";

//이렇게 사용해주면 치환이 된다
[mon, sat] = [sat,mon];

const days  =["mon","tue","wed","thr","fri"];

//이렇게 사용해주면 mon와 tue 그리고 wed를 생략할수있다
const [, , ,thr ,fri ] =days;
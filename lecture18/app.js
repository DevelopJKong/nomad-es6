const days =["Mon","Tue","Wed"];

// const mon = days[0];
// const tue = days[1];
// const wed = days[2];

//이렇게 기본값도 줄수있다
const [mon,tue,wed,thu="Thu"] =days;

console.log(mon,tue,wed);
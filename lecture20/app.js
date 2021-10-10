const follow = checkFollow();
const alert = checkAlert();


const settings = {
    notifications : {
        //이렇게 follow: follow 반복되는 부분을
        //follow, 이렇게 자바스크립트에서는 생략할수있다
        follow,
        alert
    }
};
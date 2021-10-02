const button = document.querySelector("button");


button.addEventListener("click",function(){
    console.log("i have been clicked");
}); 

// 여기서도 () => 를 사용하게 된다면 addYear() 해줘서 증감연산자가 먹히지 않는다
const jeong = {
    name:"jeong",
    age:29,
    addYear() {
        this.age++;
    }
};

console.log(jeong);
jeong.addYear();
jeong.addYear();
console.log(jeong);



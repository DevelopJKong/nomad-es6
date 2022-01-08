const userObj = {
    username: "nico",
    age:12,
    password:1234
}

const userFilter = {
    get: (target,prop,receiver) => {
        return prop === "password" ? `${"*".repeat(5)}` : target[prop];
    },
    set: () =>{
        console.log("Somebody is wrote something");
    },
    deleteProperty : () => {
        if(prop === "password") {
            return;
        } else {
            target[prop] = "DELETED";
        }
    }

};

const filteredUser = new Proxy(userObj,userFilter);

//proxy 세상에서의 verb 와 trap 에 대해서 정확하게 알기
//즉 조금은 간단하게 proxy는 object에 앞에 있는 filter정도 라고 생각하면 좋을거 같다

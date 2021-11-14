class User {
    constructor(name,lastName,email,password) {
        this.username = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
    sayHello(){
        console.log(`Hello, I'm ${this.username}`);
    }
    getProfile(){
        console.log(`${this.usernmame} ${this.email} ${this.password}`);
    }
    updatePassword(newPassword,currentPassword) {
        if(currentPassword === this.password ) {
            this.password = newPassword;
        } else {
            console.log("Can't change password");
        }
    }
}

class Admin extends User {
    constructor(superadmin){
        this.superadmin = superadmin;
    }

    deleteWebsite() {
        console.log("Deleting the whole website");
    }
}


const user = new User("jeongbin","park","tbaram10@naver.com","1234");
const sexyAdmin = new Admin("jeongbin","park","tbaram10@naver.com","1234");

console.log(user.password);
user.updatePassword("hello","1234");
sexyAdmin.deleteWebsite(sexyAdmin.email);


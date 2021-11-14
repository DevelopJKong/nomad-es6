class User {
  constructor({username,lastName,email,password}) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.username}`);
  }
  getProfile() {
    console.log(`${this.usernmame} ${this.email} ${this.password}`);
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password");
    }
  }
}

class Admin extends User {
  constructor({username, lastName,email,password,superAdmin,isActive}) {
    super(userOptions)
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }

  deleteWebsite() {
    console.log("Deleting the whole website");
  }
}
const admin =  new Admin({
    username: "jeongbin",
    lastName: "park",
    email: "tbaram10@naver.com",
    password: "1234",
    superAdmin : true,
    isActive:true,
  });





const user = new User("jeongbin", "park", "tbaram10@naver.com", "1234");
const sexyAdmin = new Admin({
  username: "jeongbin",
  lastName: "park",
  email: "tbaram10@naver.com",
  password: "1234",
});

console.log(user.password);
user.updatePassword("hello", "1234");
sexyAdmin.deleteWebsite(sexyAdmin.email);

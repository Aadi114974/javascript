function SetUsername(username){
    // comlex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    this.username = username
    this.email = email
    this.password = password
}

const raaz = new createUser("raaz","raaz@fb.com","12345")
console.log(raaz);

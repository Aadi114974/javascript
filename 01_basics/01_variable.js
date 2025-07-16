const accountId = 144553
let accountEmail = "adi@google.com"
var accountPassword = "12345"
accountCity ="Jaipur"
let accountState;

//  accountID = 2 // not allowed 


accountEmail = "adi@ad.com"
accountPassword = "22113344"
accountCity = "patna"

console.log(accountId);

/*
prefer not to use var 
bacause of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);



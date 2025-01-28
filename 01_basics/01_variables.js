const accountId = 13344
let accountEmail = "rahul@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"
let accountState;

//accountId = 2 //not allowed
/*
prefer not to use var
bcz of issue in block scope and functional scope
*/


accountEmail = "gudgeu@gmail.com"
accountPassword = "663642"
accountCity = "nagpur"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

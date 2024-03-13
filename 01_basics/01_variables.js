const accountId = 144553
let accountEmail = "rohanshaik234@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "shaikrohan234@gmail.com"
accountPassword = "21212121"
accountCity = "Rangareddy"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
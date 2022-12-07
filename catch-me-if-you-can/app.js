function sum(x, y){
    if(typeof x === Number && typeof y === Number){
    return x + y;
    } else throw "not a number"
    
  }
  
  try{
    sum("1","2")
  } catch(err) {
    console.log(err);
  }
 
// 2

  var user = {username: "sam", password: "123abc"};
  function login(username, password){
    if(username === user.username && password === user.password) {
        console.log("login successful!")
    } else throw "username or password is invalid"
  }

  try{
    login("sam", "123abc")
  } catch(err) {
    console.log(err);
  }
  
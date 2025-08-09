


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker(username, password){
  const userInfo = {
    username: username,
    password: password
    };

    // console.log(userInfo)

  let attemptCount = 0;

  return (passwordAttempt) => {

  attemptCount ++;

  // console.log(attemptCount)

  if(passwordAttempt === userInfo.password && attemptCount <= 3 ){
    return "Login successful";
   }
  else if(passwordAttempt !== userInfo.password && attemptCount <= 3){
    return `Attempt ${attemptCount}: Login failed`;
  }
  else if(attemptCount > 3){
    return "Account locked due to too many failed login attempts";
  }
  }
  };

// const login = createLoginTracker("mockUser3", "heynow");

// //console.log(login("wrong"));
// console.log(login("heynow"));
// // console.log(login("password123"));
// // console.log(login("wrong"));
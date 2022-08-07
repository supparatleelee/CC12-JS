const user = {
    email: 'cc@gmail.com',
    isActive: true
  };
  
  user.isActive = false;
  console.log(user); // *
  // user -> key values + properties
  // isActive: false
  user = {};
  console.log(user); // **
  // error because it's const
  // But if let, then, it will be an empty object.
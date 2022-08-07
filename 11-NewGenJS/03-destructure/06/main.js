function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
//Alejandro, purple
getUserData({ firstName: 'Melissa' }); // **
//Melissa, green
getUserData({}); // *** //?
// undefined, green

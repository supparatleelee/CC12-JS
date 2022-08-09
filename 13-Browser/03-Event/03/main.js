// Select a target element
const cancelbutton = document.getElementById('cancelbutton');
console.log(cancelbutton);

//cancel GET request to server
cancelbutton.removeEventListener('click', (event) => {
  event.preventDefault();
  alert('Cancle Request');
});

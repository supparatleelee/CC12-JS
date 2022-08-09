// CREATE btn 'Hide' & text in HTML
// SELECT btn button
// ADD addEventListener to the btn
// #1 handler
//  CHANGE btn.innerHTML from hide to show
//  SELECT the text
//  text.style.display = 'none'
// #2 handler
//  CHANGE btn.innerHTML from show to hide
//  SELECT the text
//  text.style.display = 'block'

const btn = document.getElementsByTagName('button')[0];

btn.addEventListener('click', () => {
  if (btn.innerHTML === 'Hide') {
    btn.innerHTML = 'Show';
    const text = document.getElementsByTagName('h1')[0];
    text.style.display = 'none';
  } else {
    btn.innerHTML = 'Hide';
    const text = document.getElementsByTagName('h1')[0];
    text.style.display = 'block';
  }
});

// btn.addEventListener('click', () => {
//   btn.innerHTML = 'Hide';
//   const text = document.getElementsByTagName('h1')[0];
//   text.style.display = 'block';
// }); // not like this, it became overwritten

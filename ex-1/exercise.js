// Use this function that is linked to the button to change the background

function set_background() {
  theBody = document.getElementsByTagName("body")[0];
  theParagraf = theBody.getElementsByTagName("p");
  theFirst = theParagraf[0];
  theFirst.style.background = 'yellow';
  theSecond = theParagraf[1];
  theSecond.style.background ='green';
  theThird = theParagraf[2];
  theThird.style.background = 'blue'; 
   
}

// example function call to display a dialog box
// let's comment out the code below, which is top-level code 
// that automatically runs when the script is loaded
// alert ("welcome, this isn't is a javascript popup alert");

function submitForm (name, hometown) {
  // search the DOM for a specific tag with id "guestlist"
  var guestlist = document.getElementById("guetstlist")
  var hometown =  document.getElementById("name")
  var hometown =  document.getElementById("hometown")
  guestlist.innerHTML = "<lil>" + name + "." + hometown + "</lil>"
  name.value = "";
  name.focus();
  return false;
}
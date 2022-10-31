// example function call to display a dialog box
// let's comment out the code below, which is top-level code 
// that automatically runs when the script is loaded
// alert ("welcome, this isn't is a javascript popup alert");

function submitForm(name, hometown) {
  // search the DOM for a specific tag with id "guestlist"
  var guestlist = document.getElementById("guestlist");
  var n =  document.getElementById("name");
  var h =  document.getElementById("hometown");
  guestlist.innerHTML += "<li>" + name.value + ". " + hometown.value + "</li>";
  n.value = "";
  h.value = "";
  n.focus();
  return false;
}

function checkStorage(){
var answerlist = document.getElementById("answerlist");
var currentanswers = localStorage.getItem("answerlist", answer.list);
answerlist.innterHTML = currentanswers;
}

function submitAnswer(answer) {
  // search the DOM for a specific tag with id "guestlist"
  var answerlist = document.getElementById("answerlist");
  localStorage.setItem("answerlist", answer.value);
  answerlist.innerHTML += answer.value + "<br />";
  answer.value = "";
  answer.focus();
  return false;
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO2RJpj77YPVuNLYmAYkUSVhl5QVcrXRg",
  authDomain: "ordinary-task.firebaseapp.com",
  projectId: "ordinary-task",
  storageBucket: "ordinary-task.appspot.com",
  messagingSenderId: "307613957035",
  appId: "1:307613957035:web:1599f809dfee9cbab8f0ee",
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);
var db = getFirestore(app);
console.log(app);
console.log(db);
var parent = document.getElementById("parent");

function inputvalue() {
  var inputvalue = document.getElementById("inputnode");

  if (inputvalue.value.length == "") {
    alert("Input Feild Are Empty");
    return;
  }
  var card = document.createElement("div");
  card.setAttribute("class", "card maincard");
  card.setAttribute("id", "cardparent");

  var cardheader = document.createElement("div");
  cardheader.setAttribute("class", "card-header");

  card.append(cardheader);
  var cardheading = document.createElement("h4");
  cardheading.setAttribute("class", "cardheader");
  cardheading.innerHTML = "Ordinary Text";
  cardheader.append(cardheading);
  var cardbody = document.createElement("div");
  cardbody.setAttribute("class", "card-body");
  card.append(cardbody);
  var task = document.createElement("p");
  task.innerHTML = inputvalue.value;
  task.setAttribute("class", "card-text");

  cardbody.append(task);

  var btnedit = document.createElement("button");
  btnedit.setAttribute("class", "btn btn-success");
  btnedit.setAttribute("style", "background-color: navy");
  btnedit.innerHTML = "Edit Task";
  btnedit.setAttribute("onclick", "editvalue(this)");
  cardbody.append(btnedit);

  var btndelete = document.createElement("button");
  btndelete.setAttribute("class", "btn btn-danger  btn");

  btndelete.setAttribute("style", "background-color: #8b0000");

  btndelete.innerHTML = "Delete Task";
  btndelete.setAttribute("onclick", "deletetask(this)");
  cardbody.append(btndelete);
  console.log(card);
  parent.append(card);
  inputvalue.value = "";
}

function editvalue(e) {
  var editnotes = prompt("Enter Your Ordinary Task");
  e.previousElementSibling.innerHTML = editnotes;
}

function deletetask(ele) {
  ele.parentNode.parentNode.remove();
}

function deleteall() {
  parent.remove();
}

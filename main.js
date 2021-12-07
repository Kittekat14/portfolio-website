import firebase from 'firebase';
import initializeApp from 'firebase/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpwfjpLDiRbVu9eLIAwo69UlsxOvxbMd4",
  authDomain: "portfolio-contact-form-aac9a.firebaseapp.com",
  projectId: "portfolio-contact-form-aac9a",
  storageBucket: "portfolio-contact-form-aac9a.appspot.com",
  messagingSenderId: "8013450151",
  appId: "1:8013450151:web:f5dfcbeb754a476c810482",
  measurementId: "G-K9H1XTL521",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// reference messages collection
let messagesRef = firebase.database().ref('messages');

// save messages to firebase:
function saveMessage(name, subject, phone, email, message){
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        subject: subject,
        phone: phone,
        email: email,
        message: message
    });
}


// Listen for form submit:
document.getElementById("contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  // get values
  let name = getInputValues("name");
  let subject = getInputValues("subject");
  let phone = getInputValues("phone");
  let email = getInputValues("email");
  let message = getInputValues("message");
  // save message
  saveMessage(name, subject, phone, email, message);
}

// function to get form values:
function getInputValues(id) {
  return document.getElementById(id).value;
}

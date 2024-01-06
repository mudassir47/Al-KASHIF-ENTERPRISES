import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, get, update ,push ,set} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDSD3OnYEXD01XpCBaEKP4ierHTnhNKQjk",
    authDomain: "televeri-505b5.firebaseapp.com",
    databaseURL: "https://televeri-505b5-default-rtdb.firebaseio.com",
    projectId: "televeri-505b5",
    storageBucket: "televeri-505b5.appspot.com",
    messagingSenderId: "607800376555",
    appId: "1:607800376555:web:3d46ad3b9ea9709b6b92ae",
    measurementId: "G-BMJ37SK7CJ"
  };
 
    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    
    const mkaero = document.getElementById("mkaero");

mkaero.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputAddress1 = document.getElementById("inputAddress1").value;
    const inputAddress2 = document.getElementById("inputAddress2").value;
    const inputdateOne = document.getElementById("inputdateOne").value;
    const inputDateTwo = document.getElementById("inputDateTwo").value;
    const inputPersonOne = document.getElementById("inputPersonOne").value;
    const textRef = ref(database, "airo");
    const newTextRef = push(textRef);
    set(newTextRef, {
        inputAddress1: inputAddress1,
        inputAddress2: inputAddress2,
        inputdateOne: inputdateOne,
        inputDateTwo: inputDateTwo,
        inputPersonOne: inputPersonOne,
    })
        .then(() => {
            console.log("Text data uploaded successfully!");
        })
        .catch((error) => {
            console.error("Error uploading text data: ", error);
        });

    // Clear the input fields after submission
    document.getElementById("inputAddress1").value = "";
    document.getElementById("inputAddress2").value = "";
    document.getElementById("inputdateOne").value = "";
    document.getElementById("inputDateTwo").value = "";
    document.getElementById("inputPersonOne").value = "";
});
 
  
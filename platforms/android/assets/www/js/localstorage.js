
document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
document.getElementById("removeProjectFromLocalStorage").addEventListener
   ("click", removeProjectFromLocalStorage);
document.getElementById("getLocalStorageByKey").addEventListener
   ("click", getLocalStorageByKey);

//getting the localstorage to save data in local storage
var localStorage = window.localStorage;	


//usign localstorage to save data
function setLocalStorage() {
   localStorage.setItem("Name", "John");
   localStorage.setItem("Job", "Developer");
   localStorage.setItem("Project", "Cordova Project");
}


function showLocalStorage() {
   console.log(localStorage.getItem("Name"));
   console.log(localStorage.getItem("Job"));
   console.log(localStorage.getItem("Project"));
}

//remove by key
function removeProjectFromLocalStorage() {
   localStorage.removeItem("Project");
}

//get by index
function getLocalStorageByKey() {
   console.log(localStorage.key(0));
}
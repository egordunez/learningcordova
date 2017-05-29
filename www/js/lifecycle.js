const DEVICE_READY_EVENT = "deviceReady";
const BACK_BUTTON_PRESS_EVENT = "backbutton";




document.addEventListener(DEVICE_READY_EVENT, onDeviceReady, false);
function onDeviceReady() {
   alert('The load of all component has finished');
}

document.addEventListener(BACK_BUTTON_PRESS_EVENT, onBackButtonPressed, false);
function onBackButtonPressed() {
   alert('The back button was pressed');
}
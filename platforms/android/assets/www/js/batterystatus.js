//pointer to info from battery status
var infoGlobal = null;

document.addEventListener("deviceready",function(){
    document.getElementById("getBatteryStatus").addEventListener("click", showBatteryStatus);
    window.addEventListener("batterystatus", onBatteryStatus, false);   
},false);


function showBatteryStatus() {
    alert("BATTERY STATUS:  Level: " + infoGlobal.level + " isPlugged: " + infoGlobal.isPlugged);
}


//save de info to global
function onBatteryStatus(info) {
    infoGlobal = info;
}


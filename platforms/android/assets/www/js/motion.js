document.getElementById("getAcceleration").addEventListener("click", getAcceleration);
document.getElementById("watchAcceleration").addEventListener("click", watchAcceleration);

function getAcceleration(){
   navigator.accelerometer.getCurrentAcceleration(accelerometerSuccess, accelerometerError);

   function accelerometerSuccess(acceleration) {
      alert('Acceleration X: ' + acceleration.x + '\n' +
         'Acceleration Y: ' + acceleration.y + '\n' +
         'Acceleration Z: ' + acceleration.z + '\n' +
         'Timestamp: '      + acceleration.timestamp + '\n');
   };

   function accelerometerError() {
      alert('onError!');
   };
	
}
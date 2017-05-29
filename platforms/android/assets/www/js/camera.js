document.addEventListener("deviceready",function(){
    document.getElementById("cameraTakePicture").addEventListener
   ("click", cameraTakePicture);
},false);


function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, { 
      quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.CAMERA,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 200,
        targetHeight: 200,
        saveToPhotoAlbum: true
    });

   function onSuccess(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
   }

   function onFail(message) {
      alert('Failed because: ' + message);
   }
}
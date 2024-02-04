//https://teachablemachine.withgoogle.com/models/VG_4m5Q-l/model.json

Webcam.set({
  crop_width:350,
  crop_height:300,
  image_format:"png",
  png_quality:100
})

Webcam.attach("#camera");

//data_uri : this is a variable that stores the src of the captured selfie

function capture(){
  Webcam.snap(function(data_uri){
    document.getElementById("camera").innerHTML = '<img id="selfie" src="'+ data_uri + '">'
   });
}

model=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/L-oi6Va5o/model.json", modelLoaded)

function modelLoaded(){
console.log("Teachable machine is linked")
}

function predict(){
  img = document.getElementById('selfie')
  model.classify(img, showResult)
}

function showResult(error, result){
if(error){
  console.log(error)
}
else{
  console.log(result)
  document.getElementById("object").innerHTML = "Object: " + result[0].label
  document.getElementById("accuracy").innerHTML = "Accuracy: " + result[0].confidence
}
}
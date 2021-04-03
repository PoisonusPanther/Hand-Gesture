Webcam.set({
    width: 250,
    height: 250,
    image_format: "png",
    png_quality: 90
});
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src='+data_uri+'>';
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/hsLc6LJhR/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model loaded!");
}

function mySpeechSynthesis(){
    var synth = window.speechSynthesis;
    speak_datae = "The Gesture is";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, identify);
}
function identify(error, result){
    if (error){
        console.error(error);
    }
    else{
        console.log(classifier);
        prediction = result[0].label;
        document.getElementById("gname").innerHTML = prediction;
    }

    if (prediction == "Amazing"){
        document.getElementById("gesture").innerHTML = "👌";
    }
    if (prediction == "Best"){
        document.getElementById("gesture").innerHTML = "👍";
    }
    if (prediction == "Victory"){
        document.getElementById("gesture").innerHTML = "✌";
    }       


}




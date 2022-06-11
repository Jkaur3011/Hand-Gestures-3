prediction_1 = "";
prediction_2 = "";

Webcam.set({ //setting properties of the webcam
    width: 350,
    height:300,
    image_format:'jpg',
    jpg_quality:90
});

camera = document.getElementById("cam"); //adding our camera to a var 'camera'

Webcam.attach("#cam"); //attached camera

function Take_S(){ //function defined for taking snapshot
    Webcam.snap(function(data){ 
        document.getElementById("result").innerHTML = '<img id="image_result" src="'+data+'"/>' //reslt displayed in the respective id
    })
}
console.log("ml5 version:", ml5.version); //ml5version check

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RulukfPEl/model.json", Modelloaded); //link added for detecting hand gestures

function Modelloaded(){
    console.log("The Model has been loaded successfully!");
}

function Predict_G(){
    img = document.getElementById("image_result");
    classifier.classify(img, got_results);
}

function got_results(error, result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result)

        document.getElementById("result_hgn1").innerHTML = result[0].label;
        document.getElementById("result_hgn2").innerHTML = result[1].label;

        prediction_1 = result[0].label;
        prediction_2 = result[1].label;
        Speak_Gesture();

        if(result[0].label == "Thumbs Up"){
            document.getElementById("result_hg1").innerHTML = "&#128077";
        }
        if(result[0].label == "Thumbs Down"){
            document.getElementById("result_hg1").innerHTML = "&#128078";
        }
        if(result[0].label == "Victory"){
            document.getElementById("result_hg1").innerHTML = "&#9996";
        }
        if(result[0].label == "Be Strong"){
            document.getElementById("result_hg1").innerHTML = "&#9994";
        }
        if(result[0].label == "Rock"){
            document.getElementById("result_hg1").innerHTML = "&#129311";
        }
        if(result[0].label == "Good Luck"){
            document.getElementById("result_hg1").innerHTML = "&#129310";
        }
        if(result[0].label == "OK"){
            document.getElementById("result_hg1").innerHTML = "&#128076";
        }
        if(result[0].label == "Call me"){
            document.getElementById("result_hg1").innerHTML = "&#129305";
        }
        if(result[0].label == "Hi Hive"){
            document.getElementById("result_hg1").innerHTML = "&#128400";
        }
        if(result[1].label == "Thumbs Up"){
            document.getElementById("result_hg2").innerHTML = "&#128077";
        }
        if(result[1].label == "Thumbs Down"){
            document.getElementById("result_hg2").innerHTML = "&#128078";
        }
        if(result[1].label == "Victory"){
            document.getElementById("result_hg2").innerHTML = "&#9996";
        }
        if(result[1].label == "Be Strong"){
            document.getElementById("result_hg2").innerHTML = "&#9994";
        }
        if(result[1].label == "Rock"){
            document.getElementById("result_hg2").innerHTML = "&#129311";
        }
        if(result[1].label == "Good Luck"){
            document.getElementById("result_hg2").innerHTML = "&#129310";
        }
        if(result[1].label == "OK"){
            document.getElementById("result_hg2").innerHTML = "&#128076";
        }
        if(result[1].label == "Call me"){
            document.getElementById("result_hg2").innerHTML = "&#129305";
        }
        if(result[1].label == "Hi Hive"){
            document.getElementById("result_hg2").innerHTML = "&#128400";
        }
    }
}

function Speak_Gesture(){
    var speak_g = window.SpeechSynthesis;
    var speak_1 = "The first prediction is "+prediction_1;
    var speak_2 = "The second prediction is "+prediction_2;
    var sp = new SpeechSynthesisUtterance(speak_1+speak_2);
    speak_g.speak(sp);
}
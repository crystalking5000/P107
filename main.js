function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bUerfs_pf/", modelReady);
}

function modelReady(){
    classifier.classify(gotResult);
}

function gotResult(error, results){
    console.log("Got Result")
}
function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jPetZiS1D/model.json', modelReady())
}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_no_r = Math.floor(Math.random() * 255) + 1;
        random_no_g = Math.floor(Math.random() * 255) + 1;
        random_no_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - ' +
            results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' +
            (results[0].confidence * 100).toFixed(1) + "%";
        document.getElementById("result_label").style.color = "rgb(" +
            random_no_r + "," + random_no_g + "," + random_no_b + ")";

        document.getElementById("result_confidence").style.color = "rgb(" +
            random_no_r + "," + random_no_g + "," + random_no_b + ")";

        img = document.getElementById('cat');
        img1 = document.getElementById('dog');

        if (results[0].label == "Bark") {
            img.src = 'Dog1.jpg';
            img1.src = 'Cat.jpg';
        } else {
            img.src = 'Dog.jpg';
            img1.src = 'Cat1.jpg';
        }
    }
}
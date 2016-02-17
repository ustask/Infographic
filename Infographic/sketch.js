var baconWords = baconIpsum.split(' ');
for (var i = 0; i < baconWords.length; i++) {
  baconWords[i] = baconWords[i].length;
}

function setup() {
  createCanvas(600,600)

  for (var i = 0; i < baconWords.length; i++){
    var rectHeight = baconWords[i] * 60;
    var rectWidth = (width / baconWords.length);
    console.log(rectWidth)

    fill('#f338de');
    noStroke()
    rect(i * 10, width - rectHeight, rectWidth, rectHeight);
  }
}

function draw() {

}

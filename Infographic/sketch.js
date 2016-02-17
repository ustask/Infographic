var baconWords = baconIpsum.split(' ');
for (var i = 0; i < baconWords.length; i++) {
  baconWords[i] = baconWords[i].length;
}

function setup() {
  createCanvas(600,600)

  for (var i = 0; i < baconWords.length; i++){
    var rectHeight = baconWords[i] * 60;
    var rectWidth = (width / baconWords.length);

    fill('hotpink');
    noStroke()
    //rect(i * rectWidth,width - rectHeight, rectWidth, rectHeight);
  }
}

function draw() {

}

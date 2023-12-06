function setup() {
    createCanvas(windowWidth, windowHeight);
  }

  function draw() {
    background(255);
    drawingText();
  }

  function drawingText() {
    let textdraw = "皮";
    let textsize = 52;
    let opacity = 255;


    let X = width / 2 - textWidth(textdraw) / 2;
    let Y = height / 2 + textsize / 3;

    fill(0, opacity);
    textSize(textsize);

    for (let i = 0; i < 5; i++) {
      let oX = random(-5, 5);
      let oY = random(-5, 5);
      text(textdraw, X + oX, Y + oY);
    }
  }

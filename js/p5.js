function setup() {
    createCanvas(windowWidth, windowHeight)
    textAlign(CENTER, CENTER)
    colorMode(HSB, 360, 100, 100)
    angleMode(DEGREES)
}

function draw() {
    x = frameCount % 360
    y = frameCount

    translate(windowWidth / 2, windowHeight / 2)

    background(x, 25, 25)

    rotate(y * 2)

    fill(x, 100, 100)
    textSize(36)
    text("salve, bora um duo ai meu dog?", 0, 0)
}

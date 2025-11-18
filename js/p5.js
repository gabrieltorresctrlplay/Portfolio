let particles = []
const numberOfParticles = 100

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0, 0)
    canvas.style("z-index", "-1")

    for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle())
    }
}

function draw() {
    background(18, 18, 18)

    for (let i = 0; i < particles.length; i++) {
        particles[i].move()
        particles[i].display()
        particles[i].checkParticles(particles.slice(i))
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

class Particle {
    constructor() {
        this.x = random(width)
        this.y = random(height)
        this.velX = random(-0.5, 0.5)
        this.velY = random(-0.5, 0.5)
        this.size = 3
    }

    move() {
        this.x += this.velX
        this.y += this.velY

        if (this.x < 0 || this.x > width) this.velX *= -1
        if (this.y < 0 || this.y > height) this.velY *= -1

        let d = dist(this.x, this.y, mouseX, mouseY)
        if (d < 100) {
            this.x += (this.x - mouseX) * 0.01
            this.y += (this.y - mouseY) * 0.01
        }
    }

    display() {
        noStroke()
        fill(0, 229, 255, 150)
        ellipse(this.x, this.y, this.size)
    }

    checkParticles(particles) {
        particles.forEach((particle) => {
            const d = dist(this.x, this.y, particle.x, particle.y)
            if (d < 120) {
                const alpha = map(d, 0, 120, 100, 0)
                stroke(0, 229, 255, alpha)
                strokeWeight(1)
                line(this.x, this.y, particle.x, particle.y)
            }
        })
    }
}

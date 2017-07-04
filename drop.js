function Drop () {
    this.x = random(width);
    this.y = random(-500, -50);
    this.len = 20;
    this.speed = 10;

    this.fall = function() {
        this.y = this.y + this.speed;

        if (this.y > height) {
            this.y = -20;
        }
    }

    this.show = function() {
        strokeWeight(2);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.len);
    }
}

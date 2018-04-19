function setup() {
    let bird = document.getElementById("bird");
    let above = document.getElementById("above");
    let below = document.getElementById("below");

    document.addEventListener("keydown", girFartTilFuggel);

    let ypos = 150;
    let fart = 0;

    function girFartTilFuggel(event) {
        fart = fart + 10;
    }

    setInterval(flyttPaaTing, 40);

    function flyttPaaTing() {
        ypos = ypos - fart;
        fart = fart - 0.3;
        bird.style.top = ypos + "px";
    }

}
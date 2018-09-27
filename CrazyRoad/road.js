function setup() {

    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    var car = document.getElementById("car");
    var road = document.getElementById("road");

    var carLeft = 170;

    function move(e) {

        if (e.keyCode == RIGHT_KEY) {
            console.log("left", carLeft)
            carLeft += 136.8;
            car.style.left = carLeft + 'px';
            if (carLeft >= 500) {
                carLeft -= 136.8;
            }
            console.log("left", carLeft)
        }
        if (e.keyCode == LEFT_KEY) {
            console.log("right", carLeft)

            carLeft -= 136.8;
            car.style.left = carLeft + 'px';
            if (carLeft <= 50) {
                carLeft += 136.8;
            }

            console.log("right", carLeft)

        }
    }

    document.onkeydown = move;
}

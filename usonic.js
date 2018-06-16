let usonic = require('mmm-usonic');
let sensor;

usonic.init(function (error) {
                if (error) {
                    console.log(error);
                } else {
                    sensor = usonic.createSensor(24, 23, 750);
                    setInterval(getDistance, 1000);
                }
            }
);


function getDistance() {
    if (sensor != undefined) {
        console.log(sensor());
    }
    else {
        console.log("sensor undefined!");
    }
}
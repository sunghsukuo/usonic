let usonic = require('mmm-usonic');

usonic.init(function (error) {
                if (error) {
                    console.log(error);
                } else {
                    var sensor = usonic.createSensor(24, 23, 750);
                    setInterval(getDistance, 1000);
                }
            }
);


function getDistance() {
    return sensor();
}
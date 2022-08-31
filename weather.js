var weatherApp = angular.module("weatherApp",[]);
weatherApp.controller ("WeatherCtrl", function ($scope, $http) {
    $scope.CurrentDate = new Date();
    $scope.searchCity = function (cityName) {
        $http.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f1ecb8a541642ab18b4f66f8cc9910a4&units=metric`)
        .error(function (data, status) {
            console.log(data);
        })
        .success(function (data) {
            if (data) {
                $scope.name = data.name;
                $scope.country = data.sys.country;
                $scope.current = data.main.temp;
                $scope.temp_min = data.main.temp_min;
                $scope.temp_max = data.main.temp_max;
                $scope.wind_speed = data.wind.speed;
                $scope.clouds = data.clouds ? data.clouds.all : undefined;
                let baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
                //baseUrl = 'https://w7.pngwing.com/pngs/409/175/';
                if ($scope.clouds < 20) {
                    $scope.img_url = baseUrl + 'sunny.png';
                } else if ($scope.clouds < 90) {
                    //$scope.img_url = baseUrl + 'png-transparent-sky-plc-foggy-night-sky-miscellaneous-sky-sky-plc-thumbnail.png';
                    $scope.img_url = baseUrl + 'partly_cloudy.png';
                } else {
                    $scope.img_url = baseUrl + 'cloudy.png';
                }
            }
        })
    };
    $scope.searchCity('Hanoi');
});



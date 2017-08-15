angular.
module('calculator').
filter('calcDisplay', function () {
    return function (num) {

        if (typeof num == "string")
            return num;

        var integerPart = Math.floor(num);
        var maxLength = 11 - integerPart.toString().length;

        var mul = Math.pow(10, maxLength);

        var result = Math.round(num * mul) / mul;

        return result;
    };
});

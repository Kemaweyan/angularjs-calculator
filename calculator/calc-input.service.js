'use strict';

angular.
  module('calculator').
  service('calcInput', function () {
    var self = this;
    var needReset = false;
    var dotClicked = false;
    var value = "0";

    self.addNumber = function (num) {
        if (needReset)
            self.reset();

        if (dotClicked && value.indexOf(".") < 0)
            value += ".";

        if (value == "0")
            value = "";

        value += num.toString();
    };

    self.addDot = function () {
        if (needReset)
            self.reset();
        dotClicked = true;
    };

    self.reset = function () {
        needReset = false;
        dotClicked = false;
        value = "0";
    };

    self.getNumValue = function () {
        needReset = true;
        if (dotClicked)
            return parseFloat(value);
        else
            return parseInt(value);
    };

    self.getStrValue = function () {
        return value;
    };

    self.setValue = function (num) {
        value = num.toString();
        dotClicked = (Math.floor(num) != num);
    };
});

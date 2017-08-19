'use strict';

angular.
  module('calculator').
  service('calcProcessor', function () {
    var self = this;
    var buffer = null;
    var operation = null;

    self.reset = function () {
        buffer = null;
        operation = null;
    };

    self.setOperation = function (op, num, old) {
        try {
            return old ? num : self.calculate(num);
        } finally {
            operation = op;
        }
    };

    self.calculate = function (num) {
        var result = num;

        if (buffer !== null) {
            switch (operation) {
                case 'sum':
                    result = buffer + num;
                    break;
                case 'sub':
                    result = buffer - num;
                    break;
                case 'mul':
                    result = buffer * num;
                    break;
                case 'div':
                    result = buffer / num;
                    break;
            }
        }

        buffer = result;

        return result;
    };
});

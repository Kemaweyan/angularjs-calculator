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
            return old ? num : self.calculate(num, false);
        } finally {
            operation = op;
        }
    };

    self.calculate = function (num, old) {
        var result = num;

        if (buffer !== null) {
            switch (operation) {
                case 'sum':
                    result = buffer + num;
                    break;
                case 'sub':
                    result = (old ? 0 : buffer) - num;
                    break;
                case 'mul':
                    result = buffer * num;
                    break;
                case 'div':
                    result = (old ? 1 : buffer) / num;
                    break;
            }
        }

        buffer = result;
        operation = null;

        return result;
    };
});

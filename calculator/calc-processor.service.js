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

    self.calculate = function (op, num) {
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
        operation = op;

        return result;
    };
});

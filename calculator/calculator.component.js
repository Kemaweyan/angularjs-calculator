angular.
module("calculator").
component("calculator", {
    templateUrl: "calculator/calculator.template.html",
    controller: function (calcInput, calcProcessor) {
        var self = this;
        self.displayData = 0;

        self.number = function (num) {
            calcInput.addNumber(num);

            self.displayData = calcInput.getStrValue();
        };

        self.dot = function () {
            calcInput.addDot();
        };

        self.reset = function () {
            self.displayData = 0;
            calcInput.reset();
            calcProcessor.reset();
        };

        self.operation = function (op) {
            var num = calcInput.getNumValue();
            result = calcProcessor.calculate(op, num);
            calcInput.setValue(result);
            self.displayData = result;
        };
    }
});

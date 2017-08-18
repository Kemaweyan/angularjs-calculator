'use strict';

angular.
  module("calculator").
  component("calculator", {
    templateUrl: "calculator/calculator.template.html",
    controller: function (calcInput, calcProcessor) {
        var self = this;
        self.displayData = "0";

        self.number = function (num) {
            calcInput.addNumber(num);
            self.displayData = calcInput.getStrValue();
        };

        self.dot = function () {
            calcInput.addDot();
            self.displayData = calcInput.getStrValue();
        };

        self.reset = function () {
            self.displayData = "0";
            calcInput.reset();
            calcProcessor.reset();
        };

        self.operation = function (op) {
            var old = calcInput.oldInput();
            var num = calcInput.getNumValue();
            var result = calcProcessor.calculate(op, num, old);
            calcInput.setValue(result);
            self.displayData = result;
        };
    }
});

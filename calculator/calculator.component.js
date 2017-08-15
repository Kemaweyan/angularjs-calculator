angular.
module("calculator").
component("calculator", {
    templateUrl: "calculator/calculator.template.html",
    controller: function () {
        var self = this;
        var inputBuffer = 0;
        var memoryData = 0;
        var newInput = true;
        var dotClicked = false;
        var dotDivider = 10;
        var operation = null;

        self.displayData = 0;

        function clearInput() {
            newInput = true;
            dotDivider = 10;
            dotClicked = false;
            operation = null;
        }

        function showResult(num) {
            var integerPart = Math.floor(num);
            var fractionalPart = num - integerPart;

            if (!fractionalPart)
                return integerPart;

            var integerLength = integerPart.toString().length;
            var fractionalLength = 11 - integerLength;

            if (integerLength > 11)
                return "Too large";

            var mul = Math.pow(10, fractionalLength);
            var result = integerPart + Math.round(fractionalPart * mul) / mul;

            return result.toString().substr(0, 12);
        }

        function getResult() {
            if (operation !== null) {
                switch (operation) {
                    case 'plus':
                        inputBuffer = memoryData + inputBuffer;
                        break;
                    case 'minus':
                        inputBuffer = memoryData - inputBuffer;
                        break;
                    case 'multiple':
                        inputBuffer = memoryData * inputBuffer;
                        break;
                    case 'divide':
                        inputBuffer = memoryData / inputBuffer;
                        break;
                }

                self.displayData = showResult(inputBuffer);
            }

            clearInput();
        }

        self.number = function (num) {
            if (newInput) {
                newInput = false;
                inputBuffer = 0;
            }

            if (dotClicked) {
                inputBuffer += num / dotDivider;
                dotDivider *= 10;
            } else {
                inputBuffer = inputBuffer * 10 + num;
            }

            var correctedValue = Math.round(inputBuffer * dotDivider) / dotDivider;

            self.displayData = showResult(correctedValue);
        };

        self.dot = function () {
            dotClicked = true;
        };

        self.reset = function () {
            self.displayData = 0;
            inputBuffer = 0;
            memoryBuffer = 0;
            clearInput();
        };

        self.setOperation = function (op) {
            getResult();
            memoryData = inputBuffer;
            operation = op;
        };

        self.getResult = getResult;
    }
});

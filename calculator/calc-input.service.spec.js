'use strict';

describe('calcInput', function () {

    beforeEach(module('calculator'));

    var calcInput;

    beforeEach(inject(function (_calcInput_) {
        calcInput = _calcInput_;
    }));

    it('initially the `getStrValue` method should return "0" and `getNumValue` should return 0', function () {
        expect(calcInput.getStrValue()).toBe("0");
        expect(calcInput.getNumValue()).toBe(0);
    });

    it('the `getStrValue` should return "1" and `getNumValue` should return 1 after adding 1', function () {
        calcInput.addNumber(1);
        expect(calcInput.getStrValue()).toBe("1");
        expect(calcInput.getNumValue()).toBe(1);
    });

    it('the `getStrValue` should return "12" and `getNumValue` should return 12 after adding 1 and 2', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        expect(calcInput.getStrValue()).toBe("12");
        expect(calcInput.getNumValue()).toBe(12);
    });

    it('the `getStrValue` should return "12" and `getNumValue` should return 12 after adding 1, 2 and a dot', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        calcInput.addDot();
        expect(calcInput.getStrValue()).toBe("12");
        expect(calcInput.getNumValue()).toBe(12);
    });

    it('the `getStrValue` should return "12.3" and `getNumValue` should return 12.3 after adding 1, 2, a dot and 3', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        calcInput.addDot();
        calcInput.addNumber(3);
        expect(calcInput.getStrValue()).toBe("12.3");
        expect(calcInput.getNumValue()).toBe(12.3);
    });

    it('the `getStrValue` should return "12.3" and `getNumValue` should return 12.3 after adding 1, 2, a dot, 3 and 4', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        calcInput.addDot();
        calcInput.addNumber(3);
        calcInput.addNumber(4);
        expect(calcInput.getStrValue()).toBe("12.34");
        expect(calcInput.getNumValue()).toBe(12.34);
    });

    it('the `getStrValue` should return "0" and `getNumValue` should return 0 after adding some numbers and reset', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        calcInput.addDot();
        calcInput.addNumber(3);
        calcInput.addNumber(4);
        calcInput.reset();
        expect(calcInput.getStrValue()).toBe("0");
        expect(calcInput.getNumValue()).toBe(0);
    });

    it('the `getStrValue` should return "1" and `getNumValue` should return 1 after adding some numbers, reset and adding 1', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        calcInput.addDot();
        calcInput.addNumber(3);
        calcInput.addNumber(4);
        calcInput.reset();
        calcInput.addNumber(1);
        expect(calcInput.getStrValue()).toBe("1");
        expect(calcInput.getNumValue()).toBe(1);
    });

    it('the `getStrValue` should return "1" and `getNumValue` should return 1 after adding some numbers, reset, adding 1 and a dot', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        calcInput.addDot();
        calcInput.addNumber(3);
        calcInput.addNumber(4);
        calcInput.reset();
        calcInput.addNumber(1);
        calcInput.addDot();
        expect(calcInput.getStrValue()).toBe("1");
        expect(calcInput.getNumValue()).toBe(1);
    });

    it('the `getStrValue` should return "1.2" and `getNumValue` should return 1.2 after adding some numbers, reset, adding 1, a dot and 2', function () {
        calcInput.addNumber(1);
        calcInput.addNumber(2);
        calcInput.addDot();
        calcInput.addNumber(3);
        calcInput.addNumber(4);
        calcInput.reset();
        calcInput.addNumber(1);
        calcInput.addDot();
        calcInput.addNumber(2);
        expect(calcInput.getStrValue()).toBe("1.2");
        expect(calcInput.getNumValue()).toBe(1.2);
    });

    it('the `getStrValue` should return "0" and `getNumValue` should return 0 after adding a dot', function () {
        calcInput.addDot();
        expect(calcInput.getStrValue()).toBe("0");
        expect(calcInput.getNumValue()).toBe(0);
    });

    it('the `getStrValue` should return "0.1" and `getNumValue` should return 0.1 after adding a dot and 1', function () {
        calcInput.addDot();
        calcInput.addNumber(1);
        expect(calcInput.getStrValue()).toBe("0.1");
        expect(calcInput.getNumValue()).toBe(0.1);
    });

    it('should start a new input cycle after calling the `getNumValue` method', function () {
        calcInput.addNumber(1);
        calcInput.addDot();
        calcInput.addNumber(2);
        expect(calcInput.getStrValue()).toBe("1.2");
        expect(calcInput.getNumValue()).toBe(1.2);
        calcInput.addNumber(3);
        calcInput.addDot();
        calcInput.addNumber(4);
        expect(calcInput.getStrValue()).toBe("3.4");
        expect(calcInput.getNumValue()).toBe(3.4);
    });

    it('the `getStrValue` should return "1234.5678" and `getNumValue` should return 1234.5678 after settings 1234.5678 by the `setValue` method', function () {
        calcInput.setValue(1234.5678);
        expect(calcInput.getStrValue()).toBe("1234.5678");
        expect(calcInput.getNumValue()).toBe(1234.5678);
    });
});

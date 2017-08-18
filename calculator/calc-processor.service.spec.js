'use strict';

describe('calcProcessor', function () {

    beforeEach(module('calculator'));

    var calcProcessor;

    beforeEach(inject(function (_calcProcessor_) {
        calcProcessor = _calcProcessor_;
    }));

    it('should return a sum of two numbers', function () {
        calcProcessor.calculate('sum', 1.2);
        var result = calcProcessor.calculate(null, 3.4);
        expect(result).toBeCloseTo(4.6);
    });

    it('should return a sub of two numbers', function () {
        calcProcessor.calculate('sub', 1.2);
        var result = calcProcessor.calculate(null, 3.4);
        expect(result).toBeCloseTo(-2.2);
    });

    it('should return a mul of two numbers', function () {
        calcProcessor.calculate('mul', 1.2);
        var result = calcProcessor.calculate(null, 3.4);
        expect(result).toBeCloseTo(4.08);
    });

    it('should return a div of two numbers', function () {
        calcProcessor.calculate('div', 1.2);
        var result = calcProcessor.calculate(null, 3.4);
        expect(result).toBeCloseTo(0.352941176);
    });

    it('should return a sum of two numbers and a sum of three numbers', function () {
        calcProcessor.calculate('sum', 1.2);
        var result = calcProcessor.calculate('sum', 3.4);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(null, 5.6);
        expect(result).toBeCloseTo(10.2);
    });

    it('should return a sum of two numbers and a sub with third number', function () {
        calcProcessor.calculate('sum', 1.2);
        var result = calcProcessor.calculate('sub', 3.4);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(null, 5.6);
        expect(result).toBeCloseTo(-1);
    });

    it('should return a sum of two numbers and a mul with third number', function () {
        calcProcessor.calculate('sum', 1.2);
        var result = calcProcessor.calculate('mul', 3.4);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(null, 5.6);
        expect(result).toBeCloseTo(25.76);
    });

    it('should return a sum of two numbers and a div with third number', function () {
        calcProcessor.calculate('sum', 1.2);
        var result = calcProcessor.calculate('div', 3.4);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(null, 5.6);
        expect(result).toBeCloseTo(0.821428571);
    });

    it('should return a sum of two numbers and ignore previous input', function () {
        calcProcessor.calculate('div', 1.2);
        calcProcessor.reset();
        calcProcessor.calculate('sum', 3.4);
        var result = calcProcessor.calculate(null, 5.6);
        expect(result).toBeCloseTo(9);
    });
});

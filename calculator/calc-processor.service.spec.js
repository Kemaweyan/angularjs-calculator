'use strict';

describe('calcProcessor', function () {

    beforeEach(module('calculator'));

    var calcProcessor;

    beforeEach(inject(function (_calcProcessor_) {
        calcProcessor = _calcProcessor_;
    }));

    it('should return a sum of two numbers', function () {
        calcProcessor.setOperation('sum', 1.2, false);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(4.6);
    });

    it('should return a sub of two numbers', function () {
        calcProcessor.setOperation('sub', 1.2, false);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(-2.2);
    });

    it('should return a mul of two numbers', function () {
        calcProcessor.setOperation('mul', 1.2, false);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(4.08);
    });

    it('should return a div of two numbers', function () {
        calcProcessor.setOperation('div', 1.2, false);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(0.352941176);
    });

    it('should return a sum of two numbers and a sum of three numbers', function () {
        calcProcessor.setOperation('sum', 1.2, false);
        var result = calcProcessor.setOperation('sum', 3.4, false);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(5.6);
        expect(result).toBeCloseTo(10.2);
    });

    it('should return a sum of two numbers and a sub with third number', function () {
        calcProcessor.setOperation('sum', 1.2, false);
        var result = calcProcessor.setOperation('sub', 3.4, false);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(5.6);
        expect(result).toBeCloseTo(-1);
    });

    it('should return a sum of two numbers and a mul with third number', function () {
        calcProcessor.setOperation('sum', 1.2, false);
        var result = calcProcessor.setOperation('mul', 3.4, false);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(5.6);
        expect(result).toBeCloseTo(25.76);
    });

    it('should return a sum of two numbers and a div with third number', function () {
        calcProcessor.setOperation('sum', 1.2, false);
        var result = calcProcessor.setOperation('div', 3.4, false);
        expect(result).toBeCloseTo(4.6);
        result = calcProcessor.calculate(5.6);
        expect(result).toBeCloseTo(0.821428571);
    });

    it('should return a sum of two numbers and ignore previous input', function () {
        calcProcessor.setOperation('div', 1.2, false);
        calcProcessor.reset();
        calcProcessor.setOperation('sum', 3.4, false);
        var result = calcProcessor.calculate(5.6);
        expect(result).toBeCloseTo(9);
    });

    it('should return a sum of two numbers and ignore previous operation', function () {
        calcProcessor.setOperation('div', 1.2, false);
        calcProcessor.setOperation('sum', 1.2, true);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(4.6);
    });

    it('should return a sub of two numbers and ignore previous operation', function () {
        calcProcessor.setOperation('div', 1.2, false);
        calcProcessor.setOperation('sub', 1.2, true);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(-2.2);
    });

    it('should return a mul of two numbers and ignore previous operation', function () {
        calcProcessor.setOperation('div', 1.2, false);
        calcProcessor.setOperation('mul', 1.2, true);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(4.08);
    });

    it('should return a div of two numbers and ignore previous operation', function () {
        calcProcessor.setOperation('sum', 1.2, false);
        calcProcessor.setOperation('div', 1.2, true);
        var result = calcProcessor.calculate(3.4);
        expect(result).toBeCloseTo(0.352941176);
    });

    it('should return a sum of two same numbers', function () {
        calcProcessor.setOperation('sum', 1.2, false);
        var result = calcProcessor.calculate(1.2);
        expect(result).toBeCloseTo(2.4);
    });

    it('should return a sub of two same numbers, i.e. 0', function () {
        calcProcessor.setOperation('sub', 1.2, false);
        var result = calcProcessor.calculate(1.2);
        expect(result).toBeCloseTo(0);
    });

    it('should return a mul of two same numbers', function () {
        calcProcessor.setOperation('mul', 1.2, false);
        var result = calcProcessor.calculate(1.2);
        expect(result).toBeCloseTo(1.44);
    });

    it('should return a div of two same numbers, i.e. 1', function () {
        calcProcessor.setOperation('div', 1.2, false);
        var result = calcProcessor.calculate(1.2);
        expect(result).toBeCloseTo(1);
    });
});

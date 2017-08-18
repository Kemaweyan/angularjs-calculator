'use strict';

describe('calcDisplay', function () {

    beforeEach(module('calculator'));

    var calcDisplay;

    beforeEach(inject(function ($filter) {
        calcDisplay = $filter('calcDisplay');
    }));

    it('should return the same string', function () {
        var result = calcDisplay("the string");
        expect(result).toBe("the string");
    });

    it('should return the same number', function () {
        var result = calcDisplay(1234.5678);
        expect(result).toBe(1234.5678);
    });

    it('should return shortened number', function () {
        var result = calcDisplay(1234.5678912345678);
        expect(result).toBe(1234.5678912);
    });
});

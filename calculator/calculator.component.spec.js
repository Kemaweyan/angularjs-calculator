'use strict';

describe('calculator', function () {

    beforeEach(module('calculator'));

    describe('calculatorController', function () {
        var ctrl;

        beforeEach(inject(function ($componentController) {
            ctrl = $componentController('calculator');
        }));

        it('should set a default value for the `displayData` property to 0', function () {
            expect(ctrl.displayData).toBe(0);
        });
    });
});

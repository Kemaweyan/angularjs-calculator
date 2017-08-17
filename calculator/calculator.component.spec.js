'use strict';

describe('calculator', function () {

    beforeEach(module('calculator'));

    describe('calculatorController', function () {
        var ctrl, calcInput, calcProcessor;

        beforeEach(inject(function ($componentController, _calcInput_, _calcProcessor_) {
            // get the calculator component controller
            ctrl = $componentController('calculator');
            // set spies on methods of the calcInput service
            calcInput = _calcInput_;
            spyOn(calcInput, 'addNumber');
            spyOn(calcInput, 'addDot');
            spyOn(calcInput, 'getStrValue').and.returnValue('the getStrValue result');
            spyOn(calcInput, 'getNumValue').and.returnValue('the getNumValue result');
            spyOn(calcInput, 'reset');
            spyOn(calcInput, 'setValue');
            // set spies on methods of the calcProcessor service
            calcProcessor = _calcProcessor_;
            spyOn(calcProcessor, 'calculate').and.returnValue('the calculate result');
            spyOn(calcProcessor, 'reset');
        }));

        it('should set a default value for the `displayData` property to 0', function () {
            expect(ctrl.displayData).toBe("0");
        });

        it('should call the `calcInput.addNumber` and assign the return value of `calcInput.getStrValue` to `displayData`', function () {
            ctrl.number('the number');
            expect(calcInput.addNumber).toHaveBeenCalledWith('the number');
            expect(calcInput.getStrValue).toHaveBeenCalled();
            expect(ctrl.displayData).toBe('the getStrValue result');
        });

        it('should call the `calcInput.addDot` and assign the return value of `calcInput.getStrValue` to `displayData`', function () {
            ctrl.dot();
            expect(calcInput.addDot).toHaveBeenCalled();
            expect(calcInput.getStrValue).toHaveBeenCalled();
            expect(ctrl.displayData).toBe('the getStrValue result');
        });

        it('should reset the `calcInput` and `calcProcessor` services and set a default value for the `displayData` property', function () {
            ctrl.reset();
            expect(calcInput.reset).toHaveBeenCalled();
            expect(calcProcessor.reset).toHaveBeenCalled();
            expect(ctrl.displayData).toBe("0");
        });

        it('should calculate a result and set it as a value for the `displayData` property and to `calcInput.setValue`', function () {
            ctrl.operation('the operation');
            expect(calcInput.getNumValue).toHaveBeenCalled();
            expect(calcProcessor.calculate).toHaveBeenCalledWith('the operation', 'the getNumValue result');
            expect(calcInput.setValue).toHaveBeenCalledWith('the calculate result');
            expect(ctrl.displayData).toBe('the calculate result');
        });
    });
});

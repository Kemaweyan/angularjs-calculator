describe("An AngularJS Calculator Application", function () {

    describe("calculator", function () {
        var display,
            num1,
            num2,
            num3,
            num4,
            num5,
            num6,
            num7,
            num8,
            num9,
            num0,
            dot,
            plus,
            minus,
            multiple,
            divide,
            equals,
            reset;

        beforeEach(function () {
            browser.get("index.html");
            display = element(by.id('calc_display'));
            num1 = element(by.linkText("1"));
            num2 = element(by.linkText("2"));
            num3 = element(by.linkText("3"));
            num4 = element(by.linkText("4"));
            num5 = element(by.linkText("5"));
            num6 = element(by.linkText("6"));
            num7 = element(by.linkText("7"));
            num8 = element(by.linkText("8"));
            num9 = element(by.linkText("9"));
            num0 = element(by.linkText("0"));
            dot = element(by.linkText("."));
            plus = element(by.linkText("+"));
            minus = element(by.linkText("-"));
            multiple = element(by.linkText("\u00d7"));
            divide = element(by.linkText("\u00f7"));
            equals = element(by.linkText("="));
            reset = element(by.linkText("C"));
        });

        it('should display 0', function () {
            expect(display.getText()).toEqual("0");
        });

        it('should display inputted number', function () {
            num1.click();
            expect(display.getText()).toEqual("1");
            num2.click();
            expect(display.getText()).toEqual("12");
            dot.click();
            expect(display.getText()).toEqual("12");
            num3.click();
            expect(display.getText()).toEqual("12.3");
            num4.click();
            expect(display.getText()).toEqual("12.34");
        });

        it('should calculate a sum of two numbers', function () {
            num1.click();
            num2.click();
            dot.click();
            num3.click();
            num4.click();
            expect(display.getText()).toEqual("12.34");
            plus.click();
            expect(display.getText()).toEqual("12.34");
            num9.click();
            num8.click();
            dot.click();
            num7.click();
            num6.click();
            expect(display.getText()).toEqual("98.76");
            equals.click();
            expect(display.getText()).toEqual("111.1");
        });

        it('should calculate a sub of two numbers', function () {
            num5.click();
            num8.click();
            dot.click();
            num9.click();
            num5.click();
            expect(display.getText()).toEqual("58.95");
            minus.click();
            expect(display.getText()).toEqual("58.95");
            num6.click();
            num3.click();
            dot.click();
            num2.click();
            num7.click();
            expect(display.getText()).toEqual("63.27");
            equals.click();
            expect(display.getText()).toEqual("-4.32");
        });

        it('should calculate a mul of two numbers', function () {
            num3.click();
            num6.click();
            dot.click();
            num2.click();
            num4.click();
            expect(display.getText()).toEqual("36.24");
            multiple.click();
            expect(display.getText()).toEqual("36.24");
            num8.click();
            num1.click();
            dot.click();
            num0.click();
            num1.click();
            expect(display.getText()).toEqual("81.01");
            equals.click();
            expect(display.getText()).toEqual("2935.8024");
        });

        it('should calculate a div of two numbers', function () {
            num1.click();
            num4.click();
            num8.click();
            dot.click();
            num7.click();
            num9.click();
            expect(display.getText()).toEqual("148.79");
            divide.click();
            expect(display.getText()).toEqual("148.79");
            num2.click();
            num4.click();
            dot.click();
            num1.click();
            num7.click();
            expect(display.getText()).toEqual("24.17");
            equals.click();
            expect(display.getText()).toEqual("6.1559784857");
        });

        it('should calculate a sum of two same numbers', function () {
            num2.click();
            num1.click();
            num9.click();
            num8.click();
            dot.click();
            num3.click();
            num2.click();
            expect(display.getText()).toEqual("2198.32");
            plus.click();
            expect(display.getText()).toEqual("2198.32");
            equals.click();
            expect(display.getText()).toEqual("4396.64");
        });

        it('should calculate a negative value of the number', function () {
            num5.click();
            num6.click();
            num3.click();
            num4.click();
            dot.click();
            num1.click();
            num9.click();
            expect(display.getText()).toEqual("5634.19");
            minus.click();
            expect(display.getText()).toEqual("5634.19");
            equals.click();
            expect(display.getText()).toEqual("-5634.19");
        });

        it('should calculate a mul of two same numbers', function () {
            num2.click();
            num3.click();
            num7.click();
            num6.click();
            dot.click();
            num1.click();
            num7.click();
            expect(display.getText()).toEqual("2376.17");
            multiple.click();
            expect(display.getText()).toEqual("2376.17");
            equals.click();
            expect(display.getText()).toEqual("5646183.8689");
        });

        it('should calculate a multiplicative inverse of the number', function () {
            num3.click();
            num2.click();
            num9.click();
            num9.click();
            dot.click();
            num6.click();
            num5.click();
            expect(display.getText()).toEqual("3299.65");
            divide.click();
            expect(display.getText()).toEqual("3299.65");
            equals.click();
            expect(display.getText()).toEqual("0.0003030624");
        });

        it('should calculate a sum of three numbers', function () {
            num3.click();
            num5.click();
            dot.click();
            num7.click();
            num8.click();
            expect(display.getText()).toEqual("35.78");
            plus.click();
            expect(display.getText()).toEqual("35.78");
            num1.click();
            num5.click();
            dot.click();
            num2.click();
            num2.click();
            expect(display.getText()).toEqual("15.22");
            plus.click();
            expect(display.getText()).toEqual("51");
            num2.click();
            num1.click();
            dot.click();
            num6.click();
            num7.click();
            expect(display.getText()).toEqual("21.67");
            equals.click();
            expect(display.getText()).toEqual("72.67");
        });

        it('should calculate a sub of three numbers', function () {
            num9.click();
            num6.click();
            dot.click();
            num0.click();
            num1.click();
            expect(display.getText()).toEqual("96.01");
            minus.click();
            expect(display.getText()).toEqual("96.01");
            num4.click();
            num4.click();
            dot.click();
            num8.click();
            num7.click();
            expect(display.getText()).toEqual("44.87");
            minus.click();
            expect(display.getText()).toEqual("51.14");
            num2.click();
            num1.click();
            dot.click();
            num1.click();
            num4.click();
            expect(display.getText()).toEqual("21.14");
            equals.click();
            expect(display.getText()).toEqual("30");
        });

        it('should calculate a mul of three numbers', function () {
            num1.click();
            num4.click();
            dot.click();
            num2.click();
            num6.click();
            expect(display.getText()).toEqual("14.26");
            multiple.click();
            expect(display.getText()).toEqual("14.26");
            num3.click();
            num5.click();
            dot.click();
            num1.click();
            num5.click();
            expect(display.getText()).toEqual("35.15");
            multiple.click();
            expect(display.getText()).toEqual("501.239");
            num8.click();
            num6.click();
            dot.click();
            num7.click();
            num2.click();
            expect(display.getText()).toEqual("86.72");
            equals.click();
            expect(display.getText()).toEqual("43467.44608");
        });

        it('should calculate a div of three numbers', function () {
            num9.click();
            num5.click();
            dot.click();
            num8.click();
            num4.click();
            expect(display.getText()).toEqual("95.84");
            divide.click();
            expect(display.getText()).toEqual("95.84");
            num2.click();
            num6.click();
            dot.click();
            num8.click();
            num1.click();
            expect(display.getText()).toEqual("26.81");
            divide.click();
            expect(display.getText()).toEqual("3.5747855278");
            num4.click();
            num3.click();
            dot.click();
            num2.click();
            num7.click();
            expect(display.getText()).toEqual("43.27");
            equals.click();
            expect(display.getText()).toEqual("0.0826157968");
        });

        it('should calculate a sum of two numbers and sub with third number', function () {
            num5.click();
            num1.click();
            dot.click();
            num9.click();
            num4.click();
            expect(display.getText()).toEqual("51.94");
            plus.click();
            expect(display.getText()).toEqual("51.94");
            num2.click();
            num3.click();
            dot.click();
            num8.click();
            num4.click();
            expect(display.getText()).toEqual("23.84");
            minus.click();
            expect(display.getText()).toEqual("75.78");
            num6.click();
            num5.click();
            dot.click();
            num1.click();
            num1.click();
            expect(display.getText()).toEqual("65.11");
            equals.click();
            expect(display.getText()).toEqual("10.67");
        });

        it('should calculate a sub of two numbers and mul with third number', function () {
            num4.click();
            num5.click();
            dot.click();
            num2.click();
            num3.click();
            expect(display.getText()).toEqual("45.23");
            minus.click();
            expect(display.getText()).toEqual("45.23");
            num6.click();
            num1.click();
            dot.click();
            num9.click();
            num9.click();
            expect(display.getText()).toEqual("61.99");
            multiple.click();
            expect(display.getText()).toEqual("-16.76");
            num3.click();
            num4.click();
            dot.click();
            num0.click();
            num7.click();
            expect(display.getText()).toEqual("34.07");
            equals.click();
            expect(display.getText()).toEqual("-571.0132");
        });

        it('should calculate a mul of two numbers and div with third number', function () {
            num7.click();
            num4.click();
            dot.click();
            num5.click();
            num5.click();
            expect(display.getText()).toEqual("74.55");
            multiple.click();
            expect(display.getText()).toEqual("74.55");
            num5.click();
            num2.click();
            dot.click();
            num4.click();
            num8.click();
            expect(display.getText()).toEqual("52.48");
            divide.click();
            expect(display.getText()).toEqual("3912.384");
            num6.click();
            num3.click();
            dot.click();
            num2.click();
            num1.click();
            expect(display.getText()).toEqual("63.21");
            equals.click();
            expect(display.getText()).toEqual("61.895016611");
        });

        it('should calculate a div of two numbers and sum with third number', function () {
            num8.click();
            num8.click();
            dot.click();
            num6.click();
            num9.click();
            expect(display.getText()).toEqual("88.69");
            divide.click();
            expect(display.getText()).toEqual("88.69");
            num7.click();
            num5.click();
            dot.click();
            num0.click();
            num0.click();
            expect(display.getText()).toEqual("75.00");
            plus.click();
            expect(display.getText()).toEqual("1.1825333333");
            num2.click();
            num3.click();
            dot.click();
            num7.click();
            num7.click();
            expect(display.getText()).toEqual("23.77");
            equals.click();
            expect(display.getText()).toEqual("24.952533333");
        });

        it('should display Infinity when divide by 0', function () {
            num5.click();
            num3.click();
            dot.click();
            num8.click();
            num7.click();
            expect(display.getText()).toEqual("53.87");
            divide.click();
            expect(display.getText()).toEqual("53.87");
            num0.click();
            expect(display.getText()).toEqual("0");
            equals.click();
            expect(display.getText()).toEqual("Infinity");
        });

        it('should calculate a div of two numbers when operation has been changed to div', function () {
            num8.click();
            num5.click();
            dot.click();
            num0.click();
            num5.click();
            expect(display.getText()).toEqual("85.05");
            plus.click();
            divide.click();
            expect(display.getText()).toEqual("85.05");
            num4.click();
            num2.click();
            dot.click();
            num6.click();
            num8.click();
            expect(display.getText()).toEqual("42.68");
            equals.click();
            expect(display.getText()).toEqual("1.9927366448");
        });

        it('should calculate a sum of two numbers when operation has been changed to sum', function () {
            num4.click();
            num3.click();
            dot.click();
            num3.click();
            num1.click();
            expect(display.getText()).toEqual("43.31");
            minus.click();
            plus.click();
            expect(display.getText()).toEqual("43.31");
            num5.click();
            num6.click();
            dot.click();
            num6.click();
            num9.click();
            expect(display.getText()).toEqual("56.69");
            equals.click();
            expect(display.getText()).toEqual("100");
        });

        it('should calculate a sub of two numbers when operation has been changed to sub', function () {
            num1.click();
            num1.click();
            dot.click();
            num2.click();
            num5.click();
            expect(display.getText()).toEqual("11.25");
            multiple.click();
            minus.click();
            expect(display.getText()).toEqual("11.25");
            num9.click();
            num6.click();
            dot.click();
            num5.click();
            num8.click();
            expect(display.getText()).toEqual("96.58");
            equals.click();
            expect(display.getText()).toEqual("-85.33");
        });

        it('should calculate a mul of two numbers when operation has been changed to mul', function () {
            num7.click();
            num4.click();
            dot.click();
            num1.click();
            num3.click();
            expect(display.getText()).toEqual("74.13");
            divide.click();
            multiple.click();
            expect(display.getText()).toEqual("74.13");
            num6.click();
            num0.click();
            dot.click();
            num0.click();
            num9.click();
            expect(display.getText()).toEqual("60.09");
            equals.click();
            expect(display.getText()).toEqual("4454.4717");
        });

        it('should display 0 after reset has been clicked', function () {
            num9.click();
            num1.click();
            num5.click();
            num9.click();
            num7.click();
            dot.click();
            num8.click();
            num1.click();
            num8.click();
            num5.click();
            num4.click();
            num7.click();
            expect(display.getText()).toEqual("91597.818547");
            reset.click();
            expect(display.getText()).toEqual("0");
        });

        it('should display a new inputted number after reset has been clicked', function () {
            num2.click();
            num6.click();
            num3.click();
            dot.click();
            num7.click();
            num7.click();
            expect(display.getText()).toEqual("263.77");
            reset.click();
            num1.click();
            num0.click();
            num0.click();
            dot.click();
            num0.click();
            num1.click();
            expect(display.getText()).toEqual("100.01");
        });

        it('should calculate a sum of two numbers and ignore previous actions after reset has been clicked', function () {
            num1.click();
            num0.click();
            dot.click();
            num2.click();
            num4.click();
            expect(display.getText()).toEqual("10.24");
            minus.click();
            reset.click();
            num5.click();
            num1.click();
            dot.click();
            num6.click();
            num2.click();
            expect(display.getText()).toEqual("51.62");
            plus.click();
            expect(display.getText()).toEqual("51.62");
            num8.click();
            num6.click();
            dot.click();
            num4.click();
            num3.click();
            expect(display.getText()).toEqual("86.43");
            equals.click();
            expect(display.getText()).toEqual("138.05");
        });

        it('should calculate a sub of two numbers and ignore previous actions after reset has been clicked', function () {
            num6.click();
            num2.click();
            dot.click();
            num1.click();
            num4.click();
            expect(display.getText()).toEqual("62.14");
            multiple.click();
            reset.click();
            num2.click();
            num8.click();
            dot.click();
            num7.click();
            num1.click();
            expect(display.getText()).toEqual("28.71");
            minus.click();
            expect(display.getText()).toEqual("28.71");
            num6.click();
            num1.click();
            dot.click();
            num2.click();
            num8.click();
            expect(display.getText()).toEqual("61.28");
            equals.click();
            expect(display.getText()).toEqual("-32.57");
        });

        it('should calculate a mul of two numbers and ignore previous actions after reset has been clicked', function () {
            num9.click();
            num9.click();
            dot.click();
            num0.click();
            num9.click();
            expect(display.getText()).toEqual("99.09");
            divide.click();
            reset.click();
            num6.click();
            num9.click();
            dot.click();
            num2.click();
            num4.click();
            expect(display.getText()).toEqual("69.24");
            multiple.click();
            expect(display.getText()).toEqual("69.24");
            num1.click();
            num3.click();
            dot.click();
            num4.click();
            num6.click();
            expect(display.getText()).toEqual("13.46");
            equals.click();
            expect(display.getText()).toEqual("931.9704");
        });

        it('should calculate a div of two numbers and ignore previous actions after reset has been clicked', function () {
            num3.click();
            num6.click();
            dot.click();
            num7.click();
            num2.click();
            expect(display.getText()).toEqual("36.72");
            plus.click();
            reset.click();
            num1.click();
            num5.click();
            dot.click();
            num3.click();
            num3.click();
            expect(display.getText()).toEqual("15.33");
            divide.click();
            expect(display.getText()).toEqual("15.33");
            num8.click();
            num8.click();
            dot.click();
            num3.click();
            num9.click();
            expect(display.getText()).toEqual("88.39");
            equals.click();
            expect(display.getText()).toEqual("0.173435909");
        });

        it('should display a new inputted number after equals has been clicked', function () {
            num9.click();
            num6.click();
            num9.click();
            dot.click();
            num2.click();
            num1.click();
            expect(display.getText()).toEqual("969.21");
            equals.click();
            num3.click();
            num9.click();
            num5.click();
            dot.click();
            num3.click();
            num6.click();
            expect(display.getText()).toEqual("395.36");
        });

        it('should calculate a sum of two numbers after equals and plus have been clicked', function () {
            num5.click();
            num4.click();
            dot.click();
            num2.click();
            num3.click();
            expect(display.getText()).toEqual("54.23");
            equals.click();
            plus.click();
            expect(display.getText()).toEqual("54.23");
            num1.click();
            num8.click();
            dot.click();
            num7.click();
            num1.click();
            expect(display.getText()).toEqual("18.71");
            equals.click();
            expect(display.getText()).toEqual("72.94");
        });

        it('should calculate a sub of two numbers after equals and minus have been clicked', function () {
            num2.click();
            num9.click();
            dot.click();
            num4.click();
            num8.click();
            expect(display.getText()).toEqual("29.48");
            equals.click();
            minus.click();
            expect(display.getText()).toEqual("29.48");
            num3.click();
            num1.click();
            dot.click();
            num1.click();
            num4.click();
            expect(display.getText()).toEqual("31.14");
            equals.click();
            expect(display.getText()).toEqual("-1.66");
        });

        it('should calculate a mul of two numbers after equals and multiple have been clicked', function () {
            num3.click();
            num1.click();
            dot.click();
            num6.click();
            num7.click();
            expect(display.getText()).toEqual("31.67");
            equals.click();
            multiple.click();
            expect(display.getText()).toEqual("31.67");
            num4.click();
            num3.click();
            dot.click();
            num5.click();
            num2.click();
            expect(display.getText()).toEqual("43.52");
            equals.click();
            expect(display.getText()).toEqual("1378.2784");
        });

        it('should calculate a div of two numbers after equals and divide have been clicked', function () {
            num1.click();
            num8.click();
            dot.click();
            num6.click();
            num9.click();
            expect(display.getText()).toEqual("18.69");
            equals.click();
            divide.click();
            expect(display.getText()).toEqual("18.69");
            num3.click();
            num5.click();
            dot.click();
            num1.click();
            num5.click();
            expect(display.getText()).toEqual("35.15");
            equals.click();
            expect(display.getText()).toEqual("0.5317211949");
        });

        it('should calculate a sum of two numbers and then a sub of two another numbers', function () {
            num3.click();
            num1.click();
            dot.click();
            num2.click();
            num8.click();
            expect(display.getText()).toEqual("31.28");
            plus.click();
            expect(display.getText()).toEqual("31.28");
            num4.click();
            num3.click();
            dot.click();
            num5.click();
            num4.click();
            expect(display.getText()).toEqual("43.54");
            equals.click();
            expect(display.getText()).toEqual("74.82");
            num6.click();
            num5.click();
            dot.click();
            num3.click();
            num1.click();
            expect(display.getText()).toEqual("65.31");
            minus.click();
            expect(display.getText()).toEqual("65.31");
            num8.click();
            num4.click();
            dot.click();
            num6.click();
            num6.click();
            expect(display.getText()).toEqual("84.66");
            equals.click();
            expect(display.getText()).toEqual("-19.35");
        });

        it('should calculate a sub of two numbers and then a mul of two another numbers', function () {
            num5.click();
            num3.click();
            dot.click();
            num4.click();
            num1.click();
            expect(display.getText()).toEqual("53.41");
            minus.click();
            expect(display.getText()).toEqual("53.41");
            num2.click();
            num4.click();
            dot.click();
            num9.click();
            num8.click();
            expect(display.getText()).toEqual("24.98");
            equals.click();
            expect(display.getText()).toEqual("28.43");
            num1.click();
            num1.click();
            dot.click();
            num6.click();
            num7.click();
            expect(display.getText()).toEqual("11.67");
            multiple.click();
            expect(display.getText()).toEqual("11.67");
            num3.click();
            num8.click();
            dot.click();
            num5.click();
            num4.click();
            expect(display.getText()).toEqual("38.54");
            equals.click();
            expect(display.getText()).toEqual("449.7618");
        });

        it('should calculate a mul of two numbers and then a div of two another numbers', function () {
            num6.click();
            num9.click();
            dot.click();
            num5.click();
            num2.click();
            expect(display.getText()).toEqual("69.52");
            multiple.click();
            expect(display.getText()).toEqual("69.52");
            num5.click();
            num4.click();
            dot.click();
            num8.click();
            num1.click();
            expect(display.getText()).toEqual("54.81");
            equals.click();
            expect(display.getText()).toEqual("3810.3912");
            num8.click();
            num9.click();
            dot.click();
            num6.click();
            num3.click();
            expect(display.getText()).toEqual("89.63");
            divide.click();
            expect(display.getText()).toEqual("89.63");
            num4.click();
            num2.click();
            dot.click();
            num1.click();
            num7.click();
            expect(display.getText()).toEqual("42.17");
            equals.click();
            expect(display.getText()).toEqual("2.1254446289");
        });

        it('should calculate a div of two numbers and then a sum of two another numbers', function () {
            num1.click();
            num3.click();
            dot.click();
            num8.click();
            num6.click();
            expect(display.getText()).toEqual("13.86");
            divide.click();
            expect(display.getText()).toEqual("13.86");
            num2.click();
            num9.click();
            dot.click();
            num5.click();
            num7.click();
            expect(display.getText()).toEqual("29.57");
            equals.click();
            expect(display.getText()).toEqual("0.4687182956");
            num4.click();
            num8.click();
            dot.click();
            num9.click();
            num1.click();
            expect(display.getText()).toEqual("48.91");
            plus.click();
            expect(display.getText()).toEqual("48.91");
            num6.click();
            num7.click();
            dot.click();
            num0.click();
            num2.click();
            expect(display.getText()).toEqual("67.02");
            equals.click();
            expect(display.getText()).toEqual("115.93");
        });
    });
});

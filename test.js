const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test("Convert dollars to yen", () => {
    const result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26);
});

test("Convert euros to dollars", () => {
        const dollars = fromEuroToDollar(10);
        expect(dollars).toBeCloseTo(10.7);
});

test("Convert yen to pounds", () => {
        const pounds = fromYenToPound(156.5);
        expect(pounds).toBeCloseTo(0.87);
});
const { fromDollarToYen } = require('./app');

test("One dollar should be converted to yen correctly", () => {
    const result = fromDollarToYen(1);
    expect(result).toBeCloseTo(146.26);
});
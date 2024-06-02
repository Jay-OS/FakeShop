
import * as parsing from './parsing';

describe('parsing', () => {
    test.each([[null, undefined], [undefined, undefined], [1,1], [1.2, undefined], ['2.6', undefined], ['5', 5]])(
        '.parseToStrictInteger(%s) => %s',
        (a, expected) => {
            expect(parsing.parseToStrictInteger(a)).toBe(expected);
        }
    );
});

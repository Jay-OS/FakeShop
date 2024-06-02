
import * as validation from './validation';

describe('validation', () => {
    test.each([[null, true], [undefined, true], [1,false], [0, false], ['', false], ['0', false], [NaN, false]])(
        '.isNullOrUndefined(%s) => %s',
        (a, expected) => {
            expect(validation.isNullOrUndefined(a)).toBe(expected);
        }
    );

    test.each([[null, true], [undefined, true], ['', true], ['0', false], ['  ', true]])(
        '.isNullUndefinedOrWhiteSpace(%s) => %s',
        (a, expected) => {
            expect(validation.isNullUndefinedOrWhiteSpace(a)).toBe(expected);
        }
    );

    test.each([[null, false], [undefined, false], ['', false], ['  ', false], ['other', false], ['http://www.domain.com/path/path/?query=value', true], ['http://www.domain.com/path/path/image.png', true]])(
        '.isValidURL(%s) => %s',
        (a, expected) => {
            expect(validation.isValidURL(a)).toBe(expected);
        }
    );
});

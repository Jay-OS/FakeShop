import { isNullOrUndefined } from './validation';

/**
 * Takes a value and, where possible, parses it to an integer
 * 
 * @param {(string|number|null|undefined)} value The value to be parsed
 * 
 * @returns {(number|undefined)} The result of parsing the value (will always return undefined when value cannot be strictly parsed to integer)
*/
export function parseToStrictInteger(value?: number | string | null): number | undefined {
    if (isNullOrUndefined(value)) return undefined;

    return Number.isSafeInteger(Number.parseFloat(`${value}`))
        ? Number.parseInt(`${value}`, 10) : undefined;
};

/**
 * Takes a value and, where possible, parses it to a Date object
 * 
 * @param {(string|null|undefined)} value The value to be parsed
 * 
 * @returns {(Date|undefined)} The result of parsing the value (will always return undefined when value cannot be parsed to a Date object)
 */
export function parseToDateTime(value?: string | null): Date | undefined {
    if (isNullOrUndefined(value)) return undefined;

    const parsedDateTimeStamp = Date.parse(value!);
    return !Number.isNaN(parsedDateTimeStamp)
        ? new Date(parsedDateTimeStamp) : undefined;
}

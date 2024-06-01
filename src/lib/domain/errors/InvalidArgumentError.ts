export default class InvalidArgumentError extends Error {
    constructor(parameter: string, value: unknown) {
        super(`${value} is an invalid value for the ${parameter} parameter`);
        this.name = "InvalidArgumentError";

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, InvalidArgumentError);
        }
    }
}
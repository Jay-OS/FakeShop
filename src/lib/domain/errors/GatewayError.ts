export default class GatewayError extends Error {
    cause: Error;

    constructor(message: string, cause: any) {
        super(message);
        this.name = "GatewayError";
        this.cause = cause;

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, GatewayError);
        }
    }
}
export default class EntityConversionError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EntityConversionError";

        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, EntityConversionError);
        }
    }
}
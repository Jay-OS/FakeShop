export function isNullOrUndefined(value?: unknown | null): boolean {
    return value === undefined || value === null;
}

export function isNullUndefinedOrWhiteSpace(value?: string | null): boolean {
 return !value?.trim();
}

export function isValidURL(value?: string | null): boolean {
    if (isNullUndefinedOrWhiteSpace(value)) return false;

    try {
        const url = new URL(value!);
    } catch {
        return false;
    }

    return true;
}

import { transpile } from "./transpile";

export function createMicromouseCode(code: string): string {
    return transpile(code)
        .replace('export {};', '')
        .replace(' export ', '')
        .replace('export ', '')
}

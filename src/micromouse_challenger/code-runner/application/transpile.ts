import * as Babel from '@babel/standalone'

export function transpile(code: string) {
    try {
        const options = {
            presets: ["typescript"],
            filename: 'my-file.ts',
            comments: false,
        }
        return Babel.transform(code, options).code;
    } catch (error) {
        console.error("Error al transpilar el código TypeScript:", error);
    }
}


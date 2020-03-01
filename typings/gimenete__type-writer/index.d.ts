declare module '@gimenete/type-writer' {
    export interface KeyPath {
        object?: Record<string, KeyPath>
        keypath: string,
        required?: boolean,
        null?: unknown,
        string?: unknown,
        number?: unknown,
        boolean?: unknown,
        array?: {
            '[]': KeyPath
        },
    }

    class TypeWriter {
        typeNames: Array<string>
        keypaths: Record<string, KeyPath>

        constructor()
        add(examples: Array<Record<string, unknown>>, options?: {
            rootTypeName?: string,
            namedKeyPaths?: Record<string, string>
        }): void
    }

    export default TypeWriter
}

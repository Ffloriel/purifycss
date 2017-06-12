// @flow
export type Options = {
    content: Array<string>,
    css: Array<string>,
    extracters?: Array<ExtractersObj>,
    whitelist?: Array<string>,
    output?: string | boolean,
    info?: boolean,
    rejected?: boolean
}

export type ExtractersObj = {
    extracter: Object,
    extension: Array<string>
}

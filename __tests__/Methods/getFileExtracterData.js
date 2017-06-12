export class PurifyCssExtracterHtml {
    extract(content) {}
}

export class PurifyCssExtracterJs {
    extract(content) {}
}

export class PurifyCssExtracterPug {
    extract(content) {}
}

export class PurifyCssExtracterEjs {
    extract(content) {}
}

export class PurifyCssExtracterDefault {
    extract(content) {}
}

export class PurifyCssExtracterMissingParams {
    extract() {}
}

export class PurifyCssExtracterMissingMethods {
    extract() {}
}

export const TEST_1 = [
    {
        extracter: PurifyCssExtracterHtml,
        extensions: ["html"]
    }
]

export const TEST_1_FILENAME = "hello.html"
export const TEST_1_EXPECTED = PurifyCssExtracterHtml

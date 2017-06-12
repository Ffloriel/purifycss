import PurifyCss from "./../../lib/purifycss"
import {
    PurifyCssExtracterDefault,
    PurifyCssExtracterEjs,
    PurifyCssExtracterHtml,
    PurifyCssExtracterJs,
    PurifyCssExtracterMissingMethods,
    PurifyCssExtracterMissingParams,
    PurifyCssExtracterPug
} from "./getFileExtracterData"

import {
    TEST_1,
    TEST_1_EXPECTED,
    TEST_1_FILENAME
} from "./getFileExtracterData"

describe("getFileExtracter", () => {
    it("should return the corresponding extracter", () => {
        const expected = TEST_1_EXPECTED
        const received = PurifyCss.getFileExtracter(TEST_1_FILENAME, TEST_1)
        console.log(received)
        expect(received).toEqual(expected)
    })
})

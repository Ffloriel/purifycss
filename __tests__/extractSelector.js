import PurifyCss from "./../src/index"
import { TEST_1_CONTENT, TEST_1_EXPECTED } from "./extractSelectorContent"

test("extractSelector", () => {
    it("should return every word", () => {
        const expected = new Set(TEST_1_EXPECTED)
        const received = PurifyCss.extractSelector(TEST_1_CONTENT)
        expect(received).toEqual(expected)
    })
})

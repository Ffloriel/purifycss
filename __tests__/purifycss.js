import PurifyCss from "./../lib/purifycss"

describe("initialize purifycss", () => {
    it("throw an error without options", () => {
        expect(() => {
            new PurifyCss()
        }).toThrow()
    })

    it("throw an error without an object options", () => {
        expect(() => {
            new PurifyCss(1)
        }).toThrow(TypeError)
        expect(() => {
            new PurifyCss("hello")
        }).toThrow(TypeError)
        expect(() => {
            new PurifyCss(false)
        }).toThrow(TypeError)
    })

    it("throws an error without content option", () => {
        expect(() => {
            new PurifyCss({})
        }).toThrow()
        expect(() => {
            new PurifyCss({
                css: [],
                extracters: []
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({ css: ["style.css"] })
        }).toThrow()
    })

    it("throws an error with an empty content array option", () => {
        expect(() => {
            new PurifyCss({ content: [] })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: [],
                css: []
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: [],
                css: ["style.css"]
            })
        })
    })

    it("throws an error without css option", () => {
        expect(() => {
            new PurifyCss({})
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: [],
                extracters: []
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({ content: ["index.html"] })
        }).toThrow()
    })

    it("throws an error with an empty css array option", () => {
        expect(() => {
            new PurifyCss({ css: [] })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: [],
                css: []
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                css: [],
                content: ["index.html"]
            })
        })
    })
})

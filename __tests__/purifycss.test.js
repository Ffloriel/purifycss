// import PurifyCss from "./../lib/purifycss"
import PurifyCss from "./../src/index"
const root = "./__tests__/test_examples/"

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

    it("throws an error with an incorrect output option", () => {
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                output: {}
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                output: 100
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                output: true
            }).toThrow()
        })
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                output: () => {}
            }).toThrow()
        })
    })

    it("throws an error with an incorrect extracter option", () => {
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                extracters: {}
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                extracters: 100
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                extraters: "hello"
            }).toThrow()
        })
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                extracters: () => {}
            }).toThrow()
        })
    })

    it("throws an error with an incorrect whitelist option", () => {
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                whitelist: {}
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                whitelist: 100
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                whitelist: "hello"
            }).toThrow()
        })
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                whitelist: () => {}
            }).toThrow()
        })
    })

    it("throws an error with an incorrect stdout option", () => {
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                stdout: {}
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                stdout: 100
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                stdout: "hello"
            }).toThrow()
        })
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                stdout: () => {}
            }).toThrow()
        })
    })

    it("throws an error with an incorrect info option", () => {
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                info: {}
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                info: 100
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                info: "hello"
            }).toThrow()
        })
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                info: () => {}
            }).toThrow()
        })
    })

    it("throws an error with an incorrect rejected option", () => {
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                rejected: {}
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                rejected: 100
            })
        }).toThrow()
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                rejected: "hello"
            }).toThrow()
        })
        expect(() => {
            new PurifyCss({
                content: ["index.html"],
                css: ["style.css"],
                rejected: () => {}
            }).toThrow()
        })
    })
})

describe("purify methods with files", () => {
    it("purify correctly (legacy)", () => {
        const purifyCss = new PurifyCss({
            content: [
                "./__tests__/test_examples/attribute_selector/attribute_selector.html"
            ],
            css: [
                "./__tests__/test_examples/attribute_selector/attribute_selector.css"
            ]
        })
        const received = purifyCss.purify()[0].css
        expect(received.includes(".ui[class*=\"center aligned\"].grid")).toBe(
            true
        )
    })

    describe("purify correctly (find intact classes)", () => {
        it("finds .single", () => {
            const purifyCss = new PurifyCss({
                content: [`${root}simple/simple.js`],
                css: [`${root}simple/simple.css`],
                legacy: true
            })
            const result = purifyCss.purify()[0].css
            expect(result.includes(".single")).toBe(true)
        })

        it("finds .double-class", () => {
            const purifyCss = new PurifyCss({
                content: [`${root}simple/simple.js`],
                css: [`${root}simple/simple.css`],
                legacy: true
            })
            const result = purifyCss.purify()[0].css
            expect(result.includes(".double-class")).toBe(true)
        })

        it("can find .triple-simple-class", () => {
            const purifyCss = new PurifyCss({
                content: [`${root}simple/simple.js`],
                css: [`${root}simple/simple.css`],
                legacy: true
            })
            const result = purifyCss.purify()[0].css
            expect(result.includes(".triple-simple-class")).toBe(true)
        })
    })

    describe("classes that are added together", () => {
        it("can find .added-together", () => {
            const purifyCss = new PurifyCss({
                content: [`${root}combined/combined.js`],
                css: [`${root}combined/combined.css`],
                legacy: true
            })

            const result = purifyCss.purify()[0].css
            expect(result.includes(".added-together")).toBe(true)
        })

        it("can find .array-joined", () => {
            const purifyCss = new PurifyCss({
                content: [`${root}combined/combined.js`],
                css: [`${root}combined/combined.css`],
                legacy: true
            })

            const result = purifyCss.purify()[0].css
            expect(result.includes(".array-joined")).toBe(true)
        })
    })

    describe("filters out unused selectors", () => {
        it("contains .used-class", () => {
            const purifycss = new PurifyCss({
                content: [`${root}remove_unused/remove_unused.js`],
                css: [`${root}remove_unused/remove_unused.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(".used-class")).toBe(true)
        })

        it("removes .unused-class", () => {
            const purifycss = new PurifyCss({
                content: [`${root}remove_unused/remove_unused.js`],
                css: [`${root}remove_unused/remove_unused.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(".unused-class")).toBe(false)
        })

        it("removes .another-one-not-found", () => {
            const purifycss = new PurifyCss({
                content: [`${root}remove_unused/remove_unused.js`],
                css: [`${root}remove_unused/remove_unused.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(".another-one-not-found")).toBe(false)
        })
    })

    describe("camelCase", () => {
        it("finds testFoo", () => {
            const purifycss = new PurifyCss({
                content: [`${root}camel_case/camel_case.js`],
                css: [`${root}camel_case/camel_case.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("testFoo")).toBe(true)
        })

        it("finds camelCase", () => {
            const purifycss = new PurifyCss({
                content: [`${root}camel_case/camel_case.js`],
                css: [`${root}camel_case/camel_case.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("camelCase")).toBe(true)
        })
    })

    describe("wildcard", () => {
        it("finds universal selector", () => {
            const purifycss = new PurifyCss({
                content: [`${root}wildcard/wildcard.html`],
                css: [`${root}wildcard/wildcard.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("*")).toBe(true)
        })

        it("finds :before", () => {
            const purifycss = new PurifyCss({
                content: [`${root}wildcard/wildcard.html`],
                css: [`${root}wildcard/wildcard.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("before")).toBe(true)
        })

        it("finds scrollbar", () => {
            const purifycss = new PurifyCss({
                content: [`${root}wildcard/wildcard.html`],
                css: [`${root}wildcard/wildcard.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("scrollbar")).toBe(true)
        })

        it("finds selection", () => {
            const purifycss = new PurifyCss({
                content: [`${root}wildcard/wildcard.html`],
                css: [`${root}wildcard/wildcard.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("selection")).toBe(true)
        })

        it("finds vertical", () => {
            const purifycss = new PurifyCss({
                content: [`${root}wildcard/wildcard.html`],
                css: [`${root}wildcard/wildcard.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("vertical")).toBe(true)
        })

        it("finds :root", () => {
            const purifycss = new PurifyCss({
                content: [`${root}wildcard/wildcard.html`],
                css: [`${root}wildcard/wildcard.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(":root")).toBe(true)
        })
    })

    describe("media queries", () => {
        it("finds .media-class", () => {
            const purifycss = new PurifyCss({
                content: [`${root}media_queries/media_queries.html`],
                css: [`${root}media_queries/media_queries.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(".media-class")).toBe(true)
        })

        it("finds .alone", () => {
            const purifycss = new PurifyCss({
                content: [`${root}media_queries/media_queries.html`],
                css: [`${root}media_queries/media_queries.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(".alone")).toBe(true)
        })

        it("finds #id-in-media", () => {
            const purifycss = new PurifyCss({
                content: [`${root}media_queries/media_queries.html`],
                css: [`${root}media_queries/media_queries.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("#id-in-media")).toBe(true)
        })

        it("finds body", () => {
            const purifycss = new PurifyCss({
                content: [`${root}media_queries/media_queries.html`],
                css: [`${root}media_queries/media_queries.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("body")).toBe(true)
        })

        it("removes .unused-class", () => {
            const purifycss = new PurifyCss({
                content: [`${root}media_queries/media_queries.html`],
                css: [`${root}media_queries/media_queries.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(".unused-class")).toBe(false)
        })

        it("removes the empty media query", () => {
            const purifycss = new PurifyCss({
                content: [`${root}media_queries/media_queries.html`],
                css: [`${root}media_queries/media_queries.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("66666px")).toBe(false)
        })
    })

    describe("special characters", () => {
        it("finds @home", () => {
            const purifycss = new PurifyCss({
                content: [`${root}special_characters/special_characters.js`],
                css: [`${root}special_characters/special_characters.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("@home")).toBe(true)
        })

        it("finds +rounded", () => {
            const purifycss = new PurifyCss({
                content: [`${root}special_characters/special_characters.js`],
                css: [`${root}special_characters/special_characters.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("+rounded")).toBe(true)
        })

        it("finds button", () => {
            const purifycss = new PurifyCss({
                content: [`${root}special_characters/special_characters.js`],
                css: [`${root}special_characters/special_characters.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("button")).toBe(true)
        })
    })

    describe("delimited", () => {
        it("removes the extra comma", () => {
            const purifycss = new PurifyCss({
                content: [`${root}delimited/delimited.html`],
                css: [`${root}delimited/delimited.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            var commaCount = result.split("").reduce((total, chr) => {
                if (chr === ",") {
                    return total + 1
                }

                return total
            }, 0)

            expect(commaCount).toBe(1)
        })

        it("finds h1", () => {
            const purifycss = new PurifyCss({
                content: [`${root}delimited/delimited.html`],
                css: [`${root}delimited/delimited.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("h1")).toBe(true)
        })

        it("finds p", () => {
            const purifycss = new PurifyCss({
                content: [`${root}delimited/delimited.html`],
                css: [`${root}delimited/delimited.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("p")).toBe(true)
        })

        it("removes .unused-class-name", () => {
            const purifycss = new PurifyCss({
                content: [`${root}delimited/delimited.html`],
                css: [`${root}delimited/delimited.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes(".unused-class-name")).toBe(false)
        })
    })

    describe("pseudo classes", () => {
        it("finds div:before", () => {
            const purifycss = new PurifyCss({
                content: [`${root}pseudo_class/pseudo_class.js`],
                css: [`${root}pseudo_class/pseudo_class.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("div:before")).toBe(true)
        })

        it("removes row:after", () => {
            const purifycss = new PurifyCss({
                content: [`${root}pseudo_class/pseudo_class.js`],
                css: [`${root}pseudo_class/pseudo_class.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("row:after")).toBe(false)
        })
    })

    describe("ignore comment", () => {
        it("ignore h1", () => {
            const purifycss = new PurifyCss({
                content: [`${root}ignore_comment/ignore_comment.html`],
                css: [`${root}ignore_comment/ignore_comment.css`],
                legacy: true
            })
            const result = purifycss.purify()[0].css
            expect(result.includes("h1")).toBe(true)
        })
    })
})

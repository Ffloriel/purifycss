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

describe("purify methods", () => {
    it("purify correctly", () => {
        const purifyCss = new PurifyCss({
            content: [
                "./__tests__/test_examples/attribute_selector/attribute_selector.html"
            ],
            css: [
                "./__tests__/test_examples/attribute_selector/attribute_selector.css"
            ]
        })
        const received = purifyCss.purify()
        console.log(received)
        expect(received).toEqual({})
    })
})

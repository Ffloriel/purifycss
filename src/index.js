// @flow
import type { ExtractersObj, Options } from "./../flow-typed/index"

import fs from "fs"
import glob from "glob"
import defaultOptions from "./constants/defaultOptions"
import postcss from "postcss"
import selectorParser from "postcss-selector-parser"
import {
    ERROR_MISSING_CONTENT,
    ERROR_MISSING_CSS,
    ERROR_EXTRACTER_FAILED,
    IGNORE_ANNOTATION
} from "./constants/constants"

import DefaultExtracter from "./Extracters/DefaultExtracter"

class PurifyCss {
    options: Options
    selectors: Set<string>

    constructor(options: Options) {
        if (!options.content) throw new Error(ERROR_MISSING_CONTENT)
        if (!options.css) throw new Error(ERROR_MISSING_CSS)
        this.options = Object.assign(options, defaultOptions)
        this.selectors = new Set()
    }

    purify() {
        // Get selectors from content files
        let cssClasses = this.extractContentSelector(
            this.options.content,
            this.options.extracters
        )
        // Get css selectors and remove unused ones
    }

    extractFileSelector(
        files: Array<string>,
        extracters: Array<ExtractersObj>
    ) {
        let selectors = new Set()
        for (let file of files) {
            const content = fs.readFileSync(file)
            const extracter = this.getFileExtracter(file, extracters)
            selectors = new Set(
                ...selectors,
                this.extractSelectors(content, extracter)
            )
        }
    }

    /**
     * Get the extracter corresponding to the extension file
     * @param {string} filename Name of the file
     * @param {array} extracters Array of extracters definition objects
     */
    getFileExtracter(filename: string, extracters: Array<ExtractersObj>) {
        const extracterObj: ExtractersObj = extracters.find(extracter =>
            extracter.extensions.find(ext => filename.endsWith(ext))
        )
        return extracterObj.extracter
    }

    extractSelectors(content: string, extracter: Object): Set<string> {
        let selectors = new Set()
        const arraySelector = extracter.extract(content)
        if (arraySelector === null) {
            throw new Error(ERROR_EXTRACTER_FAILED)
        }
        arraySelector.forEach(selector => {
            selectors.add(selector)
        })
        return selectors
    }

    getSelectorsCss(css: string) {
        const root = postcss.parse(css)
        root.walkRules(node => {
            const annotation = node.prev()
            if (this.isIgnoreAnnotation(annotation)) return
            const nodeType = node.type
            const selectorsInRule = []
            selectorParser(selectors => {
                selectors.walk(selector => {
                    if (selector.type === "class" || selector.type === "tag") {
                        selectorsInRule.push(selector.value)
                    }
                })
            }).process(node.selector)
            for (let selector of selectorsInRule) {
                if (this.selectors.has(selector)) return
            }
            node.remove()
        })
        return root;
    }

    isIgnoreAnnotation(node) {
        if (node && node.type === "comment") {
            return node.text.includes(IGNORE_ANNOTATION)
        }
        return false
    }
}

// quick test
const files = ["hello.js", "truc.html", "index.js", "templ.pug"]
const css = ".container table tbody, .container:not(.truc) { font-size: 15px;}"

// const extractersTest = [
//     {
//         extracter: {},
//         extensions: ["js", "jsx"]
//     }
// ]
// const puri = new PurifyCss({
//     content: files,
//     css,
//     extracters: extractersTest
// })
// puri.getSelectorsCss(css)

// puri.extractContentSelector(files, extractersTest)

export default PurifyCss

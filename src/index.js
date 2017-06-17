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
    ERROR_OPTIONS_TYPE,
    IGNORE_ANNOTATION
} from "./constants/constants"

import DefaultExtracter from "./Extracters/DefaultExtracter"

class PurifyCss {
    options: Options
    selectors: Set<string>

    constructor(options: Options) {
        if (typeof options !== "object") throw new TypeError(ERROR_OPTIONS_TYPE)
        if (!options.content || !options.content.length)
            throw new Error(ERROR_MISSING_CONTENT)
        if (!options.css || !options.css.length)
            throw new Error(ERROR_MISSING_CSS)
        this.options = Object.assign(defaultOptions, options)
        this.selectors = new Set()
    }

    purify() {
        // Get selectors from content files
        let cssClasses = this.extractFileSelector(
            this.options.content,
            this.options.extracters
        )
        // Get css selectors and remove unused ones
        let files = []
        for (let file of this.options.css) {
            const cssContent = fs.readFileSync(file, "utf8")
            files.push({
                file,
                css: this.getSelectorsCss(cssContent, cssClasses)
            })
        }
        return files
    }

    extractFileSelector(
        files: Array<string>,
        extracters: Array<ExtractersObj>
    ) {
        let selectors = new Set()
        for (let file of files) {
            const content = fs.readFileSync(file, "utf8")
            const extracter = this.getFileExtracter(file, extracters)
            selectors = new Set(
                ...selectors,
                this.extractSelectors(content, extracter)
            )
        }
        return selectors
    }

    /**
     * Get the extracter corresponding to the extension file
     * @param {string} filename Name of the file
     * @param {array} extracters Array of extracters definition objects
     */
    getFileExtracter(filename: string, extracters: Array<ExtractersObj> = []) {
        if (!extracters.length) return DefaultExtracter
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

    getSelectorsCss(css: string, selectors: Set<string>) {
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
                    } else if (selector.type === "attribute") {
                        selectorsInRule.push(selector.raws.unquoted)
                    }
                })
            }).process(node.selector)
            for (let selector of selectorsInRule) {
                if (selectors.has(selector)) return
            }
            node.remove()
        })
        return root.toString()
    }

    isIgnoreAnnotation(node) {
        if (node && node.type === "comment") {
            return node.text.includes(IGNORE_ANNOTATION)
        }
        return false
    }
}

export default PurifyCss

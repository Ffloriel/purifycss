import babel from "rollup-plugin-babel"
import builtins from "rollup-plugin-node-builtins"
import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"

export default {
    entry: "src/index.js",
    targets: [
        {
            dest: "lib/purifycss.es.js",
            format: "es"
        },
        {
            dest: "lib/purifycss.js",
            format: "cjs"
        }
    ],
    plugins: [
        builtins(),
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            presets: ["flow", ["es2015", { modules: false }]],
            plugins: ["external-helpers", "transform-class-properties"]
        })
    ],
    external: ["postcss", "postcss-selector-parser", "rework", "uglifyjs"],
    sourceMap: false
}

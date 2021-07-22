module.exports = {
    verbose: true,
    moduleFileExtensions: [
        "js",        
        "json",
        "vue",
        "ts"
    ],
    moduleNameMapper: {
        "^.+\\.(css|less|scss)$": "identity-obj-proxy"
      },
    transform: {
        ".*\\.(vue)$": "vue-jest",
        "^.+\\.ts$": "ts-jest",
        "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
        // "^.+\\.ts$": "<rootDir>/node_modules/babel-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: [
        "src/components/*.{js,vue}",
        "!**/node_modules/**"
    ],
    coverageReporters: [
        "html",
        "text-summary"
    ],
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel'
    // moduleNameMapper: {
    //     "^.+\\.(css|less|scss)$": "identity-obj-proxy",
        // "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
        // "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
        // "module_name_(.*)": "<rootDir>/substituted_module_$1.js",
        // "assets/(.*)": [
            // "<rootDir>/images/$1",
            // "<rootDir>/photos/$1",
            // "<rootDir>/recipes/$1"
        // ]
    // },
    // globals: {
    //     'ts-jest': {
    //         babelConfig: true
    //     }
    // }
}

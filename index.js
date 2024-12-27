/**
 * @typedef {{}} ConfigOptions
 */

/**
 * Create the Prettier configuration object
 *
 * @param {Partial<ConfigOptions>} options The options for the config
 * @returns {import('prettier').Options}
 */
export function config({} = {}) {
  return {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    requirePragma: false,
    insertPragma: false,
    proseWrap: "always",
    arrowParens: "always",
    htmlWhitespaceSensitivity: "css",
    endOfLine: "lf",
    quoteProps: "as-needed",
    embeddedLanguageFormatting: "auto",
    singleAttributePerLine: true,
    experimentalTernaries: false,
  };
}

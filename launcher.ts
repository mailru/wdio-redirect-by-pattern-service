///<reference path="./typings.d.ts" />

import {readFileSync} from 'fs';
import {join} from 'path';
import Rule = WebdriverIO.RedirectToPatternService.Rule;

const EXTENSION_PATH = join(__dirname, "./extensions/Redirect-by-pattern_v1.2.crx");
const EXTENSION_URL = 'chrome-extension://cbmflacocpalbpdafcegabhmgiklnfkn/popup.html';

export function beforeSession(config, capabilities) {
    const extension = new Buffer(
        readFileSync(EXTENSION_PATH)
    ).toString("base64");

    const chromeOptions = capabilities.chromeOptions;
    const extensions: string[] = chromeOptions.extensions || [];
    let args: string[] = chromeOptions.args || [];

    args = args.filter(arg => arg !== "--disable-extensions");
    extensions.push(extension);

    chromeOptions.extensions = extensions;
    chromeOptions.args = args;
}

export function before() {
    browser.url(EXTENSION_URL);

    const rules = getRules();

    rules.forEach((rule, index) => {
        const number = index + 1;

        browser.setValue(
            generateExtensionInputLocator(number, "match"),
            rule.match
        );

        browser.setValue(
            generateExtensionInputLocator(number, "replace"),
            rule.replace
        );
    });

    browser.click(".replaceto__status__button");
}

function getRules(): Rule[] {
    try {
        return browser.options.redirectToPattern.rules;
    } catch (e) {
        return [];
    }
}

function generateExtensionInputLocator(index, type: "match" | "replace") {
    return ".//*[contains(@class,'replaceto__list')]" +
        `/div[${index}]` +
        `//input[contains(@class,'js-input-${type}')]`;
}
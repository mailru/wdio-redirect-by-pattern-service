import {readFileSync} from 'fs';
import {join} from 'path';

const EXTENSION_PATH = join(__dirname, "./extensions/Redirect-by-pattern_v1.2.crx");

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
declare namespace WebdriverIO {

    namespace RedirectToPatternService {
        export type Rule = {
            match: string;
            replace: string;
        }
    }

    export interface Options {
        redirectToPattern: {
            rules: RedirectToPatternService.Rule[]
        }
    }
}
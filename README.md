# wdio-redirect-to-pattern-service

> WebdriverIO service for making redirects by pattern


## Installation

You can install wdio-redirect-to-pattern-service via NPM as usual:

```sh
$ npm install wdio-redirect-to-pattern-service --save
```

Instructions on how to install `WebdriverIO` can be found [here.](http://webdriver.io/guide/getstarted/install.html)

## Configuration
Setup wdio-redirect-to-pattern-service by adding `redirect-to-pattern` to the service section of your WebdriverIO config and define your desired redirect rules in `redirectToPattern` section.

```js
// wdio.conf.js

exports.config = {
  // ...
  services: [
    'redirect-to-pattern',
  ],
  redirectToPattern: {
    rules: [
        {
            match: ".*google.*",
            replace: "https://mail.ru"
        }
    ]
  },
  // ...
};
```

## How it works?

This service uses [Redirect-to-pattern](https://github.com/ivan-chashkin/redirect-by-pattern) plugin for Google Chrome. 
You can [install](https://chrome.google.com/webstore/detail/redirect-by-pattern/cbmflacocpalbpdafcegabhmgiklnfkn) it for yourself and play with settings before write config for service. 

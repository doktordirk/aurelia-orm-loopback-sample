module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "fetch",
        "get-prop",
        "homefront",
        "jquery",
        "text",
        "aurelia-api",
        "aurelia-authentication",
        "[aurelia-authentication/**/*.js]",
        "aurelia-datatable",
        "[aurelia-datatable/**/*.js]",
        "aurelia-datatable/**/*.html!text",
        "aurelia-orm",
        "[aurelia-orm/**/*.js]",
        "aurelia-orm/**/*.html!text",
        "aurelia-pager",
        "[aurelia-pager/**/*.js]",
        "aurelia-pager/**/*.html!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};

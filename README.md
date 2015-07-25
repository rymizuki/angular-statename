# angular-statename

[AngularJS](https://angularjs.org/) Directive for insert the current state name in the DOM.

## Usage

Include `angular-statename` width `angular` and `angular-ui-router` in your application.

```html
<script src="/js/angular.min.js"></script>
<script src="/js/angular-ui-router.min.js"></script>
<script src="/js/angular-statename.min.js"></script>
```

Add the module `angularStateName` as a dependency to your app module.

```javascript
angular.module('app', ['ui.router', 'angularStateName']);
```

Add the directive in your html.

```html
<body ng-state>
</body>
```

## License

MIT

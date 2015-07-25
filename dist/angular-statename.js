// @ngInject
function ngStateDirective ($state) {
  return function ($scope, $element, $attr) {
    var basename = $attr.ngStateBasename || null;
    $scope.$on('$stateChangeSuccess', function (ev, toState) {
      var name = basename ? toState.name.replace((basename + '.'), '') : toState.name;
      $element.attr('ng-state', name);
    });
  };
}
ngStateDirective.$inject = ["$state"];

angular.module('angularStateName', ['ui.router']).directive('ngState', ngStateDirective);

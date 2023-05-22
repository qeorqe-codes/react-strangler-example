import React from 'react';
import ReactDOM from 'react-dom/client';
import TestReactComponent from '../TestReactComponent';

angular.module('helloApp', [])
  .controller('HelloController', function($scope) {
    $scope.greeting = 'Hello, World!';
  })
  .directive('myComponent', function() {
    return {
      restrict: 'E',
      scope: {
        text: '='
      },
      link: function(scope, element) {
        scope.$watch('text', function(newValue, oldValue) {
          const testComponent = React.createElement(TestReactComponent, { text: newValue });
          const rootElement = ReactDOM.createRoot(element[0]);
          rootElement.render(testComponent);
        });
      }
    };
  });


// does not work with angular 1.4.5
// app.directive('myComponent', react2angular(TestReactComponent, ['text']));


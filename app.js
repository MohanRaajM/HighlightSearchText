angular.module('Demo', [])
  .controller('Demo', function($scope) {
    $scope.data = [
      { text: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop." }
    ]
  })
  .filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')
      return $sce.trustAsHtml(text)
    }
  })

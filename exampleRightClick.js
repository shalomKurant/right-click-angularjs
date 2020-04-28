-------------------------
ngRightClick.directive.js
-------------------------
angular.module("myApp")
.directive('ngRightClick', ["$parse", ($parse) => {
    return {
    	restrict: 'A',
    	link: ($scope, element, attrs) => {

			element.bind('contextmenu', (event) => {                
				$scope.$apply(() => {
					event.preventDefault();
					if(attrs.ngRightClick !== undefined){
                        var fn = $parse(attrs.ngRightClick);                      
						fn($scope, {$event:event});
					}
  	            });
  		    });
    	}
    }
}]);
----------------------------
folderHandling.component.js
----------------------------
angular.module('myApp')
.component('folderHandling', {
    templateUrl: './folderHandling.html',
    bindings: {
        data : '='
    },
    controller: function() {

        var $ctrl = this;

        $ctrl.openMenu = function(event) {
			// handel right-click
        };
        
    }
})
-------------------
folderHandling.html
-------------------
ng-right-click="$ctrl.openMenu($event)"


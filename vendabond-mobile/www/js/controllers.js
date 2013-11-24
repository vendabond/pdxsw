angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})
.controller('MenuCtrl', function($scope) {
    angular.extend($scope, {
        osloCenter: {
            lat: 45.52066143340206,
            lng: -122.6917290687561,
            zoom: 15
        },
        markers: {
            osloMarker: {
                lat: 45.52066143340206,
            lng: -122.6917290687561,
                focus: true,
                draggable: false
            }
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
  // Main app controller, empty for the example
})

// A simple controller that fetches a list of data
.controller('PetsTabCtrl', function($scope, Pets) {
  $scope.pets = Pets.all();

  $scope.$on('tab.shown', function() {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function() {
    // Might recycle content here
  });
})

.controller('CartsTabCtrl', function($scope, Carts) {
  $scope.carts = Carts.all();

  $scope.$on('tab.shown', function() {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function() {
    // Might recycle content here
  });
})

.controller('FavTabCtrl', function($scope, Carts) {
  $scope.carts = Carts.get(1);

  $scope.$on('tab.shown', function() {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function() {
    // Might recycle content here
  });
})

// A simple controller that shows a tapped item's data
.controller('PetCtrl', function($scope, $routeParams, Pets) {
  $scope.pet = Pets.get($routeParams.petId);
});

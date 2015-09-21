'use strict';

var inicio = angular.module('main_app', ['ngRoute', 'ngModal', 'angular-flexslider'])

  inicio.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/ixn', {
    	templateUrl: 'views/main.html',
    }).
    when('/lwc', {
    	templateUrl: 'views/about.html',
    }).
    when('/uys', {
    	templateUrl: 'views/product.html',
    }).
    when('/pze', {
    	templateUrl: 'views/services.html',
    }).
    when('/eks', {
    	templateUrl: 'views/events.html',
    }).
    when('/frh', {
    	templateUrl: 'views/galery.html',
    }).
    when('/kgj', {
    	templateUrl: 'views/contact.html',
    }).
    otherwise({
    	redirectTo: '/',
    	templateUrl: 'views/main.html',
    });
  }]);

  inicio.controller('slidercontrol', ['$scope', function($scope) {
    /*$scope.slides = [
      'images/banner08.jpg',
      'images/banner17.jpg',
      'images/banner18.jpg',
      'images/banner19.jpg',
      'images/banner21.jpg',
      'images/banner23.jpg'
    ];*/
    $scope.slides = [
      'images/slide0.jpg',
      'images/slide1.jpg',
      'images/slide2.jpg',
      'images/slide3.jpg',
      'images/slide4.jpg',
      'images/slide5.jpg'
    ];
  }]);

  inicio.controller('logo', ['$scope', '$http', function($scope, $http) {
    $http.get('database/logo.json').success(function(data){
      $scope.imglogo = data.logo;
      $scope.frase = data.frases;
    })
  }]);

  //Enviamos los datos al correo
  inicio.controller('sendmail', ['$scope', '$http', function($scope, $http) {
    var initial = this;
    initial.datain = {};
    initial.datasend = function () {
      $http.post('database/mail.json', initial.datain).success(function(data){
        //$scope.datosenviados = data;
        initial.datain = {}
      });
    }
  }]);

  //Listado de las categorias de los productos
  inicio.controller('categoryCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('database/categorias.json').success(function(data){
      $scope.categorias = data;
    })
  }]);

  //Listado de los servicios
  inicio.controller('servicesCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('database/servicios.json').success(function(data){
      $scope.servicios = data;
    })
  }]);

  //Listado de promociones
  inicio.controller('promsCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('database/promos.json').success(function(data){
      $scope.promociones = data;
    });
    /*$scope.fproductos = function (prods) {
      $http.get('database/products.json').success(function(data){
        $scope.productos = data;
      });
    }*/
    $scope.mdialog = {
      modalShown: false
    }
    $scope.logClose = function() {
      console.log('close!');
    };
    $scope.toggleModal = function(idcat, cattitle) {
      $scope.mdialog.modalShown = !$scope.mdialog.modalShown;
      $scope.mdialog.title_cat = cattitle;
      if ($scope.mdialog.modalShown) {
        $http.get('database/products.json', idcat).success(function(data){
          $scope.productos = data;
        });
      }
    };

  }]);
//-------------------------------------------
 /* app = angular.module('main_app', ['ngModal']);
    app.config(function(ngModalDefaultsProvider) {
        return ngModalDefaultsProvider.set({
          closeButtonHtml: "<i class='fa fa-times'></i>"
        });
    });*/

/*
function($scope, $http) {
  $http.get('database/logo.json').success(function(data){
    $scope.imglogo = data.logo;
    $scope.frase = data.frases;
  })
}
*/
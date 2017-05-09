this.officetechhelp = angular.module('officetechhelp', [
    'ui.router',
    'ncy-angular-breadcrumb',
    'updateMeta',
    'oc.lazyLoad'
  ]);

  officetechhelp.filter('capitalize', function() {
  return function(input) {
    if (!!input) {
      return input.charAt(0).toUpperCase() + input.substr(1).toLowerCase();
    } else {
      return '';
    }
  };
});

officetechhelp.run(function($rootScope, $state,$location) {
  $rootScope.$state = $state;   

   $rootScope.$on('$locationChangeSuccess', function() {
        if($rootScope.previousLocation == $location.path()) {
          if ($('.modal-backdrop').length != 0){
            location.reload()
          }
        }
        $rootScope.previousLocation = $rootScope.actualLocation;
        $rootScope.actualLocation = $location.path();
    });


    $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
    $rootScope.stateChanging = 1
    // console.log("stateChangeSuccess")

 });


  
  return $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $rootScope.stateChanging = 0
    return document.body.scrollTop = document.documentElement.scrollTop = 0;
  });
});




  this.officetechhelp.config(function ($stateProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $urlRouterProvider,$locationProvider) {
    this.officetechhelp.lazy = {
      compile: $compileProvider,
      controller: $controllerProvider.register,
      directive: $compileProvider.directive,
      filter: $filterProvider.register,
      factory: $provide.factory,
      service: $provide.service
    };
    var baseUrl;
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/404');
    baseUrl = "/views/";
      return $stateProvider.state('home', {
      abstract: true,
      url: "",
      access: "public"
    }).state('home.index', {
      url: "/",
      views: {
        "currentSection@": {
          templateUrl: baseUrl + "homePage.min.html",
          controller: "homeCtrl",
    
            resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             return $ocLazyLoad.load('../controllers/homepageCtrl.js');
    }]
  }
        }
      },
      ncyBreadcrumb: {
        
      }
    }).state('home.terms', {
      url: "/terms-conditions",
      views: {
        "currentSection@": {
          templateUrl: baseUrl + "terms.min.html",
          controller: "termCtrl",
    
            resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             return $ocLazyLoad.load('../controllers/termCtrl.js');
    }]
  }
        }
      },
      ncyBreadcrumb: {
        
      }
    }).state('home.privacy', {
      url: "/privacy",
      views: {
        "currentSection@": {
          templateUrl: baseUrl + "privacy.min.html",
          controller: "prvcyCtrl",
    
            resolve: {
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
             return $ocLazyLoad.load('../controllers/privacyPolicy.js');
    }]
  }
        }
      },
      ncyBreadcrumb: {
        
      }
    });

  })
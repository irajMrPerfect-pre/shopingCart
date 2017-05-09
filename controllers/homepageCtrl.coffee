@officetechhelp.lazy.controller 'homeCtrl', ($rootScope,$scope)->
	$scope.restCards = [{'name':'Product1','image':'1','price':1},{'name':'Product2','image':'2','price':2},{'name':'Product3','image':'3','price':3},{'name':'Product4','image':'4','price':4},{'name':'Product5','image':'5','price':3},{'name':'Product6','image':'6','price':3},{'name':'Product7','image':'7','price':7},{'name':'Product8','image':'8','price':8},{'name':'Product9','image':'9','price':9},{'name':'Product10','image':'10','price':10}]
	$rootScope.cartdata = 0
	$scope.addedCart = []
	$scope.addToCart=(cart)->
		if $.inArray(cart, $scope.addedCart) == -1
			$rootScope.cartdata = $rootScope.cartdata + 1
			$scope.addedCart.push cart
	$scope.chackCart = (name) ->
        $.inArray(name, $scope.addedCart) > -1

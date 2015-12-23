describe('InstagramListCtrl', function(){

  beforeEach(module('InstaCatalogApp'));

  it('should create "phones" model with 3 phones', inject(function($controller) {
    var scope = {},
        ctrl = $controller('InstagramListCtrl', {$scope:scope});

    expect(scope.phones.length).toBe(3);
  }));

});
(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController', function(){
		this.products = gems;
	});
	var gems = [
		{
			name : "Dodecahedron",
			price : 5.956 ,
			description : "abcdefghijklm",
			canPurchace : false,
			date : "1388123412323"
		},
		{
			name : "Penthagonal gem",
			price : 2 ,
			description : "...abcdefghijklm",
			canPurchace : true,
			date : "1388123472323"
		}
	];
})();

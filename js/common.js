$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

});


var App = {
	baseUrl:'http://fullstack.net.cn:3000'
}



$.fn.serializeToJson = function() {
	// console.log(this.serializeArray());
	var formAry = this.serializeArray();
	var result = {};
	formAry.forEach(function(item) {
		result[item.name] = item.value;
	})
	return result;
}